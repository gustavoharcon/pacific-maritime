import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-secondary btn-animation-two">
          Return Home
        </Link>
      </div>
    </section>
  );
}
