import { useState } from 'react'
import './Home.css'

const CITIES = [
  'Dhaka',
  'Chattogram',
  'Sylhet',
  'Rajshahi',
  'Khulna',
  "Cox's Bazar",
  'Barishal',
  'Rangpur',
]

const POPULAR_ROUTES = [
  { from: 'Dhaka', to: 'Chattogram', mode: 'train', fare: 230, duration: '5h 45m' },
  { from: 'Dhaka', to: 'Sylhet', mode: 'train', fare: 310, duration: '6h 30m' },
  { from: 'Dhaka', to: 'Rajshahi', mode: 'bus', fare: 420, duration: '7h 15m' },
  { from: 'Dhaka', to: "Cox's Bazar", mode: 'bus', fare: 650, duration: '10h 30m' },
]

const COMPARISON = [
  { label: 'Fare (Tk)', train: 230, bus: 420, max: 450, trainText: '230', busText: '420' },
  { label: 'Duration (h)', train: 5.8, bus: 7.2, max: 8, trainText: '5.8', busText: '7.2' },
  { label: 'Comfort (out of 5)', train: 4.5, bus: 3.5, max: 5, trainText: '4.5', busText: '3.5' },
]

const LIVE_UPDATES = [
  { route: 'Dhaka to Sylhet', change: 10, time: '2m ago' },
  { route: 'Dhaka to Chattogram', change: 15, time: '5m ago' },
  { route: 'Dhaka to Rajshahi', change: -5, time: '8m ago' },
  { route: 'Khulna to Dhaka', change: 10, time: '12m ago' },
]

const TrainIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="7" y="4" width="18" height="20" rx="4" />
    <path d="M7 15h18M12 28l3-4M20 28l-3-4" />
    <circle cx="12" cy="19.5" r="1.2" />
    <circle cx="20" cy="19.5" r="1.2" />
  </svg>
)

const BusIcon = () => (
  <svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="6" width="22" height="18" rx="3" />
    <path d="M5 16h22M10 6v10M22 6v10" />
    <circle cx="11" cy="26" r="1.8" />
    <circle cx="21" cy="26" r="1.8" />
  </svg>
)

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
)

const SwapIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 7h12l-3-3M17 17H5l3 3" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l2.7 5.600 6.100.8-4.500 4.300 1.100 6.100L12 17l-5.400 2.800 1.100-6.100L3.200 9.400l6.100-.8L12 3z" />
  </svg>
)

function todayISO() {
  const d = new Date()
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function SearchBar() {
  const [from, setFrom] = useState('Dhaka')
  const [to, setTo] = useState('Chattogram')
  const [date, setDate] = useState(todayISO)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect to the search API / results page
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label className="search__field">
        <span className="search__label">From</span>
        <span className="search__control">
          <PinIcon />
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </span>
      </label>

      <button type="button" className="search__swap" onClick={swap} aria-label="Swap origin and destination">
        <SwapIcon />
      </button>

      <label className="search__field">
        <span className="search__label">To</span>
        <span className="search__control">
          <PinIcon />
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {CITIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </span>
      </label>

      <label className="search__field search__field--date">
        <span className="search__label">Date</span>
        <span className="search__control">
          <CalendarIcon />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </span>
      </label>

      <button type="submit" className="btn btn--primary search__submit">Search</button>
    </form>
  )
}

function RouteCard({ from, to, mode, fare, duration }) {
  return (
    <a href="/compare" className="route-card">
      <h3 className="route-card__title">
        {from} <span className="route-card__arrow" aria-hidden="true">&rarr;</span> {to}
      </h3>
      <div className="route-card__body">
        <span className={`route-card__icon route-card__icon--${mode}`}>
          {mode === 'train' ? <TrainIcon /> : <BusIcon />}
        </span>
        <div className="route-card__meta">
          <p>From <strong className={`route-card__fare route-card__fare--${mode}`}>&#2547;{fare}</strong></p>
          <p className="route-card__duration">{duration}</p>
        </div>
      </div>
      <div className="route-card__tags">
        <span className="tag tag--green">Cheapest</span>
        <span className="tag tag--orange">Fastest</span>
      </div>
    </a>
  )
}

function ComparisonCard() {
  return (
    <section className="info-card">
      <h3 className="info-card__title">Train vs Bus comparison</h3>
      <p className="info-card__text">Compare fares, duration and comfort side by side.</p>

      <div className="compare">
        {COMPARISON.map(({ label, train, bus, max, trainText, busText }) => (
          <div key={label} className="compare__row">
            <span className="compare__label">{label}</span>
            <div className="compare__bars">
              <div className="compare__bar compare__bar--train" style={{ width: `${(train / max) * 100}%` }}>
                {trainText}
              </div>
              <div className="compare__bar compare__bar--bus" style={{ width: `${(bus / max) * 100}%` }}>
                {busText}
              </div>
            </div>
          </div>
        ))}
        <div className="compare__legend">
          <span><i className="dot dot--green" /> Train</span>
          <span><i className="dot dot--orange" /> Bus</span>
        </div>
      </div>
    </section>
  )
}

function LiveFaresCard() {
  return (
    <section className="info-card">
      <h3 className="info-card__title">Live fare updates</h3>
      <p className="info-card__text">We track fares in real time from official sources.</p>

      <ul className="live">
        {LIVE_UPDATES.map(({ route, change, time }) => (
          <li key={route} className="live__item">
            <span className="live__route">{route}</span>
            <span className="live__time">{time}</span>
            <span className={`live__change ${change > 0 ? 'live__change--up' : 'live__change--down'}`}>
              {change > 0 ? '+' : '-'}&#2547;{Math.abs(change)}
            </span>
          </li>
        ))}
      </ul>

      <a href="/updates" className="info-card__link">View all updates &rarr;</a>
    </section>
  )
}

function MapCard() {
  return (
    <section className="info-card">
      <h3 className="info-card__title">Map view</h3>
      <p className="info-card__text">Explore all routes and stations on our interactive map.</p>
      <a href="/map" className="btn btn--outline info-card__btn">Open map &rarr;</a>
    </section>
  )
}

function ReportCard() {
  return (
    <section className="info-card">
      <h3 className="info-card__title">Report a wrong fare</h3>
      <p className="info-card__text">Help us keep information accurate for everyone.</p>
      <p className="info-card__quote">Let us know! We&apos;ll fix it.</p>
      <a href="/report" className="btn btn--outline info-card__btn">Report now</a>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              Know the fare,
              <br />
              <span className="hero__underline">travel stress-free</span>
            </h1>
            <p className="hero__subtitle">
              Compare bus and train fares across Bangladesh in one place.
            </p>
          </div>

          {/* Map goes here later. Collapses automatically while empty. */}
          <div className="hero__map" />
        </div>

        <div className="container">
          <SearchBar />
        </div>
      </section>

      <section className="section container">
        <h2 className="section__title">
          <StarIcon /> Popular Routes
        </h2>
        <div className="routes">
          {POPULAR_ROUTES.map((route) => (
            <RouteCard key={route.to} {...route} />
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="info-grid">
          <ComparisonCard />
          <LiveFaresCard />
          <MapCard />
          <ReportCard />
        </div>
      </section>
    </>
  )
}
