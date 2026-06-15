# PropInvest — Real Estate Investment Platform

A full-stack prototype for a premium real estate investment platform, built as a monorepo with Docker Compose.

---

## 🏗️ Architecture

```
/
├── docker-compose.yml        # Orchestration (backend + frontend)
├── .gitignore
├── README.md
│
├── backend/                  # Node.js + Express API
│   ├── Dockerfile
│   ├── package.json          # ESM ("type": "module")
│   └── src/
│       ├── index.js          # HTTP server bootstrap
│       ├── app.js            # Express factory (CORS, middleware, routes)
│       ├── controllers/
│       │   └── propertyController.js
│       ├── services/
│       │   └── propertyService.js
│       ├── routes/
│       │   └── propertyRoutes.js
│       └── data/
│           └── properties.js # Simulated property data
│
└── frontend/                 # React 18 + Vite 5 + Tailwind CSS 3
    ├── Dockerfile
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css         # Global styles + custom Tailwind layers
        ├── components/
        │   ├── Header.jsx
        │   ├── HeroSection.jsx
        │   ├── PropertyGrid.jsx
        │   ├── PropertyCard.jsx
        │   ├── PropertyCardSkeleton.jsx
        │   └── ErrorMessage.jsx
        ├── hooks/
        │   └── useProperties.js
        └── services/
            └── api.js
```

### Design decisions

| Concern | Choice | Rationale |
|---|---|---|
| Backend runtime | Node.js 20 + ESM | Modern, zero-config native modules |
| API framework | Express 4 | Minimal footprint, wide ecosystem |
| Architecture | Layered (controller → service → data) | Clear separation of concerns, easy to extend |
| Frontend bundler | Vite 5 | Near-instant HMR, native ESM |
| Styling | Tailwind CSS 3 | Utility-first, consistent dark theme |
| State | Custom hook `useProperties` | Co-located, no external state manager needed |
| Containerisation | Docker Compose | Single command to spin up all services |

---

## 🚀 Getting started

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Run with Docker (recommended)

```bash
docker-compose up --build
```

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8000 |

Both services support **live-reload / hot-reload** via volume mounts. Edit any source file and the browser will reflect the change automatically.

### Run without Docker

**Backend**
```bash
cd backend
npm install
npm run dev        # node --watch src/index.js
```

**Frontend** (in a separate terminal)
```bash
cd frontend
npm install
npm run dev        # vite --port 3000
```

---

## 📡 API Endpoints

Base URL: `http://localhost:8000`

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/properties` | Returns all investment properties |
| `GET` | `/api/properties/:id` | Returns a single property by UUID |
| `GET` | `/health` | Health check |

### Sample response — `GET /api/properties`

```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Reside Torres Brickell",
      "location": "Miami, FL, USA",
      "price": 1250000,
      "image": "https://images.unsplash.com/...",
      "annualYield": "9.2%"
    }
  ]
}
```

---

## 🎨 UI Features

- Dark mode with radial gradient background
- Glassmorphism cards with blur backdrop
- Shimmer skeleton loaders during data fetch
- Responsive grid (1 → 2 → 3 columns)
- Hover animations and glow effects
- Fully accessible (ARIA labels, semantic HTML)

---

## 📄 License

MIT
