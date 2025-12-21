# My Planner — Telegram Mini App

A modern productivity planner built as a Telegram Mini Web App using Next.js App Router, TypeScript, and SCSS Modules.

## Tech Stack

- **Framework**: Next.js 16 App Router
- **Language**: TypeScript
- **Styling**: SCSS Modules with design tokens and mixins
- **Architecture**: SPA-like (client-driven UI, no SSR data fetching)

## Requirements

- **Node.js**: >= 20.9.0 (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **Package Manager**: npm

## Setup

1. **Clone and install**:

   ```bash
   git clone <repository-url>
   cd my-planner
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open in browser**: [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Mobile Preview

### Recommended: Production Preview

For stable mobile testing:

1. **Build and start**:

   ```bash
   npm run build
   npm run start
   ```

2. **Find LAN IP**:

   ```bash
   # macOS
   ipconfig getifaddr en0
   # Linux: hostname -I | awk '{print $1}'
   # Windows: ipconfig (look for IPv4 Address)
   ```

3. **Open on phone**: `http://<LAN_IP>:3000`

### Development Mode (LAN)

For development with HMR on mobile:

```bash
npm run dev -- --hostname 0.0.0.0
# Then open http://<LAN_IP>:3000 on phone
```

**Note**: Dev mode may have asset/cache issues on some networks. Production preview is recommended for phone testing.

## Troubleshooting

### Blank Screen on Mobile

- Check `/_next/` endpoint: `http://<LAN_IP>:3000/_next/` (should respond)
- Use production mode instead of dev mode
- Check firewall settings (macOS: System Settings → Network → Firewall)
- Ensure both devices on same Wi-Fi (not guest network)
- Clear browser cache or try incognito mode

## Telegram Mini App

Telegram WebView requires HTTPS. For local testing:

- **Tunnel services**: `ngrok http 3000` or `cloudflared tunnel --url http://localhost:3000`
- **Production**: Deploy to Vercel/Netlify (automatic HTTPS)

## Branch Workflow

- `main` - Production-ready code
- `develop` - Development branch

Workflow: `develop` → `feature/*` → PR to `develop`

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
