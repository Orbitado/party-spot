# PartySpot

## 1. Introduction

**PartySpot** is a platform designed to connect spaces with event or party creators. The application allows managing properties, reservations, and experiences, offering an intuitive and accessible experience for both end users and administrators.

## 2. Project Objectives

- **Product Validation (MVP):**

  - Quickly launch a functional version using Supabase for authentication, database, and edge functions.
  - Test market acceptance and collect user feedback.

- **Scalability:**
  - Gradually migrate to an architecture based on Nest.js and PostgreSQL.
  - Incorporate performance improvements (queues, caching, search) and real-time functionality.
- **User Experience:**
  - Offer a fast, intuitive, and accessible interface.
  - Support internationalization and adaptability across different devices.

## 3. Tech Stack

### Frontend:

- **Framework:** React 19 + Vite (SWC)
- **Global State:** Redux Toolkit
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod
- **Styles:** CSS Modules + PostCSS
- **Routing:** React Router v6
- **Internationalization:** i18next
- **Testing:** Vitest + React Testing Library + Playwright (E2E)

### Backend (MVP → Scalable):

- **Quick Start:** Supabase (Authentication, PostgreSQL, Storage, Edge Functions)
- **Scalable:**
  - **Framework:** Nest.js (TypeScript)
  - **Database:** PostgreSQL
  - **ORM:** Drizzle
  - **Authentication:** Passport.js (JWT, OAuth) + Redis
  - **APIs:** GraphQL (Apollo Server)

### Infrastructure:

- **Initial:** Railway or Render for agile deployment.
- **Scalable:**
  - **VPS and Orchestration:** DigitalOcean + Kubernetes or AWS ECS
  - **DB:** Neon (PostgreSQL serverless) or AWS RDS
  - **Storage and CDN:** S3 + CloudFront
  - **Caching:** Redis Cloud

### DevOps & QA:

- **CI/CD:** GitHub Actions (initially), with the possibility to migrate to Jenkins in complex scenarios.
- **Monitoring:** Sentry (errors) + OpenTelemetry (traces)
- **Logs & Observability:** Grafana Loki + Prometheus
- **Containers:** Docker + Docker Compose
- **IaC:** Terraform (for AWS/GCP)

### Additional Tools:

- **Code Standards:** ESLint + Prettier + Husky
- **Documentation and UI Components:** Storybook
- **Maps:** Mapbox GL JS
- **Payments:** Stripe or MercadoPago API

## 4. Architecture and Folder Structure (Screaming Architecture)

The project structure follows the _Screaming Architecture_ principle, meaning the folder and module names clearly reflect their purpose and domain:

```bash
src/
├── app/                    # Global configuration: providers, styles, routes
│   ├── providers/          # Global providers (AuthProvider, ThemeProvider)
│   └── routes/             # Route definitions (AppRoutes.tsx)
│
├── modules/                # Domain modules
│   ├── auth/               # Authentication
│   │   ├── components/     # Components (LoginForm, SignupForm)
│   │   ├── hooks/          # Custom hooks (useAuth, useSession)
│   │   └── services/       # Services (authAPI, authService)
│   │
│   ├── listings/           # Property/listing management
│   │   ├── components/     # Components (ListingCard, ListingDetails)
│   │   ├── hooks/          # Hooks (useListings)
│   │   └── services/       # Services (listingsAPI, listingsService)
│   │
│   └── bookings/           # Booking management
│       ├── components/     # Components (BookingCalendar, BookingForm)
│       ├── hooks/          # Hooks (useBookings)
│       └── services/       # Services (bookingService)
│
├── shared/                 # Resources shared between modules
│   ├── components/         # General UI components (Button, Modal, Loader)
│   ├── hooks/              # Generic hooks (useDebounce, useMediaQuery)
│   └── utils/              # Utilities and helpers (dateUtils, apiClient)
│
├── types/                  # Global definitions and types (authTypes, listingTypes, bookingTypes)
│
├── tests/                  # Unit and integration tests
│   ├── unit/
│   └── integration/
│
└── public/                 # Static assets (images, fonts)
```

## 5. Configuration and Installation

### Prerequisites:

- Node.js (LTS version recommended)
- npm, yarn, or pnpm

### Installation:

1. Clone the repository:

   ```bash
   git clone https://github.com/Orbitado/party-spot.git
   cd party-spot
   ```

2. Install dependencies:

   ```bash
   npm install
   # with yarn
   yarn install
   # or with pnpm
   pnpm install
   ```

3. Configure environment variables for Supabase and other services:

   - Copy the `.env.example` file to `.env.local` and configure the necessary variables.

   ```bash
   cp .env.example .env.local
   ```

4. Start the application in development mode:
   ```bash
   npm run dev
   # with yarn
   yarn dev
   # or with pnpm
   pnpm dev
   ```

## 6. Contribution and Best Practices

- **Branches and Git Flow:**  
  Use feature/bugfix branches for development, following a strategy based on peer-reviewed pull requests.
- **Code Standards:**  
  Run ESLint and Prettier before committing changes. Husky will help run these checks automatically.

- **Tests:**  
  Make sure to write unit and integration tests using Vitest and React Testing Library. E2E tests are managed with Playwright.

## 7. Next Steps

- **MVP Development:**  
  Implement Supabase integration for authentication and basic data management.
- **Migration and Scalability:**  
  Once the MVP is validated, plan the migration to Nest.js and the incorporation of additional features (queues, caching, advanced searches, etc.).

- **Documentation and Feedback:**  
  Keep documentation updated as the project evolves and collect continuous feedback from the team and users.
