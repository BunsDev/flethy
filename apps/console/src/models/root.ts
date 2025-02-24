import { RouterStore } from 'mobx-router'
import { Instance, types } from 'mobx-state-tree'
import { createContext, useContext } from 'react'
import { MenuComponent } from '../components/menu/model'
import { CreateSecretsModal } from '../components/modals/secrets/create/model'
import { DeleteSecretsModal } from '../components/modals/secrets/delete/model'
import { QuickSearchComponent } from '../components/quicksearch/model'
import { NotFoundPage } from '../pages/404/model'
import { HomePage } from '../pages/home/model'
import { SecretsPage } from '../pages/secrets/model'
import { WorkflowEditorPage } from '../pages/workflow-editor/model'
import { WorkflowsPage } from '../pages/workflows/model'
import ApiStore, { APIType } from './api'
import { AuthStore } from './api/auth'

export const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
export const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID
export const AUTH_AUDIENCE = import.meta.env.VITE_AUTH_AUDIENCE

const PagesStore = types.model('Pages', {
	notFound: types.optional(NotFoundPage, () => NotFoundPage.create()),
	home: types.optional(HomePage, () => HomePage.create()),
	workflowEditor: types.optional(WorkflowEditorPage, () =>
		WorkflowEditorPage.create(),
	),
	secrets: types.optional(SecretsPage, () => SecretsPage.create()),
	workflows: types.optional(WorkflowsPage, () => WorkflowsPage.create()),
})

const ComponentsStore = types.model('Components', {
	quickSearch: types.optional(QuickSearchComponent, () =>
		QuickSearchComponent.create(),
	),
	menu: types.optional(MenuComponent, () => MenuComponent.create()),
})

const ModalsStore = types.model('Modals', {
	secretsCreate: types.optional(CreateSecretsModal, () =>
		CreateSecretsModal.create(),
	),
	secretsDelete: types.optional(DeleteSecretsModal, () =>
		DeleteSecretsModal.create(),
	),
})

export const RealRootModel = types.model('Root', {
	auth: types.optional(AuthStore, () =>
		AuthStore.create({
			clientOptions: {
				domain: String(AUTH_DOMAIN),
				clientId: String(AUTH_CLIENT_ID),
				authorizationParams: {
					redirect_uri: window.location.origin,
					audience: String(AUTH_AUDIENCE),
				},
			},
		}),
	),
	api: types.optional(ApiStore, () => ApiStore.create()),
	pages: types.optional(PagesStore, () => PagesStore.create()),
	components: types.optional(ComponentsStore, () => ComponentsStore.create()),
	modals: types.optional(ModalsStore, () => ModalsStore.create()),
})

export type RealRootModelInstance = Instance<{
	auth: Instance<typeof AuthStore>
	api: APIType
	pages: Instance<typeof PagesStore>
	components: Instance<typeof ComponentsStore>
	modals: Instance<typeof ModalsStore>
}>

export class RootStore {
	public router: RouterStore<RootStore>
	public root: {
		auth: Instance<typeof AuthStore>
		api: Instance<typeof ApiStore>
		pages: Instance<typeof PagesStore>
		components: Instance<typeof ComponentsStore>
		modals: Instance<typeof ModalsStore>
	}

	constructor() {
		this.router = new RouterStore<RootStore>(this)
		this.root = RealRootModel.create()
	}
}

export const rootStore = new RootStore()

const RootStoreContext = createContext<null | RootStore>(null)

export const Provider = RootStoreContext.Provider

export function useMst() {
	const store = useContext(RootStoreContext)
	if (store === null) {
		throw new Error('Store cannot be null, please add a context provider')
	}
	return store
}
