'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { services, locations } from '@/lib/content';
import { policyLinks } from '@/lib/policies';
import {
  DesktopNavigation,
  MobileNavigation,
} from '@/components/site/navigation';

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Timemac Digital home"
      className={'brand' + (large ? ' brand-large' : '')}
    >
      <span className="brand-symbol" aria-hidden="true">
        t.
      </span>
      <span>
        timemac<span className="brand-dot">.</span>
        <small>INDEPENDENT GROWTH STUDIO</small>
      </span>
    </Link>
  );
}
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
          INDEPENDENT THINKING. <strong>LOCAL UNDERSTANDING.</strong>
        </span>
        <Link href="/locations">
          Udupi · Manipal · Mangalore <ArrowUpRight size={12} />
        </Link>
      </div>
      <header className="site-header wrap">
        <Brand />
        <DesktopNavigation key={pathname} pathname={pathname} />
        <div className="header-actions">
          <Link href="/contact" className="button button-dark nav-cta">
            <span className="nav-cta-full">Let’s talk growth</span>
            <span className="nav-cta-short">Let’s talk</span>
            <ArrowUpRight size={16} />
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
              <MobileNavigation
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
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
          <div className="footer-intro">
            <Brand />
            <p className="footer-summary">
              <strong>
                Your neighbourhood <span>growth partner.</span>
              </strong>
              <span>
                Healthcare at heart.
                <br />
                Ambition everywhere.
              </span>
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
        <nav className="footer-policies" aria-label="Policies and pricing">
          {policyLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact#business-details">Contact & support</Link>
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Timemac Digital.</span>
          <span>Made for the coast. Built for what’s next.</span>
          <div>
            <a href="#main" aria-label="Back to top">
              <ArrowRight className="back-top" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
