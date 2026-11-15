# Cholo

Compare bus and train fares, schedules and routes across Bangladesh.

> 🚧 **Work in progress.** The frontend is currently under development.

## About

Cholo is an information and comparison platform for intercity travel in Bangladesh. It helps you decide *how* to travel by comparing fare, duration and comfort of trains and buses in one place.

Cholo does **not** sell tickets.

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express *(planned)*
- **Database:** MongoDB Atlas *(planned)*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)
- npm

### Run the frontend

```bash
git clone https://github.com/<your-username>/cholo-bd.git
cd cholo-bd/client
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
Cholo/
├── client/     # React frontend (Vite)
├── server/     # Express backend (coming soon)
├── .gitignore
└── README.md
```

## Roadmap

- [x] Project setup
- [ ] Header and Footer
- [ ] Home page
- [ ] Trains page and Train Details page
- [ ] Compare page
- [ ] Buses page
- [ ] Backend API and database
- [ ] Deployment

## Disclaimer

Fares and schedules may change without notice. Always confirm with the official operator before travelling. Cholo is not affiliated with Bangladesh Railway or any bus operator.
