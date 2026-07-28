import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const productLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Community', href: '/community', internal: true },
]

const ecosystemLinks = [
  { label: 'Azora Language', description: 'Safe systems programming', href: 'https://azoralang.org' },
  { label: 'Azora Engine', description: 'Cross-platform game engine', href: 'https://azoraengine.org' },
  { label: 'Azora Studio', description: 'Development environment', href: 'https://azorastudio.org' },
  { label: 'Azora Dev', description: 'Community and technical Q&A', href: 'https://azora.dev' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [ecosystemOpen, setEcosystemOpen] = useState(false)
  const ecosystemRef = useRef(null)

  useEffect(() => {
    const closeMenus = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
        setEcosystemOpen(false)
      }
      if (event.type === 'pointerdown' && !ecosystemRef.current?.contains(event.target)) {
        setEcosystemOpen(false)
      }
    }
    document.addEventListener('keydown', closeMenus)
    document.addEventListener('pointerdown', closeMenus)
    return () => {
      document.removeEventListener('keydown', closeMenus)
      document.removeEventListener('pointerdown', closeMenus)
    }
  }, [])

  const renderProductLink = (link) => link.internal
    ? <Link key={link.href} to={link.href}>{link.label}</Link>
    : <a key={link.href} href={link.href}>{link.label}</a>

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link to="/" className="site-nav__brand" aria-label="Azora Labs home">
          <img src="/assets/azora_logo.svg" alt="" />
          <span>Azora Labs</span>
        </Link>
        <div className="site-nav__links">
          {productLinks.map(renderProductLink)}
          <div className="site-nav__ecosystem" ref={ecosystemRef}>
            <button
              className={`site-nav__ecosystem-trigger ${ecosystemOpen ? 'is-open' : ''}`}
              aria-expanded={ecosystemOpen}
              aria-haspopup="menu"
              onClick={() => setEcosystemOpen((open) => !open)}
            >
              Ecosystem
            </button>
            {ecosystemOpen && (
              <div className="site-nav__dropdown" role="menu">
                {ecosystemLinks.map((link) => (
                  <a key={link.href} href={link.href} role="menuitem">
                    <strong>{link.label}</strong><span>{link.description}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <Link className="site-nav__donate" to="/donate">Donate</Link>
        </div>
        <button
          onClick={() => setMobileOpen((open) => !open)}
          className="site-nav__toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
        </button>
      </div>
      {mobileOpen && (
        <div className="site-nav__mobile">
          {productLinks.map(renderProductLink)}
          <span className="site-nav__mobile-label">Azora Ecosystem</span>
          {ecosystemLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          <Link className="site-nav__mobile-donate" to="/donate">Donate</Link>
        </div>
      )}
    </nav>
  )
}
