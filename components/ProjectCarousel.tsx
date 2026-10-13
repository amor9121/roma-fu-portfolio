'use client';

import { useEffect, useRef, useState } from 'react';
import { assetPath } from '@/lib/assets';

const projects = [
  {
    title: 'Digital Reserve Platform',
    label: 'DISSERTATION · CONSERVATION DATA PLATFORM',
    description: 'A conservation data platform bringing together a live reserve dashboard and the lakehouse architecture behind it, developed as part of my dissertation.',
    tags: ['Next.js', 'NestJS', 'Databricks', 'Delta Lake', 'Azure'],
    type: 'digital-reserve',
  },
  {
    title: 'Decision Analytics Dashboard',
    label: 'STAFFING & PATIENT ANALYTICS · COURSEWORK',
    description: 'An interactive workspace for comparing staffing scenarios and exploring patient flow, breach factors, predictive models and downloadable reports.',
    tags: ['Python', 'Streamlit', 'Scheduling optimisation', 'Healthcare analytics'],
    type: 'decision-dashboard',
  },
  {
    title: 'ATM Systems Engineering',
    label: 'PROFESSIONAL EXPERIENCE · ENTERPRISE ATM ENGINEERING',
    description: 'Worked across three areas of ATM engineering: developed a customer-facing interface adopted nationwide in Taiwan, maintained event monitoring for 2,000+ ATMs, and delivered an international Windows end-of-support security project.',
    tags: ['Customer interface', 'SQL & event monitoring', 'Performance testing', 'Windows security'],
    type: 'enterprise',
  },
];

function previewUrl(type: string, demoUrl: string, decisionDashboardUrl: string) {
  if (type === 'digital-reserve') return demoUrl;
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
  const [digitalView, setDigitalView] = useState<'dashboard' | 'architecture'>('dashboard');
  const [analyticsView, setAnalyticsView] = useState<'dashboard' | 'analytics'>('dashboard');
  const [atmView, setAtmView] = useState<'interface' | 'systems'>('interface');
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const container = track.current;
    if (!container || typeof IntersectionObserver === 'undefined') {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

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
        const isDigitalReserve = project.type === 'digital-reserve';
        const isExplanationView = (isDigitalReserve && digitalView === 'architecture') || (project.type === 'decision-dashboard' && analyticsView === 'analytics');

        return <article
          key={project.type}
          className={`project-slide${hasEntered && index === active ? ' is-active' : ''}`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
          inert={index !== active}
        >
          <div className="carousel-art">
            {url ? <div className={`dashboard-preview${isExplanationView ? ' explanation-preview' : ''}`}>
              {!isExplanationView && <div className="preview-browser-bar">
                <span aria-hidden="true">● ● ●</span>
                <small>{isDigitalReserve ? 'digital-reserve-dashboard.vercel.app' : 'decision-analytics-dashboard-redesign.streamlit.app'}</small>
              </div>}
              <div className={`preview-viewport${isExplanationView ? ' explanation-viewport' : ''}`}>
                {isDigitalReserve && digitalView === 'architecture' ? <div className="digital-architecture-preview">
                  <span className="eyebrow">CONSERVATION DATA FOUNDATION</span>
                  <h4>From source<br />to insight.</h4>
                  <div className="architecture-stages">
                    <span>01 / Bronze<small>Raw & traceable</small></span>
                    <b>↓</b>
                    <span>02 / Silver<small>Clean & connected</small></span>
                    <b>↓</b>
                    <span>03 / Gold<small>Ready for analysis</small></span>
                  </div>
                </div> : project.type === 'decision-dashboard' && analyticsView === 'analytics' ? <div className="decision-methods-preview">
                  <p className="eyebrow">WORKSPACE OVERVIEW</p>
                  <h4>From planning<br />to reporting.</h4>
                  <div className="decision-methods-list">
                    <span><b>01</b><strong>Scheduling</strong><small>Cost, fairness & skills coverage</small></span>
                    <span><b>02</b><strong>Patient analytics</strong><small>Flow, breach factors & prediction</small></span>
                    <span><b>03</b><strong>Reports & data</strong><small>Reproducible outputs & workspace</small></span>
                  </div>
                </div> : <iframe
                  src={project.type === 'decision-dashboard' ? `${url}?embed=true` : url}
                  title={`${project.title} website preview`}
                  loading="lazy"
                  tabIndex={-1}
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="no-referrer"
                />}
                {project.type === 'decision-dashboard' && analyticsView === 'dashboard' && <div className="decision-intro" aria-hidden="true">
                  <p className="decision-intro-kicker">DECISION ANALYTICS DASHBOARD</p>
                  <h4>Better staffing.<br />Clearer insight.</h4>
                  <div className="decision-intro-metrics">
                    <span><b>01</b>Coverage</span>
                    <span><b>02</b>Staffing cost</span>
                    <span><b>03</b>Patient flow</span>
                  </div>
                  <div className="decision-intro-chart">
                    <small>PLANNING · ANALYSIS · REPORTING</small>
                    <svg viewBox="0 0 360 48" preserveAspectRatio="none">
                      <path d="M2 39 C35 36 39 19 72 24 S112 40 145 28 S189 9 218 20 S260 35 291 16 S330 12 358 4" />
                    </svg>
                  </div>
                </div>}
                {isDigitalReserve && digitalView === 'dashboard' && <div className="project-entry-intro digital-entry" aria-hidden="true">
                  <p className="project-entry-kicker">DIGITAL RESERVE DASHBOARD</p>
                  <h4>From conservation data<br />to clearer insight.</h4>
                  <div className="digital-entry-flow">
                    <span>Field data</span><b>→</b><span>Lakehouse</span><b>→</b><span>Reserve insights</span>
                  </div>
                </div>}
                {((isDigitalReserve && digitalView === 'dashboard') || (project.type === 'decision-dashboard' && analyticsView === 'dashboard')) && <a className="preview-open" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} in a new tab`}>
                  <span>Open website ↗</span>
                </a>}
              </div>
              {!isExplanationView && <span className="preview-caption">LIVE WEBSITE PREVIEW</span>}
            </div> : <div className={`atm-project-visual${atmView === 'systems' ? ' is-systems-view' : ''}`}>
              <div className="atm-photo-frame">
                {atmView === 'interface' ? <img className="atm-installation-image" src={assetPath('/atm-interface-focused.png')} alt="Installed ATMs showing the front-end interface developed by Roma Fu" loading="lazy" /> : <div className="atm-systems-preview">
                  <p className="eyebrow">THREE AREAS OF WORK</p>
                  <h4>ATM systems<br />at scale.</h4>
                  <div>
                    <span><b>01</b><strong>Customer interface</strong><small>Adopted nationwide in Taiwan</small></span>
                    <span><b>02</b><strong>Monitoring</strong><small>2,000+ ATMs · SQL analysis · performance testing</small></span>
                    <span><b>03</b><strong>Security</strong><small>Windows end-of-support · international coordination</small></span>
                  </div>
                </div>}
              </div>
              {atmView === 'interface' && <div className="project-entry-intro atm-photo-entry" aria-hidden="true">
                <p className="project-entry-kicker">ENTERPRISE ATM ENGINEERING</p>
                <h4>Interface, monitoring<br />and security.</h4>
                <div className="atm-entry-pillars">
                  <span><b>01</b><strong>Interface</strong></span>
                  <span><b>02</b><strong>Monitoring</strong></span>
                  <span><b>03</b><strong>Security</strong></span>
                </div>
              </div>}
            </div>}
          </div>
          <div className="carousel-copy">
            <p className="eyebrow">{project.label}</p>
            <h3>{project.title}</h3>
            {isDigitalReserve && <nav className="project-view-switch" aria-label="Digital Reserve views">
              <button type="button" onClick={() => setDigitalView('dashboard')} aria-pressed={digitalView === 'dashboard'}>Dashboard</button>
              <button type="button" onClick={() => setDigitalView('architecture')} aria-pressed={digitalView === 'architecture'}>Architecture</button>
            </nav>}
            {project.type === 'decision-dashboard' && <nav className="project-view-switch" aria-label="Decision Analytics views">
              <button type="button" onClick={() => setAnalyticsView('dashboard')} aria-pressed={analyticsView === 'dashboard'}>Live dashboard</button>
              <button type="button" onClick={() => setAnalyticsView('analytics')} aria-pressed={analyticsView === 'analytics'}>Analytics</button>
            </nav>}
            {project.type === 'enterprise' && <nav className="project-view-switch" aria-label="ATM project views">
              <button type="button" onClick={() => setAtmView('interface')} aria-pressed={atmView === 'interface'}>Interface</button>
              <button type="button" onClick={() => setAtmView('systems')} aria-pressed={atmView === 'systems'}>Systems work</button>
            </nav>}
            <p>{project.description}</p>
            <ul className="tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-card-action">
              {url && <a className="button project-live" href={url} target="_blank" rel="noopener noreferrer">View project ↗</a>}
              {isDigitalReserve && dissertationUrl && <a className="button project-dissertation" href={assetPath(dissertationUrl)} target="_blank" rel="noopener noreferrer">Read dissertation ↗</a>}
              {!url && <p className="project-context">Professional experience</p>}
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
