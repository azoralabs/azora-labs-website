import Navbar from './components/Navbar'
import Footer from './components/Footer'

const projects = [
  {
    name: 'Azora Studio',
    desc: 'Visual editor and IDE for the Azora Engine.',
    href: 'https://azorastudio.org',
    accent: 'var(--az-primary)',
  },
  {
    name: 'Azora Engine',
    desc: 'Cross-platform game engine built with Azora.',
    href: 'https://azoraengine.org',
    accent: 'var(--az-secondary)',
  },
  {
    name: 'Azora Language',
    desc: 'The Azora programming language compiler and toolchain.',
    href: 'https://azoralang.org',
    accent: 'var(--az-primary)',
  },
]

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-20">
            <img src="/assets/azora_logo.svg" alt="Azora Labs" className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-az-10 mb-4">
              Azora <span className="text-az-primary">Labs</span>
            </h1>
            <p className="text-lg text-az-45 max-w-2xl mx-auto leading-relaxed">
              Building tools, frameworks, and infrastructure for the Azora ecosystem. From programming language to game engine, we craft the future of software development.
            </p>
          </div>

          {/* Projects */}
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-az-10 mb-8 text-center">Ecosystem</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {projects.map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="az-card"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="az-hex" style={{ background: p.accent }} aria-hidden="true" />
                    <h3 className="az-heading">{p.name}</h3>
                  </div>
                  <p className="az-muted">{p.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* About */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-az-10 mb-4">About</h2>
            <p className="text-az-45 max-w-2xl mx-auto leading-relaxed">
              Azora Labs is the organization behind the Azora programming language and its surrounding ecosystem.
              We build open-source tools that empower developers to write fast, safe, and expressive code across multiple platforms.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
