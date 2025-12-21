# My Planner — Telegram Mini App

A modern productivity planner built as a Telegram Mini Web App using Next.js App Router, TypeScript, and SCSS Modules.

## Overview

My Planner is a mobile-first productivity application designed for Telegram's Mini App platform. It features a clean, modern UI with activity tracking, plan management, scheduling, and statistics.

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules with design tokens and mixins
- **Architecture**: SPA-like (client-driven UI, no SSR data fetching)
- **State Management**: React hooks (useState, useRouter)
- **Routing**: Next.js client-side navigation

## Requirements

- **Node.js**: >= 20.9.0 (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **Package Manager**: npm (or yarn/pnpm)

### Recommended: Using nvm

```bash
# Install and use Node.js 20
nvm install 20
nvm use 20
```

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd my-planner
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Local: [http://localhost:3000](http://localhost:3000)
   - The page auto-updates as you edit files

## Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Mobile Preview (Recommended)

For the best mobile preview experience, use **production mode**:

### Production Preview Steps

1. **Switch to Node.js 20** (if using nvm):

   ```bash
   nvm use 20
   ```

2. **Build the application**:

   ```bash
   npm run build
   ```

3. **Start production server on LAN**:

   ```bash
   npm run start -- -H 0.0.0.0 -p 3000
   ```

4. **Find your LAN IP address**:

   ```bash
   # macOS (most common)
   ipconfig getifaddr en0

   # Linux
   hostname -I | awk '{print $1}'

   # Windows
   ipconfig
   # Look for "IPv4 Address" under your active network adapter
   ```

5. **Open on your phone**:
   - Open browser on your phone
   - Navigate to: `http://<YOUR_LAN_IP>:3000`
   - Example: `http://192.168.1.100:3000`
   - **Important**: Both devices must be on the same Wi-Fi network

**Why production mode?** Development mode (`npm run dev`) may have issues with asset loading (`/_next/static/`) on mobile devices. Production preview ensures all assets load correctly.

## Troubleshooting

### Blank / White Screen on Mobile

If you see a blank screen when accessing from your phone:

1. **Check `/_next/` availability**:

   - Open `http://<YOUR_LAN_IP>:3000/_next/` in your phone's browser
   - Should return 404 (normal) or show asset files
   - If it times out or connection refused, there's a network/firewall issue

2. **Check terminal requests**:

   - Look for requests to `/_next/static/` in the terminal
   - If you see 404s, assets aren't loading correctly
   - Use production mode (`npm run build && npm run start`) instead of dev mode

3. **Firewall / Network Issues**:

   - **macOS**: System Settings → Network → Firewall → Allow incoming connections for Node.js
   - **Guest Wi-Fi / AP Isolation**: Some guest networks block device-to-device communication
   - Try connecting both devices to the same private Wi-Fi network (not guest)

4. **Python HTTP Server Sanity Test**:

   ```bash
   # In project root
   python3 -m http.server 8000
   # Access from phone: http://<LAN_IP>:8000
   # If this works but Next.js doesn't, it's a Next.js/asset loading issue
   ```

5. **Browser Cache**:
   - Clear browser cache on your phone
   - Try private/incognito mode
   - Hard refresh: Chrome (Android) → Menu → Settings → Site Settings → Clear & Reset

### Common Issues

- **Port already in use**: Change port with `-p 3001` or kill the process using port 3000
- **Assets not loading**: Use production preview mode (`npm run build && npm run start`)
- **Connection refused**: Check firewall and ensure both devices are on same network

## Telegram Mini App Notes

### HTTPS Requirement

Telegram's WebView often requires HTTPS for security. For local development/testing:

1. **Use a tunnel service** (recommended for Telegram testing):

   - **ngrok**: `ngrok http 3000` → use the HTTPS URL
   - **cloudflared**: `cloudflared tunnel --url http://localhost:3000` → use the HTTPS URL
   - **localtunnel**: `npx localtunnel --port 3000` → use the HTTPS URL

2. **Production deployment**:
   - Deploy to Vercel, Netlify, or similar (automatic HTTPS)
   - Configure Telegram Bot with the production HTTPS URL

### Testing in Telegram

1. Set up tunnel (ngrok/cloudflared) pointing to your local server
2. Configure Telegram Bot with the tunnel HTTPS URL
3. Open Mini App from Telegram bot
4. The app should load with full Telegram WebApp API access

## Environment Variables

This project uses environment variables for configuration. See `.env.example` for available variables.

**Note**: Currently, the project uses mock data and doesn't require environment variables for basic functionality. Future backend integration will require API keys and configuration.

## Branch Workflow

- `main` / `master` - Production-ready code
- `develop` - Development branch (default for feature work)

**Recommended workflow**:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
# ... make changes ...
git commit -m "feat: your feature"
git push origin feature/your-feature-name
# Create PR to develop
```

## Project Structure

```
my-planner/
├── app/                    # Next.js App Router pages
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (StatCard, ProgressRing, etc.)
│   │   └── ...            # Layout components (MobileShell, BottomNav)
│   ├── mock/              # Mock data (for UI development)
│   ├── activities/        # Activities screen
│   ├── plans/             # Plans screens
│   ├── schedule/          # Schedule screen
│   ├── stats/             # Stats screen
│   └── settings/          # Settings screen
├── shared/                # Shared TypeScript types
│   └── types/             # Type definitions
├── styles/                # Global styles
│   ├── _tokens.scss       # Design tokens (colors, spacing, etc.)
│   └── _mixins.scss       # SCSS mixins
└── package.json
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
- [SCSS Documentation](https://sass-lang.com/documentation)

## License

Private project.
