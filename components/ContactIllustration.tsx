'use client';
import { assetPath } from '@/lib/assets';
import { useEffect, useRef, useState } from 'react';
export default function ContactIllustration(){
 const [pets,setPets]=useState(0);
 const [happy,setHappy]=useState(false);
 const [greetings,setGreetings]=useState(0);
 const [speaking,setSpeaking]=useState(false);
 const speechTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const messages=['Hi, I’m Roma 👋','Let’s build something useful.','My cat is the project manager 🐾'];
 const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);if(speechTimer.current)clearTimeout(speechTimer.current)},[]);
 function pet(){if(timer.current)clearTimeout(timer.current);setPets(count=>count+1);setHappy(true);timer.current=setTimeout(()=>setHappy(false),2200)}
 function greet(){if(speechTimer.current)clearTimeout(speechTimer.current);setGreetings(count=>count+1);setSpeaking(true);speechTimer.current=setTimeout(()=>setSpeaking(false),3500)}
 return <figure className="contact-illustration"><div className="contact-art-scene"><img src={assetPath('/roma-contact-casual.png')} alt="Roma wearing glasses and a relaxed blue hoodie, coding beside her white cat" width="480" height="480"/><button className="contact-person-touch" type="button" onClick={greet} aria-label="Say hello to Roma" title="跟 Roma 打招呼"/><div className="contact-speech-region" role="status" aria-live="polite">{speaking&&<span key={greetings} className="contact-speech">{messages[(greetings-1)%messages.length]}</span>}</div><button className="contact-cat-touch" type="button" onClick={pet} aria-label="Pet the white cat on Roma’s desk" title="摸摸貓貓">{happy&&<span key={pets} className="contact-cat-hearts" aria-hidden="true">♡ ♡ ♡</span>}</button></div><figcaption aria-live="polite">{happy?'Purr… nice to meet you ♡':'A little code. A little company.'}</figcaption></figure>
}
