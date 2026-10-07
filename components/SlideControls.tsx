'use client';
import { useEffect, useState } from 'react';
const labels=['Home','About','Experience','Work','Contact'];
const ids=['slide-1','slide-2','slide-3','slide-4','slide-5'];
export default function SlideControls(){
 const [active,setActive]=useState(0);
 useEffect(()=>{const nodes=ids.map(id=>document.getElementById(id)).filter((node):node is HTMLElement=>!!node);const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting)setActive(nodes.indexOf(entry.target as HTMLElement))},{threshold:.55});nodes.forEach(node=>observer.observe(node));
 const onKey=(event:KeyboardEvent)=>{if(event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||(event.target instanceof HTMLElement&&event.target.closest('input,textarea,select,button,a,[contenteditable]')))return;const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';if(['ArrowDown','ArrowRight','PageDown',' '].includes(event.key)){event.preventDefault();document.getElementById(ids[Math.min(active+1,ids.length-1)])?.scrollIntoView({behavior})}else if(['ArrowUp','ArrowLeft','PageUp'].includes(event.key)){event.preventDefault();document.getElementById(ids[Math.max(active-1,0)])?.scrollIntoView({behavior})}};
 window.addEventListener('keydown',onKey);return()=>{observer.disconnect();window.removeEventListener('keydown',onKey)}},[active]);
 return <aside className="slide-controls" aria-label="Slide progress"><span>{String(active+1).padStart(2,'0')} <i>/</i> {String(ids.length).padStart(2,'0')}</span><nav aria-label="Go to slide">{ids.map((id,i)=><a key={id} className={active===i?'is-active':''} href={`#${id}`} aria-label={`Go to ${labels[i]}`} aria-current={active===i?'step':undefined}/>)}</nav><span className="slide-key-hint">↑ ↓</span></aside>
}
