'use client';

import { useRef, useState } from 'react';
import { assetPath } from '@/lib/assets';

const projects = [
  {
    title: 'Digital Reserve Dashboard',
    label: 'DISSERTATION · WEBSITE PROTOTYPE',
    description: 'A digital reserve dashboard connecting conservation lakehouse research with a practical interface for exploring data.',
    tags: ['Next.js', 'NestJS', 'Databricks', 'Azure'],
    type: 'dashboard',
  },
  {
    title: 'Conservation Lakehouse',
    label: 'SAME DISSERTATION · ARCHITECTURE RESEARCH',
    description: 'The data architecture behind the dashboard research: organising conservation data into raw, validated and analytics-ready layers.',
    tags: ['Delta Lake', 'Databricks', 'Data modelling'],
    type: 'lakehouse',
  },
  {
    title: 'Decision Analytics Dashboard',
    label: 'STAFFING & PATIENT ANALYTICS · COURSEWORK',
    description: 'An interactive workspace for comparing staffing scenarios and exploring patient flow, breach factors, predictive models and downloadable reports.',
    tags: ['Python', 'Streamlit', 'Scheduling optimisation', 'Healthcare analytics'],
    type: 'decision-dashboard',
  },
  {
    title: 'ATM Interface Development',
    label: 'PROFESSIONAL EXPERIENCE · DEPLOYED INTERFACE',
    description: 'Developed the ATM front-end interface shown in this real-world installation. Led usability analysis and interface optimisation, with the design adopted nationwide. My wider role included ATM monitoring, reliability and performance.',
    tags: ['Interface development', 'Usability', 'Enterprise software'],
    type: 'enterprise',
  },
];

function previewUrl(type: string, demoUrl: string, decisionDashboardUrl: string) {
  if (type === 'dashboard') return demoUrl;
  if (type === 'decision-dashboard') return decisionDashboardUrl;
  return '';
}

export default function ProjectCarousel({
  demoUrl,
  decisionDashboardUrl,
  dissertationUrl,
}: {
  demoUrl: string;
  decisionDashboardUrl: string;
  dissertationUrl: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function go(index: number) {
    const container = track.current;
    if (!container) return;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }

  return <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Featured projects">
    <div
      className="project-track"
      ref={track}
      onScroll={() => {
        const container = track.current;
        if (container) setActive(Math.round(container.scrollLeft / container.clientWidth));
      }}
    >
      {projects.map((project, index) => {
        const url = previewUrl(project.type, demoUrl, decisionDashboardUrl);

        return <article
          key={project.type}
          className="project-slide"
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          inert={index !== active}
        >
          <div className="carousel-art">
            {url ? <div className="dashboard-preview">
              <div className="preview-browser-bar">
                <span aria-hidden="true">● ● ●</span>
                <small>{project.type === 'dashboard' ? 'digital-reserve-dashboard.vercel.app' : 'decision-analytics-dashboard-redesign.streamlit.app'}</small>
              </div>
              <div className="preview-viewport">
                <iframe
                  src={project.type === 'decision-dashboard' ? `${url}?embed=true` : url}
                  title={`${project.title} website preview`}
                  loading="lazy"
                  tabIndex={-1}
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="no-referrer"
                />
                <a className="preview-open" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} in a new tab`}>
                  <span>Open website ↗</span>
                </a>
              </div>
              <span className="preview-caption">LIVE WEBSITE PREVIEW</span>
            </div> : project.type === 'lakehouse' ? <div className="carousel-diagram">
              <span className="eyebrow">CONSERVATION DATA FOUNDATION</span>
              <h3>From source<br />to insight.</h3>
              <div className="architecture-stages">
                <span>01 / Bronze<small>Raw & traceable</small></span>
                <b>↓</b>
                <span>02 / Silver<small>Clean & connected</small></span>
                <b>↓</b>
                <span>03 / Gold<small>Ready for analysis</small></span>
              </div>
            </div> : <figure className="atm-project-photo">
              <div className="atm-photo-frame">
                <img src={assetPath('/atm-interface-focused.png')} alt="Installed ATMs showing the front-end interface developed by Roma Fu" loading="lazy" />
              </div>
            </figure>}
          </div>
          <div className="carousel-copy">
            <p className="eyebrow">{project.label}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-card-action">
              {url && <a className="button project-live" href={url} target="_blank" rel="noopener noreferrer">View project ↗</a>}
              {project.type === 'dashboard' && dissertationUrl && <a className="button project-dissertation" href={dissertationUrl} target="_blank" rel="noopener noreferrer">Read dissertation ↗</a>}
              {!url && <p className="project-context">{project.type === 'lakehouse' ? 'Architecture research from the dashboard dissertation.' : 'Deployed interface · no public demo.'}</p>}
            </div>
          </div>
        </article>;
      })}
    </div>
    <div className="carousel-controls">
      <span className="carousel-hint">EXPLORE MY WORK <span aria-hidden="true">↔</span></span>
      <nav aria-label="Select project">
        {projects.map((project, index) => <button key={project.type} type="button" onClick={() => go(index)} aria-label={`Show ${project.title}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'active' : ''} />)}
      </nav>
      <div className="carousel-arrows">
        <button type="button" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous project">←</button>
        <span>{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => go(active + 1)} disabled={active === projects.length - 1} aria-label="Next project">→</button>
      </div>
    </div>
  </div>;
}
