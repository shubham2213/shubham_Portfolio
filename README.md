# shubhamshrivastava.dev

A next-generation personal portfolio website — a fully immersive, cinematic, scroll-driven web experience built to demonstrate frontend engineering craft and full stack capabilities.

## Tech Stack

### Frontend
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS v4 + CSS Custom Properties
- **Animation:** GSAP + ScrollTrigger, Framer Motion
- **Smooth Scroll:** Lenis
- **3D/Canvas:** React Three Fiber + GLSL shaders
- **HTTP Client:** Axios

### Backend
- **Framework:** Node.js + Express + TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL (Supabase)
- **Email Service:** Resend

### Deployment
- **Frontend:** Vercel
- **Backend:** Railway
- **Database:** Supabase

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (or Supabase account)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shubham_Portfolio
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:
```bash
# In server/ directory, create .env file
DATABASE_URL="your-postgresql-connection-string"
RESEND_API_KEY="your-resend-api-key"

# In client/ directory, create .env file
VITE_API_URL="http://localhost:4000"
```

4. Set up the database:
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

### Running the Application

**Start the backend server (port 4000):**
```bash
cd server
npm run dev
```

**Start the frontend development server (port 5173):**
```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173`  
The backend API will be available at `http://localhost:4000`

## Project Structure

```
shubham_Portfolio/
├── client/          # Vite + React frontend
├── server/          # Node.js + Express backend
├── shared/          # Shared types between client and server
├── Documents/       # Project planning and documentation
└── .cursorrules     # Cursor IDE configuration
```

## Design Philosophy

**Theme:** Futuristic & Techy — Neon Glitch  
**Concept:** "Digital Organism" — a living system the user has jacked into

**Color Palette:**
- Background: `#050505` (near black)
- Primary Accent: `#00f5ff` (electric cyan)
- Secondary Accent: `#39ff14` (toxic green)
- Text: `#c8c8c8` (muted white)

**Typography:**
- Display/Headings: Orbitron (Google Fonts)
- Body/Code/UI: JetBrains Mono (Google Fonts)

## Features

- 🎬 Cinematic scroll-driven storytelling across 6 chapters
- 🎨 Futuristic neon glitch aesthetic with ambient effects
- 🎯 Real-time project view counters
- 📧 Working contact form with email integration
- 📄 Resume download with backend tracking
- 🖥️ Hidden terminal easter egg (press `/` or `Ctrl+K`)
- 🔊 Optional ambient sound layer
- 🎮 Interactive 3D particle field background
- ⚡ Smooth scroll with Lenis + GSAP animations

## License

Private project — All rights reserved
