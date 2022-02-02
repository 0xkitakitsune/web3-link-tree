import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 250, 43114, 42161, 288, 1313161554, 122, 56, 1285, 1666600000],
});