'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { activeNavigationGroup, navigationGroups } from '@/lib/navigation';

export function DesktopNavigation({ pathname }: { pathname: string }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const navigation = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeGroup = activeNavigationGroup(pathname);

  const cancelClose = () => {
    if (closeTimer.current !== null) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openGroup = (id: string) => {
    cancelClose();
    setExpanded(id);
  };
  const closeAfterPointerLeaves = (id: string) => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setExpanded((current) => (current === id ? null : current));
      closeTimer.current = null;
    }, 180);
  };

  useEffect(
    () => () => {
      if (closeTimer.current !== null) clearTimeout(closeTimer.current);
    },
    [],
  );

  useEffect(() => {
    if (!expanded) return;
    const dismiss = (event: Event) => {
      if (!navigation.current?.contains(event.target as Node))
        setExpanded(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      navigation.current
        ?.querySelector<HTMLButtonElement>(`#desktop-trigger-${expanded}`)
        ?.focus();
      setExpanded(null);
    };
    const breakpoint = window.matchMedia('(max-width: 1199px)');
    const resize = () => setExpanded(null);
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    document.addEventListener('keydown', escape);
    breakpoint.addEventListener('change', resize);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismiss);
      document.removeEventListener('keydown', escape);
      breakpoint.removeEventListener('change', resize);
    };
  }, [expanded]);

  return (
    <nav
      className="desktop-nav grouped-navigation"
      aria-label="Main navigation"
      ref={navigation}
    >
      {navigationGroups.map((group) => {
        const active = activeGroup === group.id;
        const isOpen = expanded === group.id;
        return (
          <div
            className="nav-group"
            key={group.id}
            onPointerEnter={(event) => {
              if (event.pointerType === 'mouse') openGroup(group.id);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === 'mouse')
                closeAfterPointerLeaves(group.id);
            }}
          >
            <button
              type="button"
              id={`desktop-trigger-${group.id}`}
              className="nav-group-trigger"
              data-active={active || undefined}
              aria-expanded={isOpen}
              aria-controls={`desktop-panel-${group.id}`}
              onClick={() => openGroup(group.id)}
              onKeyDown={(event) => {
                if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')
                  return;
                event.preventDefault();
                openGroup(group.id);
                const last = event.key === 'ArrowUp';
                requestAnimationFrame(() => {
                  const links =
                    navigation.current?.querySelectorAll<HTMLAnchorElement>(
                      `#desktop-panel-${group.id} a`,
                    );
                  links?.[last ? links.length - 1 : 0]?.focus();
                });
              }}
            >
              {group.label}
              <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div
              className={`nav-popover nav-popover-${group.id}`}
              id={`desktop-panel-${group.id}`}
              aria-labelledby={`desktop-trigger-${group.id}`}
              hidden={!isOpen}
            >
              <div className="nav-popover-intro">
                <p>{group.description}</p>
                <Link
                  href={group.overview.href}
                  aria-current={
                    pathname === group.overview.href ? 'page' : undefined
                  }
                  onNavigate={() => setExpanded(null)}
                >
                  {group.overview.label}{' '}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </div>
              <ul className="nav-subpages">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      onNavigate={() => setExpanded(null)}
                    >
                      <span>
                        <strong>{link.label}</strong>
                        {link.description && <span>{link.description}</span>}
                      </span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              {group.related && (
                <div className="nav-related">
                  {group.related.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={pathname === link.href ? 'page' : undefined}
                      onNavigate={() => setExpanded(null)}
                    >
                      {link.label} <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function MobileNavigation({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const activeGroup = activeNavigationGroup(pathname);
  return (
    <nav className="mobile-navigation" aria-label="Mobile navigation">
      <Link
        href="/"
        aria-current={pathname === '/' ? 'page' : undefined}
        onNavigate={onNavigate}
      >
        Home <ArrowUpRight size={19} aria-hidden="true" />
      </Link>
      {navigationGroups.map((group) => {
        const links = [
          group.overview,
          ...group.links,
          ...(group.related ?? []),
        ];
        const active = activeGroup === group.id;
        return (
          <div className="mobile-nav-group" key={group.id}>
            <button
              type="button"
              id={`mobile-trigger-${group.id}`}
              aria-controls={`mobile-panel-${group.id}`}
              aria-expanded={expanded === group.id}
              data-active={active || undefined}
              onClick={() =>
                setExpanded(expanded === group.id ? null : group.id)
              }
            >
              {group.label} <ChevronDown size={21} aria-hidden="true" />
            </button>
            <ul
              id={`mobile-panel-${group.id}`}
              aria-labelledby={`mobile-trigger-${group.id}`}
              className="mobile-subpages"
              hidden={expanded !== group.id}
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    onNavigate={onNavigate}
                  >
                    {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <Link
        href="/contact"
        onNavigate={onNavigate}
        aria-current={pathname === '/contact' ? 'page' : undefined}
      >
        Let’s talk growth <ArrowUpRight size={19} aria-hidden="true" />
      </Link>
    </nav>
  );
}
