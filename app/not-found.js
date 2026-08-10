import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found-section" style={{
      padding: '112px 0',
      textAlign: 'center',
      color: 'var(--color-white, #fff)',
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '70px',
          color: 'var(--color-white, #fff)',
          marginBottom: '1rem',
        }}>
          404
        </h1>
        <h2 style={{
          color: 'var(--color-white, #fff)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: 'var(--font-size-body, 1rem)',
          marginBottom: '2.5rem',
        }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-secondary btn-animation-two">
          Return Home
        </Link>
      </div>
    </section>
  );
}
