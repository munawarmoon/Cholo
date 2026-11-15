import { useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Trains', href: '/trains' },
  { label: 'Buses', href: '/buses' },
  { label: 'Map', href: '/map' },
  { label: 'Compare', href: '/compare' },
]

const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />
  </svg>
)

export default function Header() {
  const [active, setActive] = useState('Home')
  const [lang, setLang] = useState('EN')
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark',
  )
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark'
    setDark(!dark)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('cholo-theme', next)
    } catch {
      /* storage unavailable, ignore */
    }
  }

  const handleNav = (label) => {
    setActive(label)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Cholo home">
          <img src={logo} alt="Cholo" className="header__logo-img" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <ul className="header__list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`header__link ${active === label ? 'is-active' : ''}`}
                  aria-current={active === label ? 'page' : undefined}
                  onClick={() => handleNav(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__lang" role="group" aria-label="Language">
            {['BN', 'EN'].map((code) => (
              <button
                key={code}
                type="button"
                className={`header__lang-btn ${lang === code ? 'is-active' : ''}`}
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="header__theme"
            role="switch"
            aria-checked={dark}
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            <SunIcon />
            <span className={`header__track ${dark ? 'is-dark' : ''}`}>
              <span className="header__thumb" />
            </span>
            <MoonIcon />
          </button>

          <a href="/login" className="header__login">
            <UserIcon />
            <span>Login</span>
          </a>

          <button
            type="button"
            className="header__burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
