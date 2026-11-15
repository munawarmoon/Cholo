import logo from '../assets/logo.png'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Trains', href: '/trains' },
  { label: 'Buses', href: '/buses' },
  { label: 'Map', href: '/map' },
  { label: 'Compare', href: '/compare' },
  { label: 'About Cholo', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const DATA_SOURCES = [
  'Bangladesh Railway (BR)',
  'Bangladesh Road Transport Authority (BRTA)',
  'Official Operator Websites',
  'Crowd Verified Updates',
]

const SOCIALS = [
  {
    name: 'Facebook',
    href: '#',
    path: 'M14 8h3V4h-3a4 4 0 00-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8z',
  },
  {
    name: 'YouTube',
    href: '#',
    path: 'M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 002.4 7.2C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 001.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 001.8-1.8C22 15.3 22 12 22 12s0-3.3-.4-4.8zM10 15V9l5.2 3L10 15z',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5.500-1.500a1 1 0 100 2 1 1 0 000-2z',
  },
  {
    name: 'X',
    href: '#',
    path: 'M4 4l6.500 8.700L4.200 20h2l5.200-5.900L15.800 20H20l-6.800-9.100L19.200 4h-2l-4.700 5.400L8.500 4H4z',
  },
]

const LAST_UPDATED = '24 May, 2024 10:30 AM'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src={logo} alt="Cholo" className="footer__logo-img" />
          <p className="footer__tagline">
            Your trusted companion for finding bus and train fares across
            Bangladesh.
          </p>
          <p className="footer__updated">Fares last updated: {LAST_UPDATED}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer__link">
                  <span>{label}</span>
                  <span aria-hidden="true">&rsaquo;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Data Sources</h3>
          <ul className="footer__list">
            {DATA_SOURCES.map((source) => (
              <li key={source} className="footer__source">
                {source}
              </li>
            ))}
          </ul>
          <p className="footer__note">
            We respect official data and always credit the source.
          </p>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__list footer__contact">
            <li>
              <a href="tel:09613246564">09613-CHOLO (24656)</a>
            </li>
            <li>
              <a href="mailto:hello@cholo.com.bd">hello@cholo.com.bd</a>
            </li>
            <li>House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh</li>
          </ul>

          <h3 className="footer__title footer__title--small">Follow us</h3>
          <div className="footer__socials">
            {SOCIALS.map(({ name, href, path }) => (
              <a key={name} href={href} className="footer__social" aria-label={name}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          &copy; {new Date().getFullYear()} Cholo. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
