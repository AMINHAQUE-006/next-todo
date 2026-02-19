# MyApp — Next.js Production Starter

A production-ready Next.js application with Material UI, Redux Toolkit, RTK Query, TypeScript, and App Router.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd nextjs-production-app

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your values

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Route group - no auth required
│   │   ├── layout.tsx            # Shared layout for public pages
│   │   ├── login/page.tsx        # /login
│   │   ├── register/page.tsx     # /register
│   │   └── forgot-password/      # /forgot-password
│   ├── (protected)/              # Route group - auth required
│   │   ├── layout.tsx            # Shared layout for protected pages
│   │   ├── dashboard/page.tsx    # /dashboard
│   │   └── profile/page.tsx      # /profile
│   ├── layout.tsx                # Root layout (wraps entire app)
│   ├── page.tsx                  # / (redirects based on auth)
│   ├── loading.tsx               # Global loading UI
│   ├── error.tsx                 # Global error UI
│   └── not-found.tsx             # 404 page
│
├── components/
│   ├── ui/                       # Generic reusable components
│   │   ├── ErrorBoundary.tsx     # React error boundary class component
│   │   └── LoadingSpinner.tsx    # Loading indicator
│   ├── forms/                    # Form-specific components
│   └── layouts/                  # Layout wrapper components
│       ├── ReduxProvider.tsx     # Redux store provider (client)
│       └── MuiThemeProvider.tsx  # MUI theme + Emotion cache (client)
│
├── layouts/                      # Page-level layout components
│   ├── PublicLayout.tsx          # Header for public pages
│   └── ProtectedLayout.tsx      # Sidebar + navbar for protected pages
│
├── store/                        # Redux Toolkit store
│   ├── index.ts                  # Store configuration
│   ├── api/
│   │   └── apiSlice.ts           # RTK Query base API slice
│   └── slices/
│       ├── authSlice.ts          # Authentication state
│       └── uiSlice.ts            # UI state (theme, sidebar)
│
├── services/                     # RTK Query endpoint definitions
│   ├── authService.ts            # login, register endpoints
│   └── userService.ts            # profile endpoints
│
├── hooks/                        # Custom React hooks
│   ├── redux.ts                  # Typed useAppDispatch / useAppSelector
│   └── useAuth.ts                # Auth helper hook
│
├── lib/                          # Library configurations
│   ├── theme.ts                  # MUI theme (light/dark)
│   └── emotion-cache.ts          # MUI SSR emotion cache
│
├── utils/                        # Pure utility functions
│   └── index.ts                  # formatDate, getInitials, etc.
│
└── types/                        # Shared TypeScript type definitions
    └── index.ts
```

---

## 🏗️ Key Architecture Decisions

### Route Groups `(public)` and `(protected)`
- Parentheses in folder names create **route groups** — they organize routes without affecting the URL
- Each group has its own `layout.tsx` for shared UI
- `(protected)/layout.tsx` contains the auth guard that redirects unauthenticated users

### Server vs Client Components
- **Server components** (default): Faster, can fetch data directly, can't use hooks/browser APIs
- **Client components** (`'use client'`): Required for hooks, event handlers, browser APIs
- Strategy: Push `'use client'` as far down the component tree as possible

### Redux Toolkit + RTK Query
- **Slices** (`authSlice`, `uiSlice`): Manage client-side state
- **RTK Query** (`apiSlice`): Auto-generates data-fetching hooks, manages cache
- **Pattern**: `services/` files inject endpoints into the base `apiSlice`

### MUI Theme
- Centralized in `src/lib/theme.ts`
- Supports light/dark mode via Redux `uiSlice`
- Toggle with the moon/sun icon in the protected header

---

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Auto-fix ESLint errors |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check Prettier formatting |

---

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_NAME` | Application display name |
| `NEXT_PUBLIC_APP_URL` | Public URL of the app |
| `NEXT_PUBLIC_API_BASE_URL` | Backend API base URL |
| `AUTH_SECRET` | Secret for signing tokens (server-only) |

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. All others are server-side only.

---

## 📦 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Material UI (MUI) | Component library |
| Emotion | CSS-in-JS (MUI dependency) |
| Redux Toolkit | Global state management |
| RTK Query | Data fetching + caching |
| ESLint | Code linting |
| Prettier | Code formatting |

---

## 🔄 Adding a New Protected Page

1. Create `src/app/(protected)/your-page/page.tsx`
2. Add the route to `navLinks` in `src/layouts/ProtectedLayout.tsx`
3. (Optional) Add API calls in `src/services/yourService.ts`

## 🔄 Adding a New API Endpoint

```typescript
// src/services/yourService.ts
import { apiSlice } from '@/store/api/apiSlice';

export const yourApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query<YourType, void>({
      query: () => '/your-endpoint',
    }),
  }),
});

export const { useGetDataQuery } = yourApiSlice;
```
