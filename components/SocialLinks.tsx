import { profile } from '@/lib/profile';

const icons = {
  GitHub: <><path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-3.4c.1-1-.3-1.9-.9-2.5 3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C5.8 1.7 4.7 2 4.7 2a4.8 4.8 0 0 0-.1 3.6 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8-.6.6-.9 1.4-.9 2.5V22"/></>,
  LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v7M7.5 7v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/></>,
  Email: <><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></>,
};

export default function SocialLinks() {
  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'Email', href: profile.email ? `mailto:${profile.email}` : '' },
  ] as const;
  return <aside className="social-rail" aria-label="Social and contact links">
    <div className="social-icons">{links.map(({label,href}) => {
      const icon = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[label]}</svg>;
      return href ? <a key={label} href={href} aria-label={label} title={label} target={label==='Email'?undefined:'_blank'} rel={label==='Email'?undefined:'noopener noreferrer'}>{icon}<span className="social-tooltip">{label}</span></a> : <span key={label} className="social-pending" tabIndex={0} aria-label={`${label} — link coming soon`} title={`${label} — 待設定`}>{icon}<span className="social-tooltip">{label} · 待設定</span></span>;
    })}</div>
    <span className="rail-caption">LET’S CONNECT</span>
  </aside>;
}
