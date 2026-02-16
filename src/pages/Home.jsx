

/**
 * Home page component.
 * @return {JSX.Element} The home page.
 */
export function Home() {
  return (
    <div className="home-page">
      <h2>Welcome to GDG on Campus Binus International</h2>
      <p>
                This platform is under construction. We are currently in the
                Architectural and Prototyping phase.
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
      }}>
        <h3>Status Update</h3>
        <ul>
          <li><strong>Phase:</strong> Architecture & Prototyping</li>
          <li><strong>Next Step:</strong> Component Implementation</li>
        </ul>
      </div>
    </div>
  );
}
