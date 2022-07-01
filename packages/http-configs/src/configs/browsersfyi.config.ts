import {
  ApiDescription,
  ApiDescriptionEndpoint,
} from '../types/ApiDescription.type'
import { RequestParams } from '../types/Request.types'

export namespace BrowsersFyi {
  export type Entity = { core: any }
  export type Endpoint = { get: ApiDescriptionEndpoint }

  export interface Get extends RequestParams {
    kind: 'browsersfyi.core.get'
  }

  export const API: ApiDescription<Entity, Endpoint> = {
    meta: {
      id: 'browsersfyi',
      name: 'BrowsersFyi',
      url: 'https://www.browsers.fyi/',
      docs: 'https://www.browsers.fyi/',
      tags: ['web2'],
      category: 'aggregation',
      type: 'indexer',
    },
    base: 'https://www.browsers.fyi/api',
    api: {
      core: {
        get: {
          interface: 'Get',
          meta: {
            title: 'Get',
            description: 'Gets all NFTs currently owned by a given address.',
            docs: 'https://docs.alchemy.com/alchemy/enhanced-apis/nft-api/getnfts',
          },
          method: 'GET',
        },
      },
    },
  }
}

export default BrowsersFyi
