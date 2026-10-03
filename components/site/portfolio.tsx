import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/site/shared';
import { portfolioProjects } from '@/lib/portfolio';

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section wrap portfolio-section"
      aria-labelledby="portfolio-heading"
    >
      <div className="section-heading">
        <div>
          <Eyebrow>03 / SELECTED WORK</Eyebrow>
          <h2 id="portfolio-heading">
            Good work.
            <br />
            <span className="muted-text">Out in the world.</span>
          </h2>
        </div>
        <p>
          <strong>A closer look at what we build.</strong>
          Explore two healthcare websites we’ve brought to life, from the first
          impression to the next appointment.
        </p>
      </div>
      <div className="portfolio-grid">
        {portfolioProjects.map((project, index) => (
          <article className="portfolio-project" key={project.slug}>
            <a
              className="portfolio-preview"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.name} website (opens in a new tab)`}
            >
              <div className="portfolio-browser-bar" aria-hidden="true">
                <span className="portfolio-browser-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>{project.domain}</span>
                <ArrowUpRight size={16} />
              </div>
              <div className="portfolio-screen">
                <Image
                  unoptimized
                  src={project.image}
                  alt={`${project.name} homepage preview`}
                  width={1440}
                  height={1000}
                  loading="lazy"
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
            </a>
            <div className="portfolio-project-meta">
              <span>{project.category}</span>
              <span aria-hidden="true">0{index + 1}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="portfolio-location">{project.location}</p>
            <p className="portfolio-description">{project.description}</p>
            <div className="portfolio-project-footer">
              <span>Website design & development</span>
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live site (opens in a new tab)`}
              >
                View live site <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="section-bottom-link">
        <span>Your business could be next.</span>
        <Link href="/contact" className="text-link">
          Let’s build your website <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
