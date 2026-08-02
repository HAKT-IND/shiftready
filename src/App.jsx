import { navigate, useRoute } from './routes/useRoute'
import './index.css'

const modules = [
  { path: '/prestarts', label: 'Prestarts', icon: '✓', description: 'Inspect plant and equipment before work.' },
  { path: '/take-5', label: 'Take 5', icon: '✋', description: 'Pause, identify hazards, and set controls.' },
  { path: '/jha', label: 'JHA', icon: '⚠', description: 'Plan job steps, risks, controls, and sign-off.' },
  { path: '/timesheets', label: 'Timesheets', icon: '◷', description: 'Record hours, shifts, travel, and job codes.' },
  { path: '/handovers', label: 'Handovers', icon: '⇄', description: 'Pass clear work information between shifts.' },
  { path: '/completed', label: 'Completed Forms', icon: '▣', description: 'Review submitted and approved records.' },
]

const primaryNav = [
  { path: '/', label: 'Dashboard', icon: '⌂' },
  { path: '/forms', label: 'Forms', icon: '▤' },
  { path: '/activity', label: 'Activity', icon: '⌁' },
  { path: '/profile', label: 'Profile', icon: '●' },
]

const placeholderPages = {
  '/prestarts': {
    eyebrow: 'Equipment checks',
    title: 'Prestarts',
    description: 'Create, save, and submit equipment inspections from the field.',
  },
  '/take-5': {
    eyebrow: 'Personal risk assessment',
    title: 'Take 5',
    description: 'Stop, assess the task, identify hazards, and confirm controls before work begins.',
  },
  '/jha': {
    eyebrow: 'Job planning',
    title: 'Job Hazard Analysis',
    description: 'Break work into steps, document hazards and controls, then collect team sign-off.',
  },
  '/timesheets': {
    eyebrow: 'Hours and roster',
    title: 'Timesheets',
    description: 'Record regular hours, overtime, travel, breaks, and work areas.',
  },
  '/handovers': {
    eyebrow: 'Shift communication',
    title: 'Handovers',
    description: 'Capture completed work, defects, photos, and what the next shift needs to know.',
  },
  '/completed': {
    eyebrow: 'Records',
    title: 'Completed Forms',
    description: 'Find submitted, approved, rejected, and archived records.',
  },
  '/forms': {
    eyebrow: 'All workflows',
    title: 'Forms',
    description: 'Choose a ShiftReady workflow to start or continue.',
  },
  '/activity': {
    eyebrow: 'Recent work',
    title: 'Activity',
    description: 'See recent submissions, approvals, handovers, and changes.',
  },
  '/profile': {
    eyebrow: 'Your account',
    title: 'Profile',
    description: 'Your personal details, current site, crew, and app preferences will live here.',
  },
}

function RouteLink({ to, className = '', children, active = false, ariaLabel }) {
  function handleClick(event) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a
      href={to}
      className={`${className}${active ? ' is-active' : ''}`}
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

function AppHeader() {
  return (
    <header className="app-header">
      <div className="brand-mark" aria-hidden="true">S</div>
      <div className="brand-copy">
        <span className="brand-name">Shift<span>Ready</span></span>
        <span className="brand-tagline">Site safety &amp; operations</span>
      </div>
      <button type="button" className="icon-button" aria-label="Notifications">
        <span aria-hidden="true">◉</span>
        <span className="notification-dot">3</span>
      </button>
    </header>
  )
}

function BottomNavigation({ path }) {
  return (
    <nav className="bottom-navigation" aria-label="Primary navigation">
      {primaryNav.map((item) => (
        <RouteLink
          key={item.path}
          to={item.path}
          className="bottom-navigation__item"
          active={path === item.path}
        >
          <span className="bottom-navigation__icon" aria-hidden="true">{item.icon}</span>
          <span>{item.label}</span>
        </RouteLink>
      ))}
    </nav>
  )
}

function DashboardPage() {
  return (
    <>
      <section className="welcome-panel">
        <div>
          <p className="eyebrow">Day shift · Monday</p>
          <h1>Ready for the shift?</h1>
          <p>Start a form, review outstanding work, or check what needs attention.</p>
        </div>
        <div className="readiness-score" aria-label="Site compliance 96 percent">
          <strong>96%</strong>
          <span>Site ready</span>
        </div>
      </section>

      <section className="stat-grid" aria-label="Shift summary">
        <article className="stat-card">
          <span className="stat-card__icon is-success" aria-hidden="true">✓</span>
          <strong>24</strong>
          <span>Days LTI free</span>
        </article>
        <article className="stat-card">
          <span className="stat-card__icon" aria-hidden="true">●</span>
          <strong>142</strong>
          <span>Team on site</span>
        </article>
        <article className="stat-card">
          <span className="stat-card__icon is-warning" aria-hidden="true">!</span>
          <strong>3</strong>
          <span>Overdue actions</span>
        </article>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Quick access</p>
            <h2>Start work</h2>
          </div>
        </div>

        <div className="module-grid">
          {modules.map((module) => (
            <RouteLink key={module.path} to={module.path} className="module-card">
              <span className="module-card__icon" aria-hidden="true">{module.icon}</span>
              <span className="module-card__copy">
                <strong>{module.label}</strong>
                <small>{module.description}</small>
              </span>
              <span className="module-card__arrow" aria-hidden="true">›</span>
            </RouteLink>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Today</p>
            <h2>Shift priorities</h2>
          </div>
          <RouteLink to="/activity" className="text-link">View activity</RouteLink>
        </div>

        <div className="task-list">
          <article className="task-row">
            <span className="task-row__status is-blue" aria-hidden="true">1</span>
            <div>
              <strong>Excavator prestart · EX120</strong>
              <span>North Pit · Due 7:00 am</span>
            </div>
            <span className="status-badge">Upcoming</span>
          </article>
          <article className="task-row">
            <span className="task-row__status is-green" aria-hidden="true">2</span>
            <div>
              <strong>Take 5 · Crusher maintenance</strong>
              <span>Workshop · Due before work</span>
            </div>
            <span className="status-badge is-warning">Required</span>
          </article>
          <article className="task-row">
            <span className="task-row__status is-amber" aria-hidden="true">3</span>
            <div>
              <strong>Night-shift handover</strong>
              <span>Mobile plant · Due 5:30 pm</span>
            </div>
            <span className="status-badge">Later</span>
          </article>
        </div>
      </section>
    </>
  )
}

function FormsPage() {
  return (
    <section className="content-section page-section">
      <p className="eyebrow">All workflows</p>
      <h1>Forms</h1>
      <p className="page-intro">Choose a workflow to start or continue.</p>
      <div className="module-grid">
        {modules.map((module) => (
          <RouteLink key={module.path} to={module.path} className="module-card">
            <span className="module-card__icon" aria-hidden="true">{module.icon}</span>
            <span className="module-card__copy">
              <strong>{module.label}</strong>
              <small>{module.description}</small>
            </span>
            <span className="module-card__arrow" aria-hidden="true">›</span>
          </RouteLink>
        ))}
      </div>
    </section>
  )
}

function PlaceholderPage({ page }) {
  return (
    <section className="content-section page-section">
      <p className="eyebrow">{page.eyebrow}</p>
      <h1>{page.title}</h1>
      <p className="page-intro">{page.description}</p>

      <div className="placeholder-card">
        <span className="placeholder-card__icon" aria-hidden="true">◇</span>
        <div>
          <h2>Foundation ready</h2>
          <p>This route is connected and ready for its dedicated feature branch.</p>
        </div>
      </div>

      <RouteLink to="/" className="secondary-button">Back to dashboard</RouteLink>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="content-section page-section not-found">
      <span className="not-found__code">404</span>
      <p className="eyebrow">Wrong turn</p>
      <h1>That page is not on the shift plan.</h1>
      <p className="page-intro">The address may be incorrect or the page may have moved.</p>
      <RouteLink to="/" className="primary-button">Return to dashboard</RouteLink>
    </section>
  )
}

function App() {
  const path = useRoute()
  const knownPage = placeholderPages[path]
  const isKnownRoute = path === '/' || Boolean(knownPage)

  return (
    <div className="app">
      <div className="app-shell">
        <AppHeader />
        <main className="app-main">
          {path === '/' && <DashboardPage />}
          {path === '/forms' && <FormsPage />}
          {path !== '/' && path !== '/forms' && knownPage && <PlaceholderPage page={knownPage} />}
          {!isKnownRoute && <NotFoundPage />}
        </main>
        <BottomNavigation path={path} />
      </div>
    </div>
  )
}

export default App
