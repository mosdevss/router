import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="app-layout">
      <header className="main-header">
        <div className="container">
          <div className="nav-brand">
            <strong>React + TanStack Router</strong>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" activeProps={{ className: 'active' }}>Home</Link>
            </li>
            <li>
              <Link to="/about" activeProps={{ className: 'active' }}>About</Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="main-content container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        <Outlet />
      </main>
      <footer className="main-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Scaffolding Skill. All rights reserved.</p>
        </div>
      </footer>
      <TanStackRouterDevtools />
    </div>
  ),
});
