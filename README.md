# Zinko Dashboard

A modern cryptocurrency dashboard built with React, TypeScript, and Vite, featuring real-time crypto market data, portfolio tracking, and administrative capabilities.

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Build Tool:** Vite
- **UI Components:** Shadcn UI (based on Radix UI)
- **Backend & Authentication:** Supabase
- **Styling:** Tailwind CSS
- **Package Manager:** Bun

## Features

- 📊 Real-time cryptocurrency price charts and market data
- 💼 Portfolio tracking and management
- 📱 Responsive admin dashboard
- 🔒 Secure authentication and user management
- 💰 Payout management system
- 📈 Statistical analysis and reporting

## Project Structure

```
src/
├── components/         # React components
│   ├── admin/         # Admin-specific components
│   └── ui/            # Shadcn UI components
├── hooks/             # Custom React hooks
├── integrations/      # External service integrations
│   └── supabase/      # Supabase client and types
├── layouts/           # Page layout components
├── lib/              # Utility functions
└── pages/            # Application pages
    └── admin/        # Admin dashboard pages
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables for Supabase configuration

4. Start the development server:
   ```bash
   bun run dev
   ```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run build:dev` - Build for development
- `bun run lint` - Run ESLint
- `bun run preview` - Preview production build locally

## Main Components

- `CryptoChart`: Real-time cryptocurrency price charts
- `CryptoList`: List of tracked cryptocurrencies
- `MarketStats`: Market statistics and indicators
- `PortfolioCard`: User portfolio overview
- `AdminDashboard`: Main admin interface
- Various UI components from Shadcn UI library

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request