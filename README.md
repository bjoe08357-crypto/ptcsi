# PT Creative Solution International - Web3 Website

A modern, responsive website for PT Creative Solution International built with Next.js 14, featuring Web3 integration, internationalization, and comprehensive IT services.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling with shadcn/ui components
- **Internationalization** (EN/ID) with next-intl
- **Web3 Integration** with wagmi, viem, and WalletConnect
- **Content Management** with Contentlayer and MDX
- **SEO Optimized** with next-seo and sitemap
- **Contact Forms** with Nodemailer and rate limiting
- **Responsive Design** with mobile-first approach
- **Performance Optimized** with Lighthouse 95+ score target

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend & APIs
- **Next.js API Routes** - Serverless API endpoints
- **Nodemailer** - Email sending functionality
- **Rate Limiting** - API rate limiting with rate-limiter-flexible
- **Zod** - Schema validation

### Web3
- **wagmi** - React hooks for Ethereum
- **viem** - TypeScript interface for Ethereum
- **WalletConnect** - Wallet connection protocol

### Content & SEO
- **Contentlayer** - Content management with MDX
- **next-intl** - Internationalization
- **next-seo** - SEO optimization
- **next-sitemap** - Sitemap generation

### Database & ORM
- **Prisma** - Database ORM
- **SQLite** - Development database (easily swappable to Postgres)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── [locale]/          # Internationalized routes
│   │   ├── web3/          # Web3 service pages
│   │   ├── services/      # IT service pages
│   │   ├── about-us/      # About page
│   │   ├── career/        # Careers page
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── content/              # MDX content files
│   ├── services/         # Service content
│   ├── web3/            # Web3 content
│   └── case-studies/    # Case study content
├── lib/                  # Utility functions
├── messages/             # Internationalization files
└── styles/               # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ptcsi-web3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_NAME=PT Creative Solution International
   NEXT_PUBLIC_SITE_URL=https://www.ptcreativesolution.com
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-project-id
   EMAIL_FROM="PT CSI <noreply@ptcreativesolution.com>"
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-smtp-user
   SMTP_PASS=your-smtp-password
   RATE_LIMIT_CONTACT_PER_MIN=5
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Adding New Services

1. **Create MDX file** in `src/content/services/`
   ```mdx
   ---
   title: "Your Service"
   slug: "your-service"
   excerpt: "Service description"
   icon: "IconName"
   featured: true
   ---
   
   # Your Service
   
   Content goes here...
   ```

2. **The page will automatically appear** at `/services/your-service`

### Adding Web3 Services

1. **Create MDX file** in `src/content/web3/`
   ```mdx
   ---
   title: "Your Web3 Service"
   slug: "your-web3-service"
   excerpt: "Web3 service description"
   chain: "Ethereum"
   featured: true
   ---
   
   # Your Web3 Service
   
   Content goes here...
   ```

2. **The page will automatically appear** at `/web3/your-web3-service`

### Adding Translations

1. **Edit translation files** in `src/messages/`
   - `en.json` - English translations
   - `id.json` - Indonesian translations

2. **Add new keys** following the existing pattern:
   ```json
   {
     "new.key": "New translation",
     "new.key.id": "Terjemahan baru"
   }
   ```

## 🌐 Internationalization

The website supports English (EN) and Indonesian (ID) languages.

### Language Routes
- English: `/en/` (default)
- Indonesian: `/id/`

### Adding New Languages

1. **Update middleware** in `src/middleware.ts`
2. **Add language files** in `src/messages/`
3. **Update i18n config** in `src/i18n.ts`

## 🔗 Web3 Integration

### Wallet Connection
- Supports WalletConnect, MetaMask, Rainbow, and other wallets
- Demo functionality (no actual chain writes by default)
- Easy to extend for production use

### Demo Features
- **Token Creation**: Generate sample ERC-20 contracts
- **Staking Dashboard**: Mock staking pools and APY
- **Airdrop Claims**: Demo eligibility checking

### Production Setup
1. **Get WalletConnect Project ID** from [WalletConnect Cloud](https://cloud.walletconnect.com)
2. **Update environment variables**
3. **Configure network settings** in `src/lib/web3.ts`

## 📧 Contact Form

The contact form includes:
- **Zod validation** for form data
- **Rate limiting** to prevent spam
- **Honeypot field** for bot protection
- **Nodemailer integration** for email sending

### SMTP Configuration
Configure your SMTP settings in `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

### Lighthouse Scores (Target: 95+)
- **Performance**: Optimized images, code splitting
- **Accessibility**: WCAG 2.1 compliant
- **Best Practices**: Security headers, HTTPS
- **SEO**: Meta tags, sitemap, structured data

### Optimization Features
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Static generation and ISR
- **Bundle Analysis**: Built-in bundle analyzer

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run contentlayer # Build content layer
npm run postbuild    # Generate sitemap
```

### Code Quality
- **ESLint** for code linting
- **TypeScript** for type safety
- **Prettier** for code formatting
- **Husky** for git hooks (if configured)

## 📚 Documentation

### Component Documentation
- **shadcn/ui**: [https://ui.shadcn.com](https://ui.shadcn.com)
- **Framer Motion**: [https://www.framer.com/motion](https://www.framer.com/motion)
- **wagmi**: [https://wagmi.sh](https://wagmi.sh)

### Next.js Documentation
- **App Router**: [https://nextjs.org/docs/app](https://nextjs.org/docs/app)
- **Internationalization**: [https://nextjs.org/docs/app/building-your-application/routing/internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

## 📄 License

This project is proprietary software owned by PT Creative Solution International.

## 📞 Support

For support and questions:
- **Email**: info@ptcreativesolution.com
- **Website**: https://www.ptcreativesolution.com

## 🔄 Updates

### Recent Updates
- ✅ Next.js 14 with App Router
- ✅ Web3 integration with wagmi
- ✅ Internationalization (EN/ID)
- ✅ Content management with MDX
- ✅ SEO optimization
- ✅ Contact form with rate limiting

### Planned Features
- 🔄 Case studies section
- 🔄 Blog functionality
- 🔄 Advanced Web3 features
- 🔄 Analytics integration
- 🔄 A/B testing

---

**Built with ❤️ by PT Creative Solution International**