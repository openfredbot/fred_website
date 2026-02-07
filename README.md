# 🦊 Open Fred - Professional AI Assistant

Modern, responsive website for Open Fred AI Assistant with integrated Web3 staking functionality.

## ✨ Features

- **🌗 Dark/Light Mode** - Toggle between dark and light themes
- **🔗 Web3 Integration** - Connect wallet and interact with Base network
- **💰 Staking System** - Stake $FRED tokens for 30% APY rewards  
- **📱 Responsive Design** - Optimized for all devices
- **⚡ Fast Loading** - Built with Astro for optimal performance
- **🎨 Modern UI** - Clean, professional design with Tailwind CSS

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Web3**: [Web3Modal](https://web3modal.com) + [Ethers.js](https://ethers.org)
- **Network**: [Base](https://base.org) (Chain ID: 8453)
- **Fonts**: [Inter Variable](https://rsms.me/inter/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 💰 Smart Contracts

- **$FRED Token**: `0x3f9BEB72028F52111065c9e9f8684B91Ad19dE9d`
- **Staking Contract**: `0xA31824476d177205d448908a4ec9f6e2fc9274DB`
- **Network**: Base Mainnet (Chain ID: 8453)

## 🎯 Key Features

### Staking System
- **APY**: 30% annual percentage yield
- **Minimum**: No minimum staking amount
- **Lock Period**: No lock period - unstake anytime
- **Rewards**: Automatically calculated and claimable
- **Contract**: Verified on BaseScan

### Web3 Integration  
- **Wallet Support**: MetaMask, Coinbase Wallet, WalletConnect
- **Network**: Automatic Base network switching
- **Real-time**: Live balance and staking data
- **Secure**: Client-side only, no private key storage

### Design System
- **Colors**: Orange primary, gray neutrals
- **Typography**: Inter font family
- **Components**: Modular, reusable components
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG compliant elements

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── hero.astro      # Landing hero section
│   ├── features.astro  # Features showcase
│   ├── staking.astro   # Staking interface
│   ├── footer.astro    # Site footer
│   └── container.astro # Layout container
├── layouts/
│   └── Layout.astro    # Base page layout
├── pages/
│   └── index.astro     # Homepage
└── assets/             # Images and static assets
```

## 🌟 What's New

This is a complete redesign focusing on:

- ✅ **Removed**: FriendTech references (discontinued)
- ✅ **Removed**: Blog section (unused)  
- ✅ **Removed**: Pricing page (not needed)
- ✅ **Added**: Dark/light mode toggle
- ✅ **Added**: Integrated staking interface
- ✅ **Added**: Modern, professional design
- ✅ **Added**: Web3 wallet connection
- ✅ **Improved**: Mobile responsiveness
- ✅ **Improved**: Performance and SEO

## 🔧 Configuration

### Web3Modal Setup
Update the `projectId` in `src/layouts/Layout.astro` with your WalletConnect project ID.

### Deployment
The site is configured for static deployment and can be hosted on:
- GitHub Pages
- Vercel
- Netlify 
- Any static hosting provider

## 📱 Browser Support

- Chrome/Chromium 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🦞 Powered by OpenClaw

Built with [OpenClaw](https://openclaw.ai) - Professional AI assistant framework.

---

Made with 🦊 by Open Fred