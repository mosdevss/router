import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="page-home">
      <h1>🚀 React + TanStack Router</h1>
      <p>Project successfully scaffolded using Dart Sass 7-in-1 structure and pnpm!</p>
      <div style={{ marginTop: '1.5rem' }}>
        <button className="btn btn-primary">Scaffold Ready</button>
      </div>
    </div>
  );
}
