import { createWeb3Modal, defaultConfig } from '@web3modal/ethers'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '3441c47f3b8b5f0462b69497694214fb'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const base = {
    chainId: 8453,
    name: 'Base',
    currency: 'ETH',
    explorerUrl: 'https://basescan.org/',
    rpcUrl: 'https://mainnet.base.org'
}

const bsc = {
    chainId: 56,
    name: 'BNB Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org/'
}

// 3. Create modal
const metadata = {
  name: 'Alert Friend',
  description: 'Notification Service for Friendtech',
  url: 'https://alertfriend.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

const modal = createWeb3Modal({
  themeMode: 'dark', 
  termsConditionsUrl: '/terms',
  privacyPolicyUrl: '/privacy',
    themeVariables: {
        '--w3m-accent': '#5046E5',
        '--w3m-font-size-master': '9px',
      },
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, base, bsc],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})