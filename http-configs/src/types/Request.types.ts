import { ApiDescription, ApiDescriptionEndpoint } from './ApiDescription.type'

export interface RequestParams {
  kind: string
}

export interface RequestOptions<RequestOptionsParams> {
  api: ApiDescription<any, any>
  endpoint: ApiDescriptionEndpoint
  params: RequestOptionsParams
}
