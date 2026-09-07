import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function NotFound() {
  return (
    <main id="main" className="not-found wrap">
      <span className="eyebrow">404 / A LITTLE OFF THE BEATEN PATH</span>
      <h1>
        Let’s get you
        <br />
        <span className="muted-text">back on track.</span>
      </h1>
      <p>This page isn’t here, but your next chapter still could be.</p>
      <Link className="button button-dark" href="/">
        Back to the homepage <ArrowUpRight size={18} />
      </Link>
      <Link className="text-link" href="/services">
        Explore services <ArrowUpRight size={16} />
      </Link>
    </main>
  );
}
