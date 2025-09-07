# WealthElite Dashboard

A comprehensive wealth management dashboard built with Next.js, featuring real-time financial tracking, PDF report generation, and cross-platform mobile app capabilities.

## 🚀 Features

### Core Dashboard
- **Financial Metrics Display**: AUM (Assets Under Management) and SIP tracking with growth indicators
- **Transaction Statistics**: Real-time monitoring of purchases, redemptions, and SIP transactions
- **Interactive Charts**: Client distribution, SIP business trends, and monthly MIS analytics
- **Responsive Design**: Mobile-first approach with burger menu navigation
- **Dark/Light Mode**: Theme toggle with system preference detection

### PDF Generation
- **Comprehensive Reports**: Export all dashboard data to professionally formatted PDFs
- **Cross-Platform**: Web browser downloads and native mobile sharing
- **Real-time Data**: Generate reports with current dashboard statistics

### Mobile App
- **iOS/Android Support**: Native mobile apps using Capacitor
- **Native Features**: File system access, sharing capabilities, and device integration
- **Offline Capability**: Static export for mobile deployment

### Advanced Features
- **Dynamic Filters**: Real-time data fetching with loading states
- **Search Functionality**: Global search across dashboard components
- **Theme System**: Complete dark/light mode with proper contrast ratios

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **Charts**: Recharts
- **PDF Generation**: jsPDF
- **Mobile**: Capacitor
- **Theme**: next-themes

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd wealth-elite-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📱 Mobile App Setup

### iOS/Android Development

1. **Install Capacitor CLI**
   \`\`\`bash
   npm install -g @capacitor/cli
   \`\`\`

2. **Build the web app**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Add mobile platforms**
   \`\`\`bash
   npx cap add ios
   npx cap add android
   \`\`\`

4. **Sync and open**
   \`\`\`bash
   npx cap sync
   npx cap open ios     # For iOS
   npx cap open android # For Android
   \`\`\`

### Mobile Development Requirements
- **iOS**: Xcode 12+ and iOS 13+
- **Android**: Android Studio and Android 6.0+ (API level 23)

## 🎯 Usage

### Dashboard Navigation
- **Main Cards**: View AUM and SIP metrics with growth indicators
- **Stats Cards**: Monitor transaction statistics and rejections
- **Charts Section**: Analyze client distribution and business trends
- **Time Filters**: Filter data by different time periods (7D, 1M, 3M, 6M, 1Y)

### PDF Reports
- Click the **"Download PDF"** button in the header
- **Web**: Automatically downloads PDF file
- **Mobile**: Opens native sharing dialog

### Theme Toggle
- Click the sun/moon icon in the header to switch themes
- Automatically detects system preference on first visit

### Mobile Features
- **Burger Menu**: Access all navigation options on mobile
- **Native Sharing**: Share PDF reports using device capabilities
- **Responsive Charts**: Optimized chart viewing on small screens

## 📁 Project Structure

\`\`\`
wealth-elite-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── charts/             # Chart components
│   ├── header.tsx          # Navigation header
│   ├── main-cards.tsx      # AUM/SIP cards
│   ├── stats-cards.tsx     # Transaction statistics
│   ├── time-filter.tsx     # Dynamic time filters
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   └── mobile-menu.tsx     # Mobile navigation
├── lib/
│   ├── pdf-generator.ts    # PDF generation service
│   └── mobile-pdf-service.ts # Mobile PDF functionality
├── capacitor.config.ts     # Capacitor configuration
└── next.config.mjs         # Next.js configuration
\`\`\`

## 🚀 Deployment

### Web Deployment
\`\`\`bash
npm run build
npm start
\`\`\`

### Vercel Deployment
\`\`\`bash
npx vercel
\`\`\`

### Mobile App Store
1. Build and test using Xcode/Android Studio
2. Follow platform-specific app store guidelines
3. Submit for review

## 🔧 Development

### Adding New Features
1. Create components in `components/` directory
2. Add services in `lib/` directory
3. Update types in TypeScript files
4. Test on both web and mobile platforms

### Styling Guidelines
- Use Tailwind CSS classes
- Follow dark/light mode color tokens
- Maintain responsive design principles
- Test on multiple screen sizes

### PDF Customization
- Modify `lib/pdf-generator.ts` for report layouts
- Add new data sources to PDF generation
- Customize styling and branding

## 📊 Data Integration

The dashboard currently uses mock data. To integrate real data:

1. **API Integration**: Replace mock data with API calls
2. **Database Connection**: Add database integration for persistent storage
3. **Real-time Updates**: Implement WebSocket or polling for live data
4. **Authentication**: Add user authentication and authorization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both web and mobile
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the mobile setup guide in `README-MOBILE.md`

---

Built with ❤️ by shashwat bajpai using Next.js and Capacitor
