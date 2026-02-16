import React from 'react';
import {Outlet} from 'react-router-dom';

/**
 * Main application layout.
 * @return {JSX.Element} The layout component.
 */
export function MainLayout() {
  return (
    <div className="app-container">
      <header style={{
        padding: '1rem',
        backgroundColor: 'var(--md-sys-color-primary-container)',
        color: 'var(--md-sys-color-on-primary-container)',
      }}>
        <h1>GDGOC Binus International</h1>
      </header>
      <main style={{
        padding: 'var(--layout-padding)',
        flex: 1,
        maxWidth: 'var(--layout-max-width)',
        margin: '0 auto',
        width: '100%',
      }}>
        <Outlet />
      </main>
      <footer style={{
        padding: '1rem',
        textAlign: 'center',
        borderTop: '1px solid #eee',
      }}>
        <p>&copy; {new Date().getFullYear()} GDGOC Binus International</p>
      </footer>
    </div>
  );
}
