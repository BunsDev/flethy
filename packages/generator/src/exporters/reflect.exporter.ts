import { getType, Type } from 'tst-reflect'
import { Airtable } from '../../../http-configs/src/configs/airtable.config'
import { Alchemy } from '../../../http-configs/src/configs/alchemy.config'
import { ApicAgent } from '../../../http-configs/src/configs/apicagent.config'
import { BrowsersFyi } from '../../../http-configs/src/configs/browsersfyi.config'
import { Camunda } from '../../../http-configs/src/configs/camunda.config'
import { Clearbit } from '../../../http-configs/src/configs/clearbit.config'
import { CoinCap } from '../../../http-configs/src/configs/coincap.config'
import { CoinGecko } from '../../../http-configs/src/configs/coingecko.config'
import { Coinlayer } from '../../../http-configs/src/configs/coinlayer.config'
import { CoinMarketCap } from '../../../http-configs/src/configs/coinmarketcap.config'
import { CountApi } from '../../../http-configs/src/configs/countapi.config'
import { Covalent } from '../../../http-configs/src/configs/covalent.config'
import { Disify } from '../../../http-configs/src/configs/disify.config'
import { Etherscan } from '../../../http-configs/src/configs/etherscan.config'
import { Frankfurter } from '../../../http-configs/src/configs/frankfurter.config'
import { Github } from '../../../http-configs/src/configs/github.config'
import { Hubspot } from '../../../http-configs/src/configs/hubspot.config'
import { MailCheckAi } from '../../../http-configs/src/configs/mailcheckai.config'
import { MailerSend } from '../../../http-configs/src/configs/mailersend.config'
import { Mergent } from '../../../http-configs/src/configs/mergent.config'
import { MicroDev } from '../../../http-configs/src/configs/microdev.config'
import { Mixpanel } from '../../../http-configs/src/configs/mixpanel.config'
import { Notion } from '../../../http-configs/src/configs/notion.config'
import { OneInch } from '../../../http-configs/src/configs/oneinch.config'
import { OpenLibrary } from '../../../http-configs/src/configs/openlibrary.config'
import { OpenSea } from '../../../http-configs/src/configs/opensea.config'
import { Pinata } from '../../../http-configs/src/configs/pinata.config'
import { PurgoMalum } from '../../../http-configs/src/configs/purgomalum.config'
import { SerpStack } from '../../../http-configs/src/configs/serpstack.config'
import { Slack } from '../../../http-configs/src/configs/slack.config'
import { Statically } from '../../../http-configs/src/configs/statically.config'
import { TheGraph } from '../../../http-configs/src/configs/thegraph.config'
import { Trello } from '../../../http-configs/src/configs/trello.config'
import { Web3Storage } from '../../../http-configs/src/configs/web3storage.config'
import { ZeroX } from '../../../http-configs/src/configs/zerox.config'
import { Zora } from '../../../http-configs/src/configs/zora.config'
export const configTypes: Array<{type: Type; name: string; interface: string}> = []
configTypes.push({type: getType<Airtable.ListTableRecords>(), name: 'Airtable', interface: 'ListTableRecords'})
configTypes.push({type: getType<Airtable.CreateTableRecords>(), name: 'Airtable', interface: 'CreateTableRecords'})
configTypes.push({type: getType<Alchemy.NftGetNFTs>(), name: 'Alchemy', interface: 'NftGetNFTs'})
configTypes.push({type: getType<ApicAgent.Get>(), name: 'ApicAgent', interface: 'Get'})
configTypes.push({type: getType<ApicAgent.Post>(), name: 'ApicAgent', interface: 'Post'})
configTypes.push({type: getType<BrowsersFyi.Get>(), name: 'BrowsersFyi', interface: 'Get'})
configTypes.push({type: getType<Camunda.ConsoleToken>(), name: 'Camunda', interface: 'ConsoleToken'})
configTypes.push({type: getType<Camunda.ConsoleGetClusters>(), name: 'Camunda', interface: 'ConsoleGetClusters'})
configTypes.push({type: getType<Camunda.ConsoleGetClustersParameters>(), name: 'Camunda', interface: 'ConsoleGetClustersParameters'})
configTypes.push({type: getType<Camunda.ConsoleDeleteCluster>(), name: 'Camunda', interface: 'ConsoleDeleteCluster'})
configTypes.push({type: getType<Camunda.ConsoleCreateCluster>(), name: 'Camunda', interface: 'ConsoleCreateCluster'})
configTypes.push({type: getType<Camunda.ConsoleGetClients>(), name: 'Camunda', interface: 'ConsoleGetClients'})
configTypes.push({type: getType<Camunda.ConsoleCreateClient>(), name: 'Camunda', interface: 'ConsoleCreateClient'})
configTypes.push({type: getType<Camunda.ConsoleGetClient>(), name: 'Camunda', interface: 'ConsoleGetClient'})
configTypes.push({type: getType<Camunda.ConsoleDeleteClient>(), name: 'Camunda', interface: 'ConsoleDeleteClient'})
configTypes.push({type: getType<Clearbit.LogoGet>(), name: 'Clearbit', interface: 'LogoGet'})
configTypes.push({type: getType<CoinCap.getAssets>(), name: 'CoinCap', interface: 'getAssets'})
configTypes.push({type: getType<CoinCap.getAsset>(), name: 'CoinCap', interface: 'getAsset'})
configTypes.push({type: getType<CoinCap.getAssetHistory>(), name: 'CoinCap', interface: 'getAssetHistory'})
configTypes.push({type: getType<CoinCap.getAssetMarkets>(), name: 'CoinCap', interface: 'getAssetMarkets'})
configTypes.push({type: getType<CoinGecko.ListCoins>(), name: 'CoinGecko', interface: 'ListCoins'})
configTypes.push({type: getType<CoinGecko.CoinsMarkets>(), name: 'CoinGecko', interface: 'CoinsMarkets'})
configTypes.push({type: getType<CoinGecko.CoinById>(), name: 'CoinGecko', interface: 'CoinById'})
configTypes.push({type: getType<CoinGecko.CoinTickersById>(), name: 'CoinGecko', interface: 'CoinTickersById'})
configTypes.push({type: getType<CoinGecko.CoinHistoryById>(), name: 'CoinGecko', interface: 'CoinHistoryById'})
configTypes.push({type: getType<CoinGecko.CoinMarketChartById>(), name: 'CoinGecko', interface: 'CoinMarketChartById'})
configTypes.push({type: getType<CoinGecko.CoinMarketChartRangeById>(), name: 'CoinGecko', interface: 'CoinMarketChartRangeById'})
configTypes.push({type: getType<CoinGecko.GetSimpleSupportedVsCurrencies>(), name: 'CoinGecko', interface: 'GetSimpleSupportedVsCurrencies'})
configTypes.push({type: getType<CoinGecko.GetSimplePrice>(), name: 'CoinGecko', interface: 'GetSimplePrice'})
configTypes.push({type: getType<CoinGecko.GetSimpleTokenPrice>(), name: 'CoinGecko', interface: 'GetSimpleTokenPrice'})
configTypes.push({type: getType<Coinlayer.GetLive>(), name: 'Coinlayer', interface: 'GetLive'})
configTypes.push({type: getType<Coinlayer.GetList>(), name: 'Coinlayer', interface: 'GetList'})
configTypes.push({type: getType<Coinlayer.GetHistorical>(), name: 'Coinlayer', interface: 'GetHistorical'})
configTypes.push({type: getType<CoinMarketCap.CryptocurrencyListingsHistorical>(), name: 'CoinMarketCap', interface: 'CryptocurrencyListingsHistorical'})
configTypes.push({type: getType<CoinMarketCap.CryptocurrencyListingsLatest>(), name: 'CoinMarketCap', interface: 'CryptocurrencyListingsLatest'})
configTypes.push({type: getType<CountApi.Get>(), name: 'CountApi', interface: 'Get'})
configTypes.push({type: getType<CountApi.Set>(), name: 'CountApi', interface: 'Set'})
configTypes.push({type: getType<CountApi.Update>(), name: 'CountApi', interface: 'Update'})
configTypes.push({type: getType<CountApi.Hit>(), name: 'CountApi', interface: 'Hit'})
configTypes.push({type: getType<CountApi.Create>(), name: 'CountApi', interface: 'Create'})
configTypes.push({type: getType<CountApi.Info>(), name: 'CountApi', interface: 'Info'})
configTypes.push({type: getType<Covalent.ClassAGetTransactionsForAddress>(), name: 'Covalent', interface: 'ClassAGetTransactionsForAddress'})
configTypes.push({type: getType<Covalent.ClassBGetUniswapV3Pools>(), name: 'Covalent', interface: 'ClassBGetUniswapV3Pools'})
configTypes.push({type: getType<Covalent.PricingGetHistoricalTokenPrices>(), name: 'Covalent', interface: 'PricingGetHistoricalTokenPrices'})
configTypes.push({type: getType<Disify.CheckSingleDomain>(), name: 'Disify', interface: 'CheckSingleDomain'})
configTypes.push({type: getType<Disify.CheckMassDomain>(), name: 'Disify', interface: 'CheckMassDomain'})
configTypes.push({type: getType<Disify.CheckSingleEmail>(), name: 'Disify', interface: 'CheckSingleEmail'})
configTypes.push({type: getType<Disify.CheckMassEmail>(), name: 'Disify', interface: 'CheckMassEmail'})
configTypes.push({type: getType<Etherscan.AccountsBalanceSingleAddress>(), name: 'Etherscan', interface: 'AccountsBalanceSingleAddress'})
configTypes.push({type: getType<Frankfurter.Latest>(), name: 'Frankfurter', interface: 'Latest'})
configTypes.push({type: getType<Frankfurter.Historical>(), name: 'Frankfurter', interface: 'Historical'})
configTypes.push({type: getType<Frankfurter.TimeSeries>(), name: 'Frankfurter', interface: 'TimeSeries'})
configTypes.push({type: getType<Github.ListRepositoryIssues>(), name: 'Github', interface: 'ListRepositoryIssues'})
configTypes.push({type: getType<Hubspot.OAuthToken>(), name: 'Hubspot', interface: 'OAuthToken'})
configTypes.push({type: getType<Hubspot.FormsSubmit>(), name: 'Hubspot', interface: 'FormsSubmit'})
configTypes.push({type: getType<Hubspot.ContactsCreateOrUpdate>(), name: 'Hubspot', interface: 'ContactsCreateOrUpdate'})
configTypes.push({type: getType<MailCheckAi.CheckDomain>(), name: 'MailCheckAi', interface: 'CheckDomain'})
configTypes.push({type: getType<MailCheckAi.CheckEmail>(), name: 'MailCheckAi', interface: 'CheckEmail'})
configTypes.push({type: getType<MailerSend.EmailSend>(), name: 'MailerSend', interface: 'EmailSend'})
configTypes.push({type: getType<Mergent.CreateTask>(), name: 'Mergent', interface: 'CreateTask'})
configTypes.push({type: getType<MicroDev.StorageDbCreateRecord>(), name: 'MicroDev', interface: 'StorageDbCreateRecord'})
configTypes.push({type: getType<MicroDev.StorageDbReadRecord>(), name: 'MicroDev', interface: 'StorageDbReadRecord'})
configTypes.push({type: getType<MicroDev.StorageDbUpdateRecord>(), name: 'MicroDev', interface: 'StorageDbUpdateRecord'})
configTypes.push({type: getType<MicroDev.StorageDbDeleteRecord>(), name: 'MicroDev', interface: 'StorageDbDeleteRecord'})
configTypes.push({type: getType<MicroDev.StorageCacheDecrement>(), name: 'MicroDev', interface: 'StorageCacheDecrement'})
configTypes.push({type: getType<MicroDev.StorageCacheDelete>(), name: 'MicroDev', interface: 'StorageCacheDelete'})
configTypes.push({type: getType<MicroDev.StorageCacheGet>(), name: 'MicroDev', interface: 'StorageCacheGet'})
configTypes.push({type: getType<MicroDev.StorageCacheIncrement>(), name: 'MicroDev', interface: 'StorageCacheIncrement'})
configTypes.push({type: getType<MicroDev.StorageCacheListKeys>(), name: 'MicroDev', interface: 'StorageCacheListKeys'})
configTypes.push({type: getType<MicroDev.StorageCacheSet>(), name: 'MicroDev', interface: 'StorageCacheSet'})
configTypes.push({type: getType<MicroDev.StorageNotesCreate>(), name: 'MicroDev', interface: 'StorageNotesCreate'})
configTypes.push({type: getType<MicroDev.StorageNotesDelete>(), name: 'MicroDev', interface: 'StorageNotesDelete'})
configTypes.push({type: getType<MicroDev.StorageNotesList>(), name: 'MicroDev', interface: 'StorageNotesList'})
configTypes.push({type: getType<MicroDev.StorageNotesRead>(), name: 'MicroDev', interface: 'StorageNotesRead'})
configTypes.push({type: getType<MicroDev.StorageNotesUpdate>(), name: 'MicroDev', interface: 'StorageNotesUpdate'})
configTypes.push({type: getType<Mixpanel.TrackEvents>(), name: 'Mixpanel', interface: 'TrackEvents'})
configTypes.push({type: getType<Notion.CreateDatabase>(), name: 'Notion', interface: 'CreateDatabase'})
configTypes.push({type: getType<OneInch.AggregationInfoTokens>(), name: 'OneInch', interface: 'AggregationInfoTokens'})
configTypes.push({type: getType<OneInch.AggregationQuote>(), name: 'OneInch', interface: 'AggregationQuote'})
configTypes.push({type: getType<OneInch.AggregationSwap>(), name: 'OneInch', interface: 'AggregationSwap'})
configTypes.push({type: getType<OpenLibrary.Books>(), name: 'OpenLibrary', interface: 'Books'})
configTypes.push({type: getType<OpenSea.GetAssets>(), name: 'OpenSea', interface: 'GetAssets'})
configTypes.push({type: getType<OpenSea.GetCollections>(), name: 'OpenSea', interface: 'GetCollections'})
configTypes.push({type: getType<Pinata.PinningPinJsonToIPFS>(), name: 'Pinata', interface: 'PinningPinJsonToIPFS'})
configTypes.push({type: getType<PurgoMalum.Profanity>(), name: 'PurgoMalum', interface: 'Profanity'})
configTypes.push({type: getType<SerpStack.Search>(), name: 'SerpStack', interface: 'Search'})
configTypes.push({type: getType<Slack.IncomingWebhooksMessage>(), name: 'Slack', interface: 'IncomingWebhooksMessage'})
configTypes.push({type: getType<Statically.StaticZapGithub>(), name: 'Statically', interface: 'StaticZapGithub'})
configTypes.push({type: getType<Statically.StaticZapGitlab>(), name: 'Statically', interface: 'StaticZapGitlab'})
configTypes.push({type: getType<Statically.StaticZapBitbucket>(), name: 'Statically', interface: 'StaticZapBitbucket'})
configTypes.push({type: getType<TheGraph.QueryById>(), name: 'TheGraph', interface: 'QueryById'})
configTypes.push({type: getType<TheGraph.QueryByName>(), name: 'TheGraph', interface: 'QueryByName'})
configTypes.push({type: getType<Trello.BoardGetLists>(), name: 'Trello', interface: 'BoardGetLists'})
configTypes.push({type: getType<Trello.CardsCreate>(), name: 'Trello', interface: 'CardsCreate'})
configTypes.push({type: getType<Web3Storage.UploadContent>(), name: 'Web3Storage', interface: 'UploadContent'})
configTypes.push({type: getType<ZeroX.SwapQuote>(), name: 'ZeroX', interface: 'SwapQuote'})
configTypes.push({type: getType<ZeroX.SwapPrice>(), name: 'ZeroX', interface: 'SwapPrice'})
configTypes.push({type: getType<ZeroX.SwapSources>(), name: 'ZeroX', interface: 'SwapSources'})
configTypes.push({type: getType<Zora.Query>(), name: 'Zora', interface: 'Query'})