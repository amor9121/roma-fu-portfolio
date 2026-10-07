const stages = [
  { label: 'Observe', detail: 'Conservation sources', icon: <><path d="M32 47V30M32 36C15 36 15 15 15 15S34 15 32 36ZM32 30C32 12 49 12 49 12S51 30 32 30Z"/><path d="M18 49h28"/></> },
  { label: 'Organise', detail: 'Lakehouse layers', icon: <><ellipse cx="32" cy="17" rx="19" ry="7"/><path d="M13 17v29c0 10 38 10 38 0V17M13 31c0 10 38 10 38 0"/></> },
  { label: 'Understand', detail: 'Analytics & dashboard', icon: <><rect x="9" y="11" width="46" height="34" rx="3"/><path d="M25 53h14M32 45v8M18 35v-8M28 35V21M38 35v-5M48 35V18"/></> },
];
export default function ProjectFlow() {
  return <figure className="project-flow"><figcaption><span className="eyebrow">FROM FIELD TO INSIGHT</span><strong>A connected view of conservation.</strong><span className="flow-disclaimer">Conceptual project flow · Research & prototype</span></figcaption><ol>{stages.map((stage,i)=><li key={stage.label}><span className="flow-icon"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{stage.icon}</svg></span><div><span className="flow-step">0{i+1}</span><h4>{stage.label}</h4><p>{stage.detail}</p></div>{i<2&&<span className="flow-connector" aria-hidden="true">↓</span>}</li>)}</ol></figure>;
}
