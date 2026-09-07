'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Asterisk, Menu, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { services, locations } from '@/lib/content';

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Timemac Digital home"
      className={'brand' + (large ? ' brand-large' : '')}
    >
      <Asterisk aria-hidden="true" strokeWidth={2.8} />
      <span>
        timemac<span className="brand-dot">.</span>
        <small>DIGITAL GROWTH STUDIO</small>
      </span>
    </Link>
  );
}
const links = [
  ['Services', '/services'],
  ['Healthcare', '/healthcare'],
  ['Our approach', '/approach'],
  ['About us', '/about'],
  ['Insights', '/insights'],
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span>
          <span className="status-dot" /> A little local knowledge. A lot of
          growth potential.
        </span>
        <Link href="/locations">
          Udupi · Manipal · Mangalore <ArrowUpRight size={12} />
        </Link>
      </div>
      <header className="site-header wrap">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, url]) => (
            <Link
              href={url}
              key={url}
              aria-current={
                pathname === url || pathname.startsWith(url + '/')
                  ? 'page'
                  : undefined
              }
            >
              {label}
              {label === 'Healthcare' && <span className="tiny-dot" />}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="button button-dark nav-cta">
            Let’s talk growth <ArrowUpRight size={16} />
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="mobile-menu-button"
                  aria-label="Open navigation"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent className="mobile-panel">
              <SheetTitle>Find your next chapter.</SheetTitle>
              <SheetDescription>
                Timemac Digital · Udupi, Manipal & Mangalore
              </SheetDescription>
              <nav aria-label="Mobile navigation">
                <Link onClick={() => setOpen(false)} href="/">
                  Home
                </Link>
                {links.map(([label, url]) => (
                  <Link
                    onClick={() => setOpen(false)}
                    href={url}
                    key={url}
                    aria-current={pathname === url ? 'page' : undefined}
                  >
                    {label}
                    <ArrowUpRight size={19} />
                  </Link>
                ))}
                <Link onClick={() => setOpen(false)} href="/industries">
                  Industries
                  <ArrowUpRight size={19} />
                </Link>
                <Link onClick={() => setOpen(false)} href="/locations">
                  Our locations
                  <ArrowUpRight size={19} />
                </Link>
                <Link onClick={() => setOpen(false)} href="/contact">
                  Let’s talk growth
                  <ArrowUpRight size={19} />
                </Link>
              </nav>
              <p className="mobile-signoff">
                Local roots.
                <br />
                Remarkable growth.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Your neighbourhood growth partner.
              <br />
              Healthcare at heart. Ambition everywhere.
            </p>
            <Link className="text-link" href="/contact">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="footer-column">
            <h3>WHAT WE DO</h3>
            {services.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug}>
                {s.short}
              </Link>
            ))}
          </div>
          <div className="footer-column">
            <h3>EXPLORE</h3>
            <Link href="/healthcare">Healthcare marketing</Link>
            <Link href="/industries">Industries we serve</Link>
            <Link href="/approach">Our approach</Link>
            <Link href="/about">About Timemac</Link>
            <Link href="/insights">Insights & ideas</Link>
            <Link href="/contact">Let’s talk</Link>
          </div>
          <div className="footer-column">
            <h3>OUR NEIGHBOURHOOD</h3>
            {locations.map((l) => (
              <Link key={l.slug} href={'/locations/' + l.slug}>
                <MapPin size={13} />
                {l.name}
              </Link>
            ))}
            <span className="footer-location-note">
              Coastal Karnataka, India
              <br />
              Local understanding.
              <br />
              Lasting connections.
            </span>
          </div>
        </div>
        <div className="footer-wordmark" aria-hidden="true">
          let’s grow
          <span>
            together.
            <ArrowUpRight />
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Timemac Digital.</span>
          <span>Made for the coast. Built for what’s next.</span>
          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#main" aria-label="Back to top">
              <ArrowRight className="back-top" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
