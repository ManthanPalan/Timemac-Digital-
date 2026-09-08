'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  HeartPulse,
  GraduationCap,
  Utensils,
  Building2,
  Store,
  Check,
  MessagesSquare,
  Plus,
  Minus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { faqs, industries } from '@/lib/content';
import { ArticleCards, Eyebrow } from '@/components/site/shared';

export function FAQ() {
  return (
    <section
      className="section wrap faq-section faq-redesign"
      aria-labelledby="faq-title"
    >
      <div className="faq-intro">
        <Eyebrow>A FEW GOOD QUESTIONS</Eyebrow>
        <h2 id="faq-title">
          Curious?
          <br />
          <span className="muted-text">Let’s clear things up.</span>
        </h2>
        <p className="faq-intro-copy">
          Straight answers about getting started, working together and what to
          expect.
        </p>
      </div>
      <Accordion
        defaultValue={['0']}
        className="faq-list"
        aria-label="Frequently asked questions"
      >
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={String(i)}>
            <AccordionTrigger>
              <span className="faq-number" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="faq-question">{q}</span>
              <span className="faq-toggle" aria-hidden="true">
                <Plus className="faq-plus" size={18} />
                <Minus className="faq-minus" size={18} />
              </span>
            </AccordionTrigger>
            <AccordionContent className="faq-answer">
              <p>{a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="faq-help">
        <span className="faq-help-icon">
          <MessagesSquare size={25} strokeWidth={1.5} aria-hidden="true" />
        </span>
        <h3>Something more specific?</h3>
        <p>
          Start with your business, your goals and the questions on your mind.
        </p>
        <Link className="text-link" href="/contact">
          Plan a conversation <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
const focus = [
  {
    label: 'Healthcare',
    icon: HeartPulse,
    slug: 'clinics-dental',
    title: 'Good care deserves to be found.',
    description:
      'For clinics, hospitals, dental practices and diagnostic centres. Help people discover your expertise and take a confident next step.',
    href: '/healthcare',
  },
  {
    label: 'Education',
    icon: GraduationCap,
    slug: 'education',
    title: 'Open the door to the next chapter.',
    description:
      'For institutions, training providers and learning centres. Connect your offering with students and families looking for their next opportunity.',
    href: '/industries/education',
  },
  {
    label: 'Hospitality',
    icon: Utensils,
    slug: 'hospitality',
    title: 'Make a visit worth looking forward to.',
    description:
      'For stays, restaurants and local experiences. Show people what makes your business special, then make getting in touch effortless.',
    href: '/industries/hospitality',
  },
  {
    label: 'Real estate',
    icon: Building2,
    slug: 'real-estate',
    title: 'Build interest. Start better conversations.',
    description:
      'For property brands, developers and interior studios. Bring your spaces to life and give every enquiry a clear next step.',
    href: '/industries/real-estate',
  },
  {
    label: 'Local businesses',
    icon: Store,
    slug: 'local-businesses',
    title: 'The local favourite. Easier to find.',
    description:
      'For ambitious retailers and service businesses. Connect the reputation you have built with the customers you have yet to meet.',
    href: '/industries/local-businesses',
  },
];
export function IndustrySelector() {
  const [selected, setSelected] = useState(0);
  const current = focus[selected];
  const Icon = current.icon;
  return (
    <div className="industry-selector">
      <div
        className="industry-tabs"
        role="tablist"
        aria-label="Explore industries"
      >
        {focus.map((f, i) => (
          <Button
            role="tab"
            id={'industry-tab-' + i}
            aria-controls={'industry-panel-' + i}
            aria-selected={selected === i}
            tabIndex={selected === i ? 0 : -1}
            onKeyDown={(e) => {
              if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === 'Home'
                    ? 0
                    : e.key === 'End'
                      ? focus.length - 1
                      : (i + (e.key === 'ArrowRight' ? 1 : -1) + focus.length) %
                        focus.length;
                setSelected(next);
                document.getElementById('industry-tab-' + next)?.focus();
              }
            }}
            key={f.label}
            variant="ghost"
            onClick={() => setSelected(i)}
            className={selected === i ? 'active' : ''}
          >
            <f.icon size={16} />
            {f.label}
          </Button>
        ))}
      </div>
      <div
        className="industry-panel"
        role="tabpanel"
        id={'industry-panel-' + selected}
        aria-labelledby={'industry-tab-' + selected}
        tabIndex={0}
      >
        <div className="industry-panel-icon">
          <Icon strokeWidth={1} />
          <span>
            YOUR INDUSTRY.
            <br />
            OUR FULL ATTENTION.
          </span>
        </div>
        <div>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
          <Link href={current.href} className="text-link">
            Explore {current.label.toLowerCase()} marketing{' '}
            <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="industry-panel-needs">
          {industries
            .find((x) => x.slug === current.slug)
            ?.needs.slice(0, 3)
            .map((n) => (
              <span key={n}>
                <Check size={15} />
                {n}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
export function InsightFilter() {
  const [category, setCategory] = useState('All insights');
  const cats = [
    'All insights',
    'Healthcare marketing',
    'Google Ads',
    'CRM & automation',
  ];
  return (
    <>
      <div className="insight-filter">
        <div className="filter-buttons" aria-label="Filter insights">
          {cats.map((c) => (
            <Button
              key={c}
              variant="ghost"
              aria-pressed={c === category}
              onClick={() => setCategory(c)}
              className={category === c ? 'active' : ''}
            >
              {c}
            </Button>
          ))}
        </div>
        <p aria-live="polite">
          {category === 'All insights'
            ? '3 perspectives to explore'
            : '1 perspective on ' + category.toLowerCase()}
        </p>
      </div>
      <ArticleCards category={category} />
    </>
  );
}
