'use client';
import { useRef, useState } from 'react';
const jobs = [
 {company:'Diebold Nixdorf',role:'Software Engineer',date:'Aug 2018 — Aug 2025',location:'Taipei, Taiwan',points:[
 'Maintained an event monitoring system supporting 2,000 ATMs, using SQL analysis and performance, load and stress testing to identify peak-hour constraints and support capacity planning.',
 'Developed and maintained web applications, servers and databases that surfaced machine event data to operations teams, improving stability and event reporting.',
 'Delivered an international Windows EOS security project, coordinating client, APAC security, software and hardware teams, with documentation supporting audit and reproducibility.',
 'Led usability analysis and optimisation of the Taiwanese ATM front-end interface; the design was adopted nationwide.'
 ]},
 {company:'Beyond Media Global',role:'Front-End Web Developer',date:'Feb 2017 — Jul 2018',location:'Taipei, Taiwan',points:[
 'Developed and maintained 15+ commercial web applications using JavaScript, React, MySQL and AWS.',
 'Handled domain setup, CMS deployment, API integration, SSL security and SEO across end-to-end delivery.',
 'Implemented login, payment and CRUD features, collaborating with designers and developers through Git and Jira.'
 ]},
 {company:'Vetica Group',role:'Branding Specialist',date:'Apr 2014 — Oct 2015',location:'Taipei, Taiwan',points:[
 'Managed stakeholder communication across 10+ brand and product design projects.',
 'Built internal administrative systems with data visualisation to improve operational efficiency.'
 ]},

];
export default function ExperienceTabs(){
 const [active,setActive]=useState(0);
 const buttons=useRef<(HTMLButtonElement|null)[]>([]);
 const job=jobs[active];
 return <div className="experience-tabs">
 <div className="experience-tablist" role="tablist" aria-label="Work experience" aria-orientation="vertical">{jobs.map((item,index)=><button key={item.company} ref={node=>{buttons.current[index]=node}} id={`experience-tab-${index}`} type="button" role="tab" aria-selected={active===index} aria-controls={`experience-panel-${index}`} tabIndex={active===index?0:-1} onClick={()=>setActive(index)} onKeyDown={event=>{let next=index;if(['ArrowDown','ArrowRight'].includes(event.key))next=(index+1)%jobs.length;else if(['ArrowUp','ArrowLeft'].includes(event.key))next=(index+jobs.length-1)%jobs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=jobs.length-1;else return;event.preventDefault();event.stopPropagation();setActive(next);buttons.current[next]?.focus()}}>{item.company}</button>)}</div>
 <div key={active} className="experience-panel" id={`experience-panel-${active}`} role="tabpanel" aria-labelledby={`experience-tab-${active}`} tabIndex={0}><p className="experience-kind">PROFESSIONAL EXPERIENCE</p><h3>{job.role} <span>@ {job.company}</span></h3><p className="experience-date">{job.date} <span>· {job.location}</span></p><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div>
 </div>;
}
