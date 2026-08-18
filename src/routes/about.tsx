import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="page-about card">
      <h2>About This Architecture</h2>
      <p>This project uses modern Dart Sass <code>@use</code> and <code>@forward</code> module rules across 7 layered directories with subfolder forwarding.</p>
    </div>
  );
}
