import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Clock3, Asterisk } from 'lucide-react';
import { articles } from '@/lib/content';
import { Breadcrumb, Eyebrow, CTA } from '@/components/site/shared';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.excerpt,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: a.title,
      description: a.excerpt,
      images: [],
    },
  };
}
export default async function Article({ params }: Props) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <main id="main">
      <Breadcrumb
        items={[
          { label: 'Insights', href: '/insights' },
          { label: a.category },
        ]}
      />
      <header className="article-header wrap">
        <Eyebrow>{a.category.toUpperCase()}</Eyebrow>
        <h1>{a.title}</h1>
        <p>{a.excerpt}</p>
        <div className="article-byline">
          <span>
            <Asterisk size={23} />
            Timemac Perspective
          </span>
          <span>
            <Clock3 size={14} />
            {a.read}
          </span>
        </div>
      </header>
      <div className="article-layout wrap">
        <aside>
          <span className="eyebrow">IN THIS STORY</span>
          <nav aria-label="Table of contents">
            {a.sections.map(([title], i) => (
              <a key={title} href={'#section-' + i}>
                <span>0{i + 1}</span>
                {title}
              </a>
            ))}
          </nav>
          <Link href="/contact" className="article-aside-cta">
            Make this practical
            <br />
            for your business.
            <ArrowUpRight size={23} />
          </Link>
        </aside>
        <article className="article-body">
          {a.sections.map(([title, text], i) => (
            <section key={title} id={'section-' + i}>
              <h2>{title}</h2>
              <p>{text}</p>
            </section>
          ))}
          <div className="article-endnote">
            <span className="eyebrow">A THOUGHT TO TAKE WITH YOU</span>
            <p>
              Start with the people you want to reach. Make the journey useful.
              Give every enquiry a clear next step.
            </p>
          </div>
          <Link href="/insights" className="text-link">
            Explore more perspectives <ArrowUpRight size={16} />
          </Link>
        </article>
      </div>
      <CTA />
    </main>
  );
}
