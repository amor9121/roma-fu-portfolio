'use client';
import { useEffect, useRef, useState } from 'react';

export default function WhiteCat() {
  const [pets, setPets] = useState(0);
  const [happy, setHappy] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const pet = () => {
    if (timer.current) clearTimeout(timer.current);
    setPets(count => count + 1);
    setHappy(true);
    timer.current = setTimeout(() => setHappy(false), 3200);
  };
  const reactions = [
    { mood: 'purr', text: 'Purr… thank you ♡', symbol: '♡' },
    { mood: 'curious', text: 'What are we building today?', symbol: '?' },
    { mood: 'sleepy', text: 'A tiny nap, then back to code…', symbol: 'z' },
    { mood: 'wave', text: 'Hello, lovely human!', symbol: '✦' },
  ];
  const reaction = reactions[Math.max(0, pets - 1) % reactions.length];
  return <div className={`cat-companion${happy ? ` is-reacting cat-${reaction.mood}` : ''}`}>
    <button type="button" className="cat-pet-button" onClick={pet} aria-label="Pet the white cat" title="摸摸貓貓">
      {happy && <span key={pets} className="cat-hearts" aria-hidden="true"><i>{reaction.symbol}</i><i>{reaction.symbol}</i><i>{reaction.symbol}</i></span>}
    <svg className="white-cat" viewBox="0 0 240 210" role="img" aria-label="A friendly white cat with a mist-blue collar, gently blinking and swishing its tail">
      <ellipse cx="120" cy="194" rx="85" ry="9" fill="#c4b8a8" opacity=".22" />
      <g className="cat-body" fill="#fffefc" stroke="#b5bdc4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path className="cat-tail" d="M160 175 C209 187 229 155 215 140 C204 131 197 141 202 151 C208 163 190 167 177 157" />
        <path d="M79 111 C64 132 61 170 72 187 C83 198 162 198 175 183 C181 165 167 127 154 113Z" />
        <g className="cat-head">
        <path d="M75 77 L71 27 Q72 18 81 23 L106 43 Q123 38 141 43 L165 23 Q173 19 174 29 L169 80 C184 104 170 126 124 129 C78 131 58 106 75 77Z" />
        <path d="M80 54 L79 32 L97 47" className="cat-ear-inner cat-ear-left" fill="#f0cfd2" stroke="none" />
        <path d="M148 47 L166 32 L165 57" className="cat-ear-inner cat-ear-right" fill="#f0cfd2" stroke="none" />
        <g className="cat-eyes" fill="#586975" stroke="none"><ellipse cx="98" cy="88" rx="3.4" ry="4.8"/><ellipse cx="147" cy="88" rx="3.4" ry="4.8"/></g>
        <path d="M119 98 Q124 94 129 98 L124 103Z" fill="#d9a7ad" stroke="none" />
        <path d="M124 104 Q119 111 115 106 M124 104 Q129 111 133 106" fill="none" stroke="#817c75" strokeWidth="1.6" />
        <path d="M78 101 L55 97 M78 107 L55 111 M165 101 L188 97 M165 108 L188 112" stroke="#bcb7ad" strokeWidth="1.5" />
        </g>
        <path d="M89 125 Q122 141 157 124 L156 134 Q120 148 89 135Z" fill="#96b5cc" stroke="none" />
        <circle cx="125" cy="139" r="5" fill="#dce3e8" stroke="#9ba8b2" strokeWidth="1.2"/><circle cx="123.5" cy="137.5" r="1.4" fill="#ffffff" stroke="none"/>
        <path d="M96 155 L94 185 Q97 194 113 191 L118 156" fill="#fffefc" />
        <g className="cat-wave-paw"><path d="M140 156 L143 185 Q146 192 163 188" fill="#fffefc"/><path d="M150 184 L150 189 M157 184 L157 189" stroke="#d3cec5" strokeWidth="1.5"/></g>
        <path d="M101 185 L101 190 M108 185 L108 191" stroke="#d3cec5" strokeWidth="1.5" />
      </g>
      <g fill="#a58f80"><path d="M40 48 l2 -6 2 6 6 2 -6 2 -2 6 -2 -6 -6 -2Z"/><circle cx="197" cy="65" r="2.5"/></g>
    </svg>
    </button>
    <p className="cat-caption" aria-live="polite"><span className="cat-caption-dot"/> {happy ? reaction.text : 'Pet me for a little hello'}</p>
  </div>;
}
