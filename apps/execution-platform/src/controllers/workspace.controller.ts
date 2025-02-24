import { KV, read, write } from "worktop/kv";
import { ENVVARS } from "../constants/envvar.const";
import { FlethyMetaDates, FlethyMetaUser } from "../types/general.type";
import { ErrorType, FlethyError } from "../utils/error.utils";
import { KVUtils } from "../utils/kv.utils";
import { ValidationUtils } from "../utils/validation.utils";
import { ProjectRole, WorkspaceRole } from "./auth.controller";
import { FlethyFlowController } from "./flethyflow.controller";

// KV NAMESPACE

declare var WORKSPACES: KV.Namespace;

// INTERFACES

export interface Project {
  id: string;
  name?: string;
  r: ProjectRole[];
}

export interface Workspace {
  id: string;
  name?: string;
  r: WorkspaceRole[];
  p: Project[];
}

export interface FlethyWorkspaceMetadata
  extends FlethyMetaDates,
    FlethyMetaUser {
  workspaceId: string;
  name: string;
}

export interface OnboardWorkspaceRequest {
  workspaceId: string;
  name: string;
  project: {
    name: string;
  };
  userId: string;
}

export interface GetWorkspacesRequest {
  workspaceIds: string[];
}

// CONTROLLER

export class WorkspaceController {
  public static async onboard(request: OnboardWorkspaceRequest) {
    const validation = ValidationUtils.validateAll([
      {
        value: request.userId,
        parameter: "userId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.workspaceId,
        parameter: "workspaceId",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.name,
        parameter: "name",
        checks: { required: true, minStringLength: 1 },
      },
      {
        value: request.project?.name,
        parameter: "project.name",
        checks: { required: true, minStringLength: 1 },
      },
    ]);
    if (!validation.valid) {
      throw new FlethyError({
        message: validation.message,
        type: ErrorType.BadRequest,
        log: {
          message: validation.message,
          context: { method: "onboard", origin: "workspace.controller.ts" },
          data: { request },
        },
      });
    }

    // TODO: remove this as soon as local tests are done
    const isTest =
      ENVVARS.config.stage === "dev" &&
      ENVVARS.config.testUserId === request.userId;
    const projectId = isTest
      ? ENVVARS.config.testUserProjectId
      : crypto.randomUUID();

    const workspaceMetadata: FlethyWorkspaceMetadata = {
      workspaceId: request.workspaceId,
      name: request.name,
      createdAt: Date.now(),
      createdBy: request.userId,
    };
    const workspace: Workspace = {
      id: request.workspaceId,
      name: request.name,
      r: [WorkspaceRole.OWNER],
      p: [
        {
          id: projectId,
          r: [ProjectRole.OWNER],
          name: request.project.name,
        },
      ],
    };

    const success = await write<Workspace>(
      WORKSPACES,
      KVUtils.workspaceKey(workspaceMetadata.workspaceId),
      workspace,
      { metadata: { ...workspaceMetadata } }
    );

    if (success && !isTest) {
      await FlethyFlowController.onboardUser({
        userId: request.userId,
        workspace,
      });
    }

    return { success, workspaceMetadata };
  }

  public static async get(request: GetWorkspacesRequest) {
    const validation = ValidationUtils.validateAll([
      {
        value: request.workspaceIds,
        parameter: "workspaceIds",
        checks: { required: true, arrayMinLength: 1 },
      },
    ]);
    if (!validation.valid) {
      throw new FlethyError({
        message: validation.message,
        type: ErrorType.BadRequest,
        log: {
          message: validation.message,
          context: { method: "get", origin: "workspace.controller.ts" },
          data: { request },
        },
      });
    }

    const promises = request.workspaceIds.map((workspaceId) => {
      return read<Workspace, FlethyWorkspaceMetadata>(
        WORKSPACES,
        KVUtils.workspaceKey(workspaceId),
        { metadata: true, type: "json" }
      );
    });

    const responses = await Promise.all(promises);

    const workspaces = responses.map((response) => {
      return response.value;
    });

    return { workspaces };
  }
}
