import { ServerRequest } from "worktop/request";
import { ServerResponse } from "worktop/response";
import { WorkspaceController } from "../controllers/workspace.controller";
import { ErrorType, FlethyError } from "../utils/error.utils";
import { PermissionsResponse } from "../utils/permission.utils";
import { StatusCodeSuccess } from "../utils/router.utils";

export class WorkspacesRoute {
  public static async onboard(
    req: ServerRequest,
    res: ServerResponse,
    userId: string = ""
  ) {
    const body = await req.body<{
      name: string;
      projectName: string;
    }>();
    const response = await WorkspaceController.onboard({
      workspaceId: req.params.workspaceId,
      name: body?.name ?? "",
      project: {
        name: body?.projectName ?? "",
      },
      userId,
    });

    res.send(StatusCodeSuccess.OK, { ...response });
  }

  public static async get(
    _req: ServerRequest,
    res: ServerResponse,
    _userId: string = "",
    permissionsResponse: PermissionsResponse
  ) {
    const workspaceIds = permissionsResponse.userTokenPayload[
      "https://flethy.com/ws"
    ]?.map((workspace: any) => workspace.id);
    if (!workspaceIds) {
      throw new FlethyError({
        type: ErrorType.NotFound,
        message: `No Workspaces found`,
        log: {
          context: { origin: "workflow.route.ts", method: "get" },
          message: `No Workspaces found`,
        },
      });
    }
    const response = await WorkspaceController.get({
      workspaceIds,
    });

    res.send(StatusCodeSuccess.OK, { ...response });
  }
}
