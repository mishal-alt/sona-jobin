import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import * as __m69872 from './m69872.js'
import * as __m74870 from './m74870.js'
import * as __m93874 from './m93874.js'
import ZtCredit from '../Credit.jsx'
import * as __m92914 from './m92914.js'
;('use strict')
var t = __m43476,
  i = __m71645,
  n = __m69872,
  o = __m74870,
  a = __m93874,
  r = __m92914
let s = '#B88A3B',
  l = '#8A6420',
  c = '#CFA060',
  d = '#4a3728',
  p = '#6e5244',
  m = '#9aaa8e',
  x = '#faf8f2'
function f(e) {
  return String(e).padStart(2, '0')
}
function h(e) {
  return `${e.getUTCFullYear()}${f(e.getUTCMonth() + 1)}${f(e.getUTCDate())}T${f(e.getUTCHours())}${f(e.getUTCMinutes())}${f(e.getUTCSeconds())}Z`
}
function g(e) {
  let t = new Date(e.startISO),
    i = new Date(e.endISO ? e.endISO : t.getTime() + 72e5)
  return { s: t, en: i }
}
function y({ event: e, fileName: o }) {
  let [a, r] = (0, i.useState)(!1),
    c = (0, i.useRef)(null)
  ;(0, i.useEffect)(() => {
    if (!a) return
    let e = (e) => {
      c.current && !c.current.contains(e.target) && r(!1)
    }
    return (document.addEventListener('mousedown', e), () => document.removeEventListener('mousedown', e))
  }, [a])
  let p = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '6px 16px',
      borderRadius: 100,
      cursor: 'pointer',
      border: `1px solid ${s}50`,
      background: 'rgba(250,248,242,0.65)',
      color: l,
      fontFamily: v,
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
    m = {
      display: 'block',
      padding: '9px 14px',
      whiteSpace: 'nowrap',
      fontFamily: v,
      fontSize: 8,
      fontWeight: 700,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: d,
      textDecoration: 'none',
    }
  return (0, t.jsxs)('div', {
    ref: c,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      (0, t.jsx)('button', {
        type: 'button',
        onClick: () => r((e) => !e),
        style: p,
        children: '⊞ Add to Calendar',
      }),
      a &&
        (0, t.jsxs)('div', {
          style: {
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: x,
            border: `1px solid ${s}45`,
            borderRadius: 10,
            boxShadow: '0 8px 28px rgba(74,55,40,.20)',
            overflow: 'hidden',
            zIndex: 20,
            minWidth: 178,
          },
          children: [
            (0, t.jsx)('a', {
              href: (function (e) {
                let { s: t, en: i } = g(e),
                  n = new URLSearchParams({
                    action: 'TEMPLATE',
                    text: e.title,
                    dates: `${h(t)}/${h(i)}`,
                    details: e.details,
                    location: e.location,
                  })
                return `https://www.google.com/calendar/render?${n.toString()}`
              })(e),
              target: '_blank',
              rel: 'noopener noreferrer',
              onClick: () => r(!1),
              style: { ...m, borderBottom: `1px solid ${s}28` },
              children: 'Google Calendar',
            }),
            (0, t.jsx)('a', {
              href: (function (e, t) {
                let { s: i, en: o } = g(e)
                return (0, n.icsUrl)(
                  { title: e.title, start: i, end: o, location: e.location, details: e.details, uid: e.uid },
                  t.replace(/\.ics$/i, ''),
                )
              })(e, o),
              onClick: () => r(!1),
              style: m,
              children: 'Apple / Outlook',
            }),
          ],
        }),
    ],
  })
}
let u = "'Cinzel','Noto Serif',Georgia,serif",
  v = "'Raleway',sans-serif",
  w = "'EB Garamond','Noto Serif',Georgia,serif",
  j = "'Pinyon Script',cursive",
  b = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Raleway:wght@300;400;600;700&family=Pinyon+Script&display=swap');
@keyframes fae-settle{
  0%  {transform:translateX(-50%) translateY(14px) scale(.965);opacity:0}
  100%{transform:translateX(-50%) translateY(0) scale(1);opacity:1}
}
@keyframes fae-settle-c{
  0%  {transform:translateY(14px) scale(.965);opacity:0}
  100%{transform:translateY(0) scale(1);opacity:1}
}
@keyframes fae-rise{
  0%  {opacity:0;transform:translateY(9px)}
  100%{opacity:1;transform:translateY(0)}
}
@keyframes fae-seal-strike{
  0%  {opacity:0;transform:scale(1.5)}
  60% {opacity:1;transform:scale(.94)}
  100%{opacity:1;transform:scale(1)}
}
@keyframes fae-seal-breathe{
  0%,100%{transform:scale(1)}
  50%    {transform:scale(1.045)}
}
@keyframes fae-prompt{
  0%,100%{opacity:.52}
  50%    {opacity:.92}
}
@keyframes fae-prompt-s{
  0%,100%{opacity:.88;transform:translateY(0)}
  50%    {opacity:1;transform:translateY(2px)}
}
@keyframes fa-fall{
  0%  {transform:translate(0,-80px) rotate(0deg) scale(1);opacity:0}
  8%  {opacity:.78}
  85% {opacity:.55}
  100%{transform:translate(var(--dx,18px),108vh) rotate(var(--dr,300deg)) scale(.65);opacity:0}
}
@keyframes fa-bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(9px)}}
@keyframes fa-pulse2{0%,100%{opacity:.25}50%{opacity:.88}}
@keyframes fa-flip{from{opacity:.2;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fa-shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
@keyframes fa-ink{
  0%   {opacity:0;filter:blur(14px);letter-spacing:.18em}
  60%  {opacity:.85;filter:blur(2px)}
  100% {opacity:1;filter:blur(0);letter-spacing:inherit}
}
@keyframes fa-ink-sm{
  0%   {opacity:0;filter:blur(8px)}
  100% {opacity:1;filter:blur(0)}
}
@keyframes fa-unfurl{
  0%   {clip-path:inset(0 0 100% 0)}
  65%  {clip-path:inset(0 0 6% 0)}
  82%  {clip-path:inset(0 0 1.5% 0)}
  100% {clip-path:inset(0 0 0% 0)}
}
@keyframes fa-curl-edge{
  0%   {top:0%;opacity:.85}
  90%  {top:96%;opacity:.55}
  100% {top:100%;opacity:0}
}
@keyframes fa-bokeh{
  0%   {transform:translateY(20px) scale(0.7);opacity:0}
  12%  {opacity:1}
  80%  {opacity:.85}
  100% {transform:translateY(-85vh) scale(1.3);opacity:0}
}
@keyframes fa-wisp{
  0%   {transform:translateY(0) skewX(0deg);opacity:0}
  8%   {opacity:1}
  40%  {transform:translateY(-28vh) skewX(var(--ws,6deg))}
  75%  {opacity:.6}
  100% {transform:translateY(-75vh) skewX(var(--ws2,-4deg));opacity:0}
}
/* Each butterfly traces a smooth oval arc.
   10 evenly-spaced stops, each only a small step from the last,
   so CSS linear interpolation reads as a gentle curve — not a wave. */
@keyframes fa-bfly-0{
  0%  {transform:translate(  0vw,  0vh) rotate( 3deg)}
  10% {transform:translate(  5vw, -3vh) rotate( 7deg)}
  20% {transform:translate( 11vw, -5vh) rotate( 5deg)}
  30% {transform:translate( 16vw, -4vh) rotate( 2deg)}
  40% {transform:translate( 18vw,  1vh) rotate(-3deg)}
  50% {transform:translate( 15vw,  6vh) rotate(-7deg)}
  60% {transform:translate(  9vw,  8vh) rotate(-6deg)}
  70% {transform:translate(  2vw,  6vh) rotate(-2deg)}
  80% {transform:translate( -5vw,  2vh) rotate( 2deg)}
  90% {transform:translate( -3vw, -2vh) rotate( 3deg)}
  100%{transform:translate(  0vw,  0vh) rotate( 3deg)}
}
@keyframes fa-bfly-1{
  0%  {transform:translate(  0vw,  0vh) rotate(-3deg)}
  10% {transform:translate( -6vw,  3vh) rotate(-7deg)}
  20% {transform:translate(-13vw,  5vh) rotate(-5deg)}
  30% {transform:translate(-18vw,  3vh) rotate(-2deg)}
  40% {transform:translate(-20vw, -2vh) rotate( 3deg)}
  50% {transform:translate(-17vw, -7vh) rotate( 7deg)}
  60% {transform:translate(-10vw, -8vh) rotate( 6deg)}
  70% {transform:translate( -3vw, -6vh) rotate( 2deg)}
  80% {transform:translate(  3vw, -2vh) rotate(-2deg)}
  90% {transform:translate(  2vw,  1vh) rotate(-3deg)}
  100%{transform:translate(  0vw,  0vh) rotate(-3deg)}
}
@keyframes fa-bfly-2{
  0%  {transform:translate(  0vw,  0vh) rotate( 4deg)}
  10% {transform:translate(  4vw, -5vh) rotate( 8deg)}
  20% {transform:translate( 10vw, -9vh) rotate( 6deg)}
  30% {transform:translate( 15vw,-10vh) rotate( 2deg)}
  40% {transform:translate( 17vw, -7vh) rotate(-2deg)}
  50% {transform:translate( 14vw, -2vh) rotate(-6deg)}
  60% {transform:translate(  8vw,  3vh) rotate(-5deg)}
  70% {transform:translate(  2vw,  4vh) rotate(-2deg)}
  80% {transform:translate( -4vw,  2vh) rotate( 2deg)}
  90% {transform:translate( -2vw, -2vh) rotate( 3deg)}
  100%{transform:translate(  0vw,  0vh) rotate( 4deg)}
}
@keyframes fa-bfly-3{
  0%  {transform:translate(  0vw,  0vh) rotate(-4deg)}
  10% {transform:translate( -4vw, -4vh) rotate(-8deg)}
  20% {transform:translate(-10vw, -7vh) rotate(-5deg)}
  30% {transform:translate(-16vw, -6vh) rotate(-2deg)}
  40% {transform:translate(-19vw, -1vh) rotate( 3deg)}
  50% {transform:translate(-17vw,  5vh) rotate( 7deg)}
  60% {transform:translate(-11vw,  8vh) rotate( 5deg)}
  70% {transform:translate( -4vw,  7vh) rotate( 2deg)}
  80% {transform:translate(  2vw,  3vh) rotate(-2deg)}
  90% {transform:translate(  1vw,  0vh) rotate(-3deg)}
  100%{transform:translate(  0vw,  0vh) rotate(-4deg)}
}
@keyframes fa-bfly-wing{
  0%,100%{transform:scaleX(1)}
  50%    {transform:scaleX(.10)}
}
`,
  k = ['#FFFFFF', '#B8C9A0', '#FDF6E3', '#D4E0C4', '#F5EDD0']
function _({ fixed: e = !1 }) {
  let n = (0, i.useMemo)(
    () =>
      Array.from({ length: 24 }, (e, t) => ({
        id: t,
        left: ((67 * t + 11) % 95) + 2,
        dx: ((11 * t + 7) % 44) * (t % 2 == 0 ? 1 : -1),
        dr: (t % 2 == 0 ? 180 : -180) + ((23 * t) % 140),
        dur: 6.5 + (t % 6) * 0.7,
        del: (0.55 * t) % 10,
        w: 9 + (t % 4) * 3,
        col: t % 5,
      })),
    [],
  )
  return (0, t.jsx)('div', {
    'aria-hidden': !0,
    style: {
      position: e ? 'fixed' : 'absolute',
      inset: 0,
      zIndex: 2,
      pointerEvents: 'none',
      overflow: 'hidden',
    },
    children: n.map((e) => {
      let i = Math.round(1.6 * e.w)
      return (0, t.jsx)(
        'div',
        {
          style: {
            position: 'absolute',
            left: `${e.left}%`,
            top: 0,
            width: e.w,
            height: i,
            '--dx': `${e.dx}px`,
            '--dr': `${e.dr}deg`,
            animation: `fa-fall ${e.dur}s ease-in ${e.del}s infinite`,
            opacity: 0,
          },
          children: (0, t.jsxs)('svg', {
            width: e.w,
            height: i,
            viewBox: '0 0 20 32',
            fill: 'none',
            children: [
              (0, t.jsx)('path', {
                d: 'M 10 1 C 16 5, 18 13, 15 22 C 13 28, 10 32, 10 32 C 10 32, 7 28, 5 22 C 2 13, 4 5, 10 1 Z',
                fill: k[e.col],
                opacity: 0.95,
              }),
              (0, t.jsx)('path', {
                d: 'M 10 3 Q 10 15, 10 30',
                stroke: 'rgba(200,180,150,0.18)',
                strokeWidth: 0.6,
                fill: 'none',
              }),
            ],
          }),
        },
        e.id,
      )
    }),
  })
}
let S = '#FBE8BC',
  $ = '#F5D090',
  W = '#D4A050',
  z = '#A86820',
  F = [
    { left: 8, top: 18, kf: 'fa-bfly-0', dur: 26, del: 0 },
    { left: 74, top: 14, kf: 'fa-bfly-1', dur: 30, del: 5 },
    { left: 12, top: 64, kf: 'fa-bfly-2', dur: 23, del: 2.5 },
    { left: 70, top: 72, kf: 'fa-bfly-3', dur: 34, del: 8 },
  ]
function V({ fixed: e = !1 }) {
  let n = (0, i.useMemo)(
    () =>
      F.slice(0, 4).map((e, t) => ({
        id: t,
        left: e.left,
        top: e.top,
        kf: e.kf,
        dur: e.dur,
        del: e.del,
        wingDur: 0.42 + 0.06 * t,
        wingDel: 0.2 * t,
        scale: 0.4 + (t % 3) * 0.07,
        opacity: 0.92 + (t % 2) * 0.06,
      })),
    [],
  )
  return (0, t.jsx)('div', {
    'aria-hidden': !0,
    style: {
      position: e ? 'fixed' : 'absolute',
      inset: 0,
      zIndex: 4,
      pointerEvents: 'none',
      overflow: 'hidden',
    },
    children: n.map((e) => {
      let i = Math.round(40 * e.scale),
        n = Math.round(28 * e.scale),
        o = `fa-bfly-wing ${e.wingDur}s ease-in-out ${e.wingDel}s infinite`,
        a = `fa-bfly-wing ${e.wingDur}s ease-in-out ${(e.wingDel + 0.04).toFixed(2)}s infinite`
      return (0, t.jsx)(
        'div',
        {
          style: {
            position: 'absolute',
            left: `${e.left}%`,
            top: `${e.top}%`,
            opacity: e.opacity,
            animation: `${e.kf} ${e.dur}s ease-in-out ${e.del}s infinite`,
            willChange: 'transform',
            filter: `drop-shadow(0 1px 4px ${z}66)`,
          },
          children: (0, t.jsxs)('svg', {
            width: i,
            height: n,
            viewBox: '0 0 40 28',
            fill: 'none',
            children: [
              (0, t.jsxs)('g', {
                style: { transformBox: 'fill-box', transformOrigin: 'right center', animation: o },
                children: [
                  (0, t.jsx)('path', {
                    d: 'M20 13 C17 7, 9 2, 3 5 C-1 8, 2 14, 8 16 C13 18, 18 15, 20 13Z',
                    fill: S,
                    opacity: 0.92,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 15 C15 15, 6 18, 5 22 C4 25, 11 26, 16 23 C19 21, 20 18, 20 15Z',
                    fill: $,
                    opacity: 0.8,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 13 C15 9, 8 5, 5 8',
                    stroke: W,
                    strokeWidth: 0.5,
                    fill: 'none',
                    opacity: 0.45,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 15 C15 16, 9 19, 8 22',
                    stroke: W,
                    strokeWidth: 0.4,
                    fill: 'none',
                    opacity: 0.35,
                  }),
                ],
              }),
              (0, t.jsxs)('g', {
                style: { transformBox: 'fill-box', transformOrigin: 'left center', animation: a },
                children: [
                  (0, t.jsx)('path', {
                    d: 'M20 13 C23 7, 31 2, 37 5 C41 8, 38 14, 32 16 C27 18, 22 15, 20 13Z',
                    fill: S,
                    opacity: 0.92,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 15 C25 15, 34 18, 35 22 C36 25, 29 26, 24 23 C21 21, 20 18, 20 15Z',
                    fill: $,
                    opacity: 0.8,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 13 C25 9, 32 5, 35 8',
                    stroke: W,
                    strokeWidth: 0.5,
                    fill: 'none',
                    opacity: 0.45,
                  }),
                  (0, t.jsx)('path', {
                    d: 'M20 15 C25 16, 31 19, 32 22',
                    stroke: W,
                    strokeWidth: 0.4,
                    fill: 'none',
                    opacity: 0.35,
                  }),
                ],
              }),
              (0, t.jsx)('ellipse', { cx: 20, cy: 16, rx: 1.3, ry: 5.5, fill: z, opacity: 0.8 }),
              (0, t.jsx)('circle', { cx: 20, cy: 10, r: 1.5, fill: z, opacity: 0.75 }),
              (0, t.jsx)('path', {
                d: 'M19.3 9 C17.5 6, 15 3, 13 1',
                stroke: z,
                strokeWidth: 0.7,
                fill: 'none',
                opacity: 0.55,
              }),
              (0, t.jsx)('path', {
                d: 'M20.7 9 C22.5 6, 25 3, 27 1',
                stroke: z,
                strokeWidth: 0.7,
                fill: 'none',
                opacity: 0.55,
              }),
              (0, t.jsx)('circle', { cx: 13, cy: 1, r: 1.1, fill: z, opacity: 0.55 }),
              (0, t.jsx)('circle', { cx: 27, cy: 1, r: 1.1, fill: z, opacity: 0.55 }),
            ],
          }),
        },
        e.id,
      )
    }),
  })
}
function C(e = 0.1) {
  let t = (0, i.useRef)(null),
    [n, o] = (0, i.useState)(!1)
  return (
    (0, i.useEffect)(() => {
      let i = t.current
      if (!i) return
      let n = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (o(!0), n.disconnect())
        },
        { threshold: e },
      )
      return (n.observe(i), () => n.disconnect())
    }, [e]),
    { ref: t, inView: n }
  )
}
function T({ children: e, inView: i, delay: n = 0, dir: o = 'up', style: a, className: r }) {
  return (0, t.jsx)('div', {
    className: r,
    style: {
      opacity: +!!i,
      transform: i
        ? 'none'
        : { up: 'translateY(36px)', left: 'translateX(-36px)', right: 'translateX(36px)' }[o],
      transition: i ? `opacity .85s ease ${n}s, transform 1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      ...a,
    },
    children: e,
  })
}
function M({ children: e, inView: i, delay: n = 0, style: o }) {
  return (0, t.jsx)('div', {
    style: { overflow: 'hidden', ...o },
    children: (0, t.jsx)('div', {
      style: {
        transform: i ? 'translateY(0)' : 'translateY(110%)',
        transition: i ? `transform 1.1s cubic-bezier(.16,1,.3,1) ${n}s` : 'none',
      },
      children: e,
    }),
  })
}
let A = [6, -8, 4, -5, 9, -7, 3, -10, 7, -4, 8, -6]
function I({ urls: e, inView: n }) {
  let [o, a] = (0, i.useState)(null)
  ;((0, i.useEffect)(() => {
    if (null !== o)
      return (window.addEventListener('keydown', t), () => window.removeEventListener('keydown', t))
    function t(t) {
      ;('Escape' === t.key && a(null),
        'ArrowRight' === t.key && a((t) => (null !== t ? (t + 1) % e.length : null)),
        'ArrowLeft' === t.key && a((t) => (null !== t ? (t - 1 + e.length) % e.length : null)))
    }
  }, [o, e.length]),
    (0, i.useEffect)(
      () => (
        (document.body.style.overflow = null !== o ? 'hidden' : ''),
        () => {
          document.body.style.overflow = ''
        }
      ),
      [o],
    ))
  let r = () => a((t) => (null !== t ? (t - 1 + e.length) % e.length : null)),
    l = () => a((t) => (null !== t ? (t + 1) % e.length : null)),
    d = (0, i.useRef)({ x: 0, y: 0, dx: 0, active: !1 }),
    [p, m] = (0, i.useState)(0)
  return (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px 10px',
          padding: '8px 4px 20px',
        },
        children: e.map((e, i) => {
          let o = A[i % A.length],
            r = (0.1 * i).toFixed(2)
          return (0, t.jsx)(
            'div',
            {
              style: { display: 'flex', justifyContent: 'center', marginTop: 32 * (i % 2 == 1) },
              children: (0, t.jsxs)('div', {
                onClick: () => a(i),
                style: {
                  background: '#fdfbf6',
                  padding: '8px 8px 36px',
                  boxShadow: '0 10px 36px rgba(74,55,40,.22), 0 2px 8px rgba(74,55,40,.10)',
                  width: '100%',
                  maxWidth: 158,
                  cursor: 'zoom-in',
                  transform: n
                    ? `rotate(${o}deg) translateY(0) scale(1)`
                    : 'rotate(0deg) translateY(52px) scale(0.72)',
                  opacity: +!!n,
                  transition: n
                    ? `opacity .55s ease ${r}s, transform .85s cubic-bezier(.34,1.45,.64,1) ${r}s`
                    : 'none',
                  position: 'relative',
                },
                onMouseEnter: (e) => {
                  let t = e.currentTarget
                  ;((t.style.transform = `rotate(${0.3 * o}deg) translateY(-7px) scale(1.06)`),
                    (t.style.boxShadow = '0 20px 52px rgba(74,55,40,.30), 0 4px 14px rgba(74,55,40,.14)'),
                    (t.style.zIndex = '2'))
                },
                onMouseLeave: (e) => {
                  let t = e.currentTarget
                  ;((t.style.transform = `rotate(${o}deg) translateY(0) scale(1)`),
                    (t.style.boxShadow = '0 10px 36px rgba(74,55,40,.22), 0 2px 8px rgba(74,55,40,.10)'),
                    (t.style.zIndex = ''))
                },
                children: [
                  (0, t.jsx)('div', {
                    style: { aspectRatio: '3/4', overflow: 'hidden', background: '#ede8e0' },
                    children: (0, t.jsx)('img', {
                      src: e,
                      alt: `Memory ${i + 1}`,
                      style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
                    }),
                  }),
                  (0, t.jsx)('div', {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: 11,
                    },
                    children: (0, t.jsx)('div', { style: { width: 22, height: 1, background: `${s}50` } }),
                  }),
                ],
              }),
            },
            i,
          )
        }),
      }),
      null !== o &&
        (0, t.jsxs)('div', {
          onClick: () => a(null),
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(18,12,4,.93)',
            backdropFilter: 'blur(14px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: [
            (0, t.jsx)('button', {
              onClick: () => a(null),
              style: {
                position: 'absolute',
                top: 16,
                right: 18,
                background: 'none',
                border: 'none',
                color: x,
                fontSize: 26,
                cursor: 'pointer',
                opacity: 0.65,
                padding: 10,
                lineHeight: 1,
              },
              children: '✕',
            }),
            (0, t.jsxs)('div', {
              style: {
                position: 'absolute',
                top: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: v,
                fontSize: 8,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: c,
                opacity: 0.65,
              },
              children: [o + 1, ' / ', e.length],
            }),
            e.length > 1 &&
              (0, t.jsx)('button', {
                onClick: (e) => {
                  ;(e.stopPropagation(), r())
                },
                style: {
                  position: 'absolute',
                  left: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(184,138,59,.15)',
                  border: `1px solid ${s}35`,
                  borderRadius: 50,
                  width: 44,
                  height: 44,
                  cursor: 'pointer',
                  color: c,
                  fontSize: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: '‹',
              }),
            (0, t.jsxs)('div', {
              onClick: (e) => e.stopPropagation(),
              onTouchStart: (e) => {
                let t = e.touches[0]
                d.current = { x: t.clientX, y: t.clientY, dx: 0, active: !0 }
              },
              onTouchMove: (e) => {
                if (!d.current.active) return
                let t = e.touches[0],
                  i = t.clientX - d.current.x
                Math.abs(i) > Math.abs(t.clientY - d.current.y) && ((d.current.dx = i), m(i))
              },
              onTouchEnd: () => {
                if (!d.current.active) return
                let t = d.current.dx
                ;((d.current.active = !1),
                  (d.current.dx = 0),
                  m(0),
                  e.length > 1 && Math.abs(t) > 45 && (t < 0 ? l() : r()))
              },
              style: {
                background: '#fdfbf6',
                padding: '12px 12px 52px',
                boxShadow: '0 32px 100px rgba(0,0,0,.7)',
                maxWidth: 'min(84vw, 400px)',
                width: '100%',
                transform: `translateX(${p}px) rotate(${(0.015 * p).toFixed(2)}deg)`,
                opacity: 0 !== p ? Math.max(0.55, 1 - Math.abs(p) / 380) : 1,
                transition: 0 === p ? 'transform .3s cubic-bezier(.2,.7,.2,1), opacity .3s ease' : 'none',
                touchAction: 'pan-y',
                willChange: 'transform',
              },
              children: [
                (0, t.jsx)(
                  'img',
                  {
                    src: e[o],
                    alt: `Memory ${o + 1}`,
                    style: { width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' },
                  },
                  o,
                ),
                (0, t.jsx)('div', {
                  style: { display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 14 },
                  children: (0, t.jsx)('div', { style: { width: 28, height: 1, background: `${s}55` } }),
                }),
              ],
            }),
            e.length > 1 &&
              (0, t.jsx)('button', {
                onClick: (e) => {
                  ;(e.stopPropagation(), l())
                },
                style: {
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(184,138,59,.15)',
                  border: `1px solid ${s}35`,
                  borderRadius: 50,
                  width: 44,
                  height: 44,
                  cursor: 'pointer',
                  color: c,
                  fontSize: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: '›',
              }),
            e.length <= 14 &&
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  bottom: 18,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 6,
                },
                children: e.map((e, i) =>
                  (0, t.jsx)(
                    'div',
                    {
                      onClick: (e) => {
                        ;(e.stopPropagation(), a(i))
                      },
                      style: {
                        width: i === o ? 18 : 6,
                        height: 6,
                        borderRadius: 3,
                        background: i === o ? s : `${s}40`,
                        transition: 'width .25s ease',
                        cursor: 'pointer',
                      },
                    },
                    i,
                  ),
                ),
              }),
          ],
        }),
    ],
  })
}
function L({ inView: e, style: i }) {
  return (0, t.jsxs)('div', {
    style: { display: 'flex', alignItems: 'center', gap: 14, ...i },
    children: [
      (0, t.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${s}45)`,
          transformOrigin: 'right',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
      (0, t.jsxs)('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 22 22',
        style: {
          opacity: +!!e,
          transform: e ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-45deg)',
          transition: e ? 'opacity .5s ease .4s, transform .7s cubic-bezier(.34,1.56,.64,1) .4s' : 'none',
        },
        children: [
          (0, t.jsx)('circle', { cx: 11, cy: 11, r: 4.5, fill: m, opacity: 0.2 }),
          (0, t.jsx)('path', { d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z', fill: m, opacity: 0.6 }),
          (0, t.jsx)('path', { d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z', fill: m, opacity: 0.6 }),
          (0, t.jsx)('path', { d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z', fill: m, opacity: 0.6 }),
          (0, t.jsx)('path', { d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z', fill: m, opacity: 0.6 }),
          (0, t.jsx)('circle', { cx: 11, cy: 11, r: 2.2, fill: s, opacity: 0.85 }),
        ],
      }),
      (0, t.jsx)('div', {
        style: {
          flex: 1,
          height: 1,
          background: `linear-gradient(90deg, ${s}45, transparent)`,
          transformOrigin: 'left',
          transform: e ? 'scaleX(1)' : 'scaleX(0)',
          transition: e ? 'transform .9s ease .08s' : 'none',
        },
      }),
    ],
  })
}
function H({ targetDate: e, inView: n }) {
  let o = (function (e) {
      let [t, n] = (0, i.useState)({ d: 0, h: 0, m: 0, s: 0 })
      return (
        (0, i.useEffect)(() => {
          let t = () => {
            let t = new Date(e).getTime() - Date.now()
            t <= 0 ||
              n({
                d: Math.floor(t / 864e5),
                h: Math.floor((t % 864e5) / 36e5),
                m: Math.floor((t % 36e5) / 6e4),
                s: Math.floor((t % 6e4) / 1e3),
              })
          }
          t()
          let i = setInterval(t, 1e3)
          return () => clearInterval(i)
        }, [e]),
        t
      )
    })(e),
    [a, r] = (0, i.useState)({ d: 0, h: 0, m: 0, s: 0 }),
    l = (0, i.useRef)('idle')
  ;((0, i.useEffect)(() => {
    if (!n || 'idle' !== l.current) return
    l.current = 'roll'
    let e = { ...o },
      t = Date.now()
    requestAnimationFrame(function i() {
      let n = Math.min((Date.now() - t) / 1200, 1),
        o = 1 - (1 - n) ** 3
      ;(r({ d: Math.round(o * e.d), h: Math.round(o * e.h), m: Math.round(o * e.m), s: Math.round(o * e.s) }),
        n < 1 ? requestAnimationFrame(i) : (l.current = 'live'))
    })
  }, [n]),
    (0, i.useEffect)(() => {
      'live' === l.current && r(o)
    }, [o]))
  let c = [
    ['Days', a.d],
    ['Hrs', a.h],
    ['Min', a.m],
    ['Sec', a.s],
  ]
  return (0, t.jsx)('div', {
    style: { display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' },
    children: c.map(([e, i], o) =>
      (0, t.jsxs)(
        'div',
        {
          style: {
            background: 'rgba(184,138,59,0.10)',
            border: '1px solid rgba(184,138,59,0.24)',
            borderRadius: 14,
            padding: '14px 8px',
            textAlign: 'center',
            minWidth: 68,
            flex: '1 1 68px',
            maxWidth: 90,
            opacity: +!!n,
            transform: n ? 'scale(1) translateY(0)' : 'scale(0.78) translateY(22px)',
            transition: n
              ? `opacity .6s ease ${(0.1 + 0.12 * o).toFixed(2)}s, transform .75s cubic-bezier(.34,1.56,.64,1) ${(0.1 + 0.12 * o).toFixed(2)}s`
              : 'none',
          },
          children: [
            (0, t.jsx)(
              'div',
              {
                style: {
                  fontFamily: u,
                  fontWeight: 600,
                  letterSpacing: '.02em',
                  fontSize: 'clamp(20px, 7vw, 34px)',
                  color: s,
                  lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  animation: 'live' === l.current ? 'fa-flip .3s ease' : void 0,
                },
                children: (0, t.jsx)('span', {
                  style: { display: 'block' },
                  children: String(i).padStart(2, '0'),
                }),
              },
              i,
            ),
            (0, t.jsx)('div', {
              style: {
                fontFamily: v,
                fontSize: 7.5,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: p,
                opacity: 0.7,
                marginTop: 5,
              },
              children: e,
            }),
          ],
        },
        e,
      ),
    ),
  })
}
function B({ wedding: e, onDone: n }) {
  let [o, a] = (0, i.useState)(!1),
    [c, m] = (0, i.useState)(!1),
    [f, h] = (0, i.useState)(!1),
    [g, y] = (0, i.useState)(!1),
    [k, _] = (0, i.useState)(!1),
    [S, $] = (0, i.useState)(!1),
    [W, z] = (0, i.useState)(!1),
    F = !!e.custom_config?.no_auto_advance,
    C = e.custom_config?.cover_text_offset_y ?? 0,
    T = e.custom_config?.hero_tagline?.trim() || '',
    M = e.custom_config?.cover_cta?.trim() || ''
  ;(0, i.useEffect)(() => {
    z(!0)
    let e = [
      setTimeout(() => a(!0), 200),
      setTimeout(() => m(!0), 2500),
      setTimeout(() => h(!0), 2800),
      setTimeout(() => y(!0), 3800),
      setTimeout(() => _(!0), 4600),
    ]
    return (
      F ||
        e.push(
          setTimeout(() => $(!0), 7e3),
          setTimeout(() => {
            ;(document.dispatchEvent(new CustomEvent('app:ready')), n())
          }, 7800),
        ),
      () => e.forEach(clearTimeout)
    )
  }, [n, F])
  let A = W
      ? new Date(e.event_date).toLocaleDateString('en-GB', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '',
    I = (0, r.getOccasionConfig)(e.custom_config?.occasion_type),
    L = e.custom_config?.ceremony_label?.trim() || I.label,
    H = e.custom_config?.hero_label?.trim() || L,
    D = e.custom_config?.swap_names ? e.groom_name : e.bride_name,
    E = e.custom_config?.swap_names ? e.bride_name : e.groom_name
  return (0, t.jsxs)('div', {
    onClick: function () {
      ;(document.dispatchEvent(new CustomEvent('app:ready')), $(!0), setTimeout(n, 700))
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      cursor: 'pointer',
      overflow: 'hidden',
      opacity: +!S,
      transition: S ? 'opacity .85s ease' : void 0,
      backgroundColor: x,
    },
    children: [
      (0, t.jsx)('style', { children: b }),
      (0, t.jsxs)('div', {
        style: {
          position: 'absolute',
          inset: 0,
          clipPath: o ? void 0 : 'inset(0 0 100% 0)',
          animation: o ? 'fa-unfurl 2.1s cubic-bezier(.22,1,.36,1) forwards' : 'none',
        },
        children: [
          (0, t.jsx)('img', {
            src: e.custom_config?.bg_url || '/images/floral-arch-bg.jpg',
            alt: '',
            fetchPriority: 'high',
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              inset: 0,
              background: 'rgba(250,248,242,0.08)',
              pointerEvents: 'none',
            },
          }),
        ],
      }),
      o &&
        (0, t.jsx)('div', {
          'aria-hidden': !0,
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            height: 36,
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(74,55,40,0.18), transparent)',
            animation: 'fa-curl-edge 2.1s cubic-bezier(.22,1,.36,1) forwards',
          },
        }),
      f && (0, t.jsx)(V, {}),
      [
        { top: 18, left: 18, rotate: 0 },
        { top: 18, right: 18, rotate: 90 },
        { bottom: 18, right: 18, rotate: 180 },
        { bottom: 18, left: 18, rotate: 270 },
      ].map(({ rotate: e, ...i }, n) =>
        (0, t.jsxs)(
          'svg',
          {
            'aria-hidden': !0,
            width: 28,
            height: 28,
            viewBox: '0 0 28 28',
            style: {
              position: 'absolute',
              ...i,
              transform: `rotate(${e}deg)`,
              opacity: 0.55 * !!c,
              transition: c ? `opacity .7s ease ${(0.08 * n).toFixed(2)}s` : 'none',
              pointerEvents: 'none',
            },
            children: [
              (0, t.jsx)('path', {
                d: 'M2 2 L2 12 M2 2 L12 2',
                stroke: s,
                strokeWidth: 1.2,
                fill: 'none',
                strokeLinecap: 'round',
              }),
              (0, t.jsx)('circle', { cx: 2, cy: 2, r: 2, fill: s, opacity: 0.8 }),
            ],
          },
          n,
        ),
      ),
      (0, t.jsxs)('div', {
        style: {
          position: 'absolute',
          top: 0 !== C ? `calc(22% + ${C}px)` : '22%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'min(68vw, 280px)',
          textAlign: 'center',
        },
        children: [
          !e.custom_config?.hide_occasion_label &&
            (0, t.jsx)('div', {
              style: {
                opacity: +!!c,
                transform: c ? 'translateY(0)' : 'translateY(-10px)',
                transition: c ? 'opacity .7s ease, transform .8s cubic-bezier(.16,1,.3,1)' : 'none',
                marginBottom: 10,
              },
              children: (0, t.jsx)('span', {
                style: {
                  fontFamily: v,
                  fontSize: 7,
                  fontWeight: 400,
                  letterSpacing: '.40em',
                  textTransform: 'uppercase',
                  color: p,
                  display: 'inline-block',
                  padding: '4px 12px',
                  border: `1px solid ${s}28`,
                  background: 'rgba(250,248,242,0.50)',
                },
                children: H,
              }),
            }),
          (0, t.jsx)('div', {
            style: {
              width: 36,
              height: 1,
              background: `${s}60`,
              marginBottom: 12,
              opacity: +!!c,
              transition: c ? 'opacity .7s ease .25s' : 'none',
            },
          }),
          (0, t.jsx)('h1', {
            style: {
              fontFamily: u,
              fontWeight: 600,
              letterSpacing: '.06em',
              fontSize: 'clamp(22px,5.5vw,32px)',
              color: d,
              lineHeight: 1.1,
              margin: 0,
              textAlign: 'center',
              opacity: +!!f,
              animation: f ? 'fa-ink 1.1s cubic-bezier(.4,0,.2,1) both' : 'none',
            },
            children: D,
          }),
          E &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)('div', {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    justifyContent: 'center',
                    margin: '5px 0 4px',
                    opacity: +!!f,
                    animation: f ? 'fa-ink-sm .8s ease .2s both' : 'none',
                  },
                  children: [
                    (0, t.jsx)('div', { style: { width: 22, height: 1, background: `${s}65` } }),
                    (0, t.jsx)('span', {
                      style: { fontFamily: j, fontSize: 38, color: s, lineHeight: 1 },
                      children: '&',
                    }),
                    (0, t.jsx)('div', { style: { width: 22, height: 1, background: `${s}65` } }),
                  ],
                }),
                (0, t.jsx)('h1', {
                  style: {
                    fontFamily: u,
                    fontWeight: 600,
                    letterSpacing: '.06em',
                    fontSize: 'clamp(22px,5.5vw,32px)',
                    color: d,
                    lineHeight: 1.1,
                    margin: 0,
                    textAlign: 'center',
                    opacity: +!!f,
                    animation: f ? 'fa-ink 1.1s cubic-bezier(.4,0,.2,1) .22s both' : 'none',
                  },
                  children: E,
                }),
              ],
            }),
          (0, t.jsx)('div', {
            style: {
              width: 36,
              height: 1,
              background: `${s}60`,
              marginTop: 12,
              marginBottom: 10,
              opacity: +!!g,
              transition: g ? 'opacity .8s ease .1s' : 'none',
            },
          }),
          T
            ? (0, t.jsx)('p', {
                style: {
                  fontFamily: w,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(11px,3.4vw,13px)',
                  color: d,
                  margin: 0,
                  lineHeight: 1.8,
                  opacity: 0.8 * !!g,
                  animation: g ? 'fa-ink-sm .9s ease .1s forwards' : 'none',
                },
                children: T,
              })
            : (0, t.jsx)('p', {
                style: {
                  fontFamily: v,
                  fontSize: 8,
                  fontWeight: 700,
                  letterSpacing: '.28em',
                  textTransform: 'uppercase',
                  color: d,
                  margin: 0,
                  opacity: 0.58 * !!g,
                  animation: g ? 'fa-ink-sm .9s ease .1s forwards' : 'none',
                },
                children: A,
              }),
          F
            ? (0, t.jsx)('div', {
                style: {
                  marginTop: 146,
                  padding: '11px 32px',
                  background: 'rgba(74,55,40,0.88)',
                  border: `1px solid ${s}`,
                  borderRadius: 100,
                  opacity: f && !S ? 1 : 0,
                  transition: f ? 'opacity 1s ease' : 'none',
                  animation: f && !S ? 'fa-pulse2 2.8s ease-in-out infinite' : 'none',
                },
                children: (0, t.jsx)('p', {
                  style: {
                    fontFamily: v,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '.32em',
                    textTransform: 'uppercase',
                    color: '#faf8f2',
                    margin: 0,
                    whiteSpace: 'nowrap',
                  },
                  children: M || 'Tap to Open',
                }),
              })
            : (0, t.jsx)('p', {
                style: {
                  fontFamily: v,
                  fontSize: 7.5,
                  fontWeight: 300,
                  letterSpacing: '.48em',
                  textTransform: 'uppercase',
                  color: l,
                  margin: '36px 0 0',
                  opacity: k && !S ? 0.7 : 0,
                  transition: k ? 'opacity 1s ease' : 'none',
                  animation: k && !S ? 'fa-pulse2 2.8s ease-in-out infinite' : 'none',
                },
                children: M || 'Open Invitation',
              }),
        ],
      }),
    ],
  })
}
let D = 941 / 1672
function E({ wedding: e, onDone: n, theme: o = {} }) {
  let a = o.flapClip ?? 'polygon(0% 0%, 100% 0%, 100% 30.1%, 50% 49.8%, 0% 30.1%)',
    l = o.pocketClip ?? 'polygon(0% 30.1%, 50% 49.8%, 100% 30.1%, 100% 100%, 0% 100%)',
    c = o.apexPct ?? 49.8,
    d = o.ink ?? '#ffffff',
    p = o.textShadow ?? '0 1px 10px rgba(28,34,16,.45)',
    m = o.rule ?? 'rgba(255,255,255,.45)',
    f = o.stage ?? 'radial-gradient(ellipse at 50% 42%, #5c6340 0%, #454c2e 55%, #2f3520 100%)',
    h = o.interior ?? '#3a4126',
    g = o.cardBorder ?? `${s}55`,
    y = o.prompt ?? '#ffffff',
    k = !!o.promptStrong,
    _ = 'contain' === o.fit,
    [S, $] = (0, i.useState)(!1),
    [W, z] = (0, i.useState)(!1),
    [F, V] = (0, i.useState)(!1),
    [C, T] = (0, i.useState)(!1),
    [M, A] = (0, i.useState)(!1),
    I = (0, i.useRef)(!1),
    L = e.custom_config || {},
    H = L.cover_envelope_image,
    B = L.envelope_card_image || L.bg_url || '/images/floral-arch-bg.jpg',
    Y = !!L.no_auto_advance,
    Z = (0, r.getOccasionConfig)(L.occasion_type),
    R = L.envelope_intro?.trim() || 'You are cordially invited',
    X = L.envelope_subtitle?.trim() || `${Z.label} Invitation`,
    P = L.swap_names ? e.groom_name : e.bride_name,
    O = L.swap_names ? e.bride_name : e.groom_name,
    U = L.cover_cta?.trim() || 'Tap to Open',
    N = !!L.envelope_hide_date,
    G = !!L.envelope_monogram,
    K = (e) => {
      let t = (e || '').trim().split(/\s+/)
      return (t.find((e) => !/^(dr|mr|mrs|ms|er|adv|prof|capt|engr)\.?$/i.test(e)) ?? t[0] ?? '')
        .charAt(0)
        .toUpperCase()
    },
    Q =
      L.envelope_initials
        ?.replace(/[^\p{L}]+/gu, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean) ?? [],
    q =
      Q.length >= 2
        ? [Q[0].charAt(0).toUpperCase(), Q[1].charAt(0).toUpperCase()]
        : Q[0]?.length >= 2
          ? [Q[0].charAt(0).toUpperCase(), Q[0].charAt(1).toUpperCase()]
          : [K(P), K(O)],
    J = !!L.envelope_mark_on_body,
    ee = !!L.envelope_seal,
    et = !!L.envelope_seal_fade,
    ei = !!L.envelope_date_under_mark,
    en = `${P} & ${O || ''}`.trim().length,
    eo =
      en > 26 ? 'clamp(21px,4.9svh,38px)' : en > 19 ? 'clamp(25px,6.1svh,48px)' : 'clamp(30px,7.6svh,60px)',
    ea = S
      ? new Date(e.event_date).toLocaleDateString('en-GB', {
          timeZone: 'Asia/Kolkata',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '',
    er = S
      ? new Date(e.event_date).toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: !0,
        })
      : '',
    es = i.default.useCallback(() => {
      I.current ||
        ((I.current = !0),
        T(!0),
        setTimeout(() => A(!0), ee ? 1340 : 1050),
        setTimeout(
          () => {
            ;(document.dispatchEvent(new CustomEvent('app:ready')), n())
          },
          ee ? 2090 : 1800,
        ))
    }, [n, ee])
  ;(0, i.useEffect)(() => {
    $(!0)
    let e = [setTimeout(() => z(!0), 700), setTimeout(() => V(!0), 3200)]
    return (Y || e.push(setTimeout(es, 6400)), () => e.forEach(clearTimeout))
  }, [es, Y])
  let el = _
      ? {
          position: 'absolute',
          inset: 0,
          margin: 'auto',
          width: `min(100vw, calc(100svh * ${D}))`,
          height: `min(100svh, calc(100vw / ${D}))`,
          perspective: 1400,
          transformStyle: 'preserve-3d',
          animation: 'fae-settle-c 1.1s cubic-bezier(.16,1,.3,1) both',
          filter: 'drop-shadow(0 18px 46px rgba(20,26,12,.55))',
        }
      : {
          position: 'absolute',
          top: 0,
          left: '50%',
          height: '100svh',
          width: `calc(100svh * ${D})`,
          transform: 'translateX(-50%)',
          perspective: 1400,
          transformStyle: 'preserve-3d',
          animation: 'fae-settle 1.1s cubic-bezier(.16,1,.3,1) both',
          filter: 'drop-shadow(0 18px 46px rgba(20,26,12,.55))',
        },
    ec = { position: 'absolute', inset: 0, backgroundImage: `url('${H}')`, backgroundSize: '100% 100%' },
    ed = (e) => ({
      opacity: +!!W,
      animation: W ? `fae-rise .9s cubic-bezier(.16,1,.3,1) ${e}s both` : 'none',
    }),
    ep = (e) =>
      G
        ? (0, t.jsxs)('div', {
            style: {
              ...ed(e),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(10px,2.1svh,18px)',
            },
            children: [
              (0, t.jsx)('span', {
                style: {
                  fontFamily: u,
                  fontWeight: 400,
                  fontSize: 'clamp(34px,8.4svh,66px)',
                  lineHeight: 1,
                  letterSpacing: '.04em',
                },
                children: q[0],
              }),
              O &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)('span', {
                      'aria-hidden': !0,
                      style: { width: 1, height: 'clamp(32px,7.6svh,60px)', background: m },
                    }),
                    (0, t.jsx)('span', {
                      style: {
                        fontFamily: u,
                        fontWeight: 400,
                        fontSize: 'clamp(34px,8.4svh,66px)',
                        lineHeight: 1,
                        letterSpacing: '.04em',
                      },
                      children: q[1],
                    }),
                  ],
                }),
            ],
          })
        : (0, t.jsxs)('p', {
            style: { ...ed(e), fontFamily: j, fontSize: eo, lineHeight: 1.14, margin: 0, fontWeight: 400 },
            children: [
              P,
              O &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)('span', {
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontSize: '.44em',
                        padding: '0 .14em',
                        verticalAlign: '.18em',
                        opacity: 0.88,
                      },
                      children: '&',
                    }),
                    O,
                  ],
                }),
            ],
          }),
    em = (e, i = '4.4% auto') =>
      (0, t.jsx)('div', { style: { ...ed(e), width: 46, height: 1, background: m, margin: i } }),
    ex = (e) => {
      let i = ei ? ea : X
      return i
        ? (0, t.jsx)('p', {
            style: {
              ...ed(e),
              fontFamily: v,
              fontSize: 'clamp(8px,1.3svh,11.5px)',
              fontWeight: 600,
              letterSpacing: '.30em',
              textTransform: 'uppercase',
              margin: 0,
              opacity: 0.88 * !!W,
            },
            children: i,
          })
        : null
    }
  return (0, t.jsxs)('div', {
    onClick: es,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      cursor: 'pointer',
      overflow: 'hidden',
      opacity: +!M,
      transition: M ? 'opacity .75s ease' : void 0,
      background: f,
    },
    children: [
      (0, t.jsx)('style', { children: b }),
      (0, t.jsxs)('div', {
        style: el,
        children: [
          (0, t.jsx)('div', { 'aria-hidden': !0, style: { position: 'absolute', inset: 0, background: h } }),
          (0, t.jsx)('div', {
            'aria-hidden': !0,
            style: {
              position: 'absolute',
              left: '11%',
              width: '78%',
              top: '35%',
              height: '55%',
              borderRadius: '3px 3px 2px 2px',
              background: x,
              padding: 5,
              boxShadow: '0 -6px 24px rgba(20,26,12,.34)',
              transform: C ? 'translateY(-67%)' : 'translateY(0)',
              transition: C ? `transform 1.15s cubic-bezier(.22,1,.36,1) ${ee ? '.46s' : '.18s'}` : 'none',
            },
            children: (0, t.jsx)('div', {
              style: {
                width: '100%',
                height: '100%',
                position: 'relative',
                backgroundImage: `url('${B}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                border: `1px solid ${g}`,
              },
              children:
                o.cardContent &&
                (0, t.jsx)('div', {
                  style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '8%',
                  },
                  children: o.cardContent,
                }),
            }),
          }),
          (0, t.jsx)('div', { 'aria-hidden': !0, style: { ...ec, clipPath: l } }),
          (0, t.jsx)('div', {
            style: {
              ...ec,
              clipPath: a,
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              transform: C ? 'rotateX(-168deg)' : 'rotateX(0deg)',
              transition: C ? `transform 1.05s cubic-bezier(.5,0,.35,1) ${ee ? '.3s' : '0s'}` : 'none',
            },
            children: (0, t.jsxs)('div', {
              style: {
                position: 'absolute',
                top: J ? '23%' : '10.5%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '78%',
                textAlign: 'center',
                color: d,
                textShadow: p,
                opacity: +!C,
                transition: C ? 'opacity .3s ease' : void 0,
              },
              children: [
                (0, t.jsx)('p', {
                  style: {
                    ...ed(0),
                    fontFamily: v,
                    fontSize: 'clamp(8px,1.35svh,12px)',
                    fontWeight: 400,
                    letterSpacing: '.34em',
                    textTransform: 'uppercase',
                    margin: 0,
                    opacity: 0.82 * !!W,
                  },
                  children: R,
                }),
                !J && (0, t.jsxs)(t.Fragment, { children: [em(0.12), ep(0.22), em(0.42), ex(0.52)] }),
              ],
            }),
          }),
          (J || !N) &&
            (0, t.jsxs)('div', {
              style: {
                position: 'absolute',
                top: J ? '62%' : '71%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '78%',
                textAlign: 'center',
                color: d,
                textShadow: p,
              },
              children: [
                J && (0, t.jsxs)(t.Fragment, { children: [ep(0.3), em(0.5), ex(0.6)] }),
                !N &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)('div', {
                        style: {
                          ...ed(0.66),
                          width: 30,
                          height: 1,
                          background: m,
                          margin: J ? '5.2% auto 3.2%' : '0 auto 3.2%',
                        },
                      }),
                      ea &&
                        (0, t.jsx)('p', {
                          style: {
                            ...ed(0.74),
                            fontFamily: v,
                            fontSize: 'clamp(9px,1.5svh,13px)',
                            fontWeight: 600,
                            letterSpacing: '.28em',
                            textTransform: 'uppercase',
                            margin: 0,
                            opacity: 0.88 * !!W,
                          },
                          children: ea,
                        }),
                      er &&
                        (0, t.jsx)('p', {
                          style: {
                            ...ed(0.84),
                            fontFamily: v,
                            fontSize: 'clamp(8px,1.3svh,11.5px)',
                            fontWeight: 400,
                            letterSpacing: '.24em',
                            textTransform: 'uppercase',
                            margin: '2.6% 0 0',
                            opacity: 0.74 * !!W,
                          },
                          children: er,
                        }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      ee &&
        (0, t.jsx)('div', {
          'aria-hidden': !0,
          style: {
            position: 'absolute',
            left: '50%',
            zIndex: 4,
            top: _ ? `calc(50% + ${(c - 50) / 100} * min(100svh, calc(100vw / ${D})))` : `${c}%`,
            transform: 'translate(-50%,-50%)',
            width: 'clamp(58px,11.4svh,92px)',
            height: 'clamp(58px,11.4svh,92px)',
            filter: 'drop-shadow(0 3px 7px rgba(24,30,14,.5))',
          },
          children: (0, t.jsxs)('div', {
            style: {
              position: 'absolute',
              inset: 0,
              animation: C
                ? 'none'
                : 'fae-seal-strike .72s cubic-bezier(.3,1.4,.5,1) .55s both, fae-seal-breathe 3.4s ease-in-out 1.4s infinite',
            },
            children: [
              [
                {
                  clip: 'polygon(0 0, 52% 0, 46% 22%, 55% 45%, 47% 68%, 53% 100%, 0 100%)',
                  to: 'translate(-16%,9%) rotate(-19deg)',
                },
                {
                  clip: 'polygon(52% 0, 100% 0, 100% 100%, 53% 100%, 47% 68%, 55% 45%, 46% 22%)',
                  to: 'translate(16%,11%) rotate(21deg)',
                },
              ].map((e, i) =>
                (0, t.jsx)(
                  'div',
                  {
                    style: {
                      position: 'absolute',
                      inset: 0,
                      clipPath: e.clip,
                      borderRadius: '48% 52% 51% 49% / 50% 47% 53% 50%',
                      background: 'radial-gradient(circle at 34% 28%, #c99a52 0%, #a3712c 46%, #7a4f16 100%)',
                      boxShadow: 'inset 0 1px 2px rgba(255,226,168,.55), inset 0 -2px 5px rgba(60,36,4,.55)',
                      transform: C ? (et ? 'scale(1.08)' : e.to) : 'none',
                      opacity: +!C,
                      transition: C
                        ? et
                          ? 'transform .75s ease-out, opacity .75s ease'
                          : 'transform .8s cubic-bezier(.3,0,.5,1), opacity .8s ease .18s'
                        : 'none',
                    },
                  },
                  i,
                ),
              ),
              (0, t.jsxs)('svg', {
                viewBox: '0 0 24 24',
                style: {
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: +!C,
                  transition: C ? (et ? 'opacity .6s ease' : 'opacity .22s ease') : 'none',
                },
                children: [
                  (0, t.jsx)('path', {
                    d: 'M12 17.6s-4.9-3.2-6.3-6.1c-1-2 .1-4.3 2.3-4.6 1.6-.2 2.9.8 4 2.2 1.1-1.4 2.4-2.4 4-2.2 2.2.3 3.3 2.6 2.3 4.6-1.4 2.9-6.3 6.1-6.3 6.1z',
                    fill: '#6d4510',
                    opacity: '.62',
                  }),
                  (0, t.jsx)('path', {
                    d: 'M12 16.9s-4.9-3.2-6.3-6.1c-1-2 .1-4.3 2.3-4.6 1.6-.2 2.9.8 4 2.2 1.1-1.4 2.4-2.4 4-2.2 2.2.3 3.3 2.6 2.3 4.6-1.4 2.9-6.3 6.1-6.3 6.1z',
                    fill: '#e0b878',
                    opacity: '.30',
                  }),
                ],
              }),
            ],
          }),
        }),
      k
        ? (0, t.jsxs)('div', {
            style: {
              position: 'absolute',
              bottom: '13%',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 7,
              opacity: F && !C ? 1 : 0,
              transition: 'opacity .8s ease',
              animation: F && !C ? 'fae-prompt-s 2.8s ease-in-out infinite' : 'none',
            },
            children: [
              (0, t.jsx)('span', {
                style: {
                  fontFamily: v,
                  fontSize: 'clamp(9.5px,2.6vw,11px)',
                  fontWeight: 700,
                  letterSpacing: '.26em',
                  paddingLeft: '.26em',
                  textTransform: 'uppercase',
                  color: y,
                  padding: '9px 20px 9px calc(20px + .26em)',
                  border: `1px solid ${y}55`,
                  borderRadius: 999,
                  background: 'rgba(255,252,248,.58)',
                  backdropFilter: 'blur(2px)',
                  boxShadow: '0 2px 10px rgba(60,40,30,.14)',
                },
                children: U,
              }),
              (0, t.jsx)('svg', {
                width: '16',
                height: '9',
                viewBox: '0 0 16 9',
                fill: 'none',
                'aria-hidden': !0,
                children: (0, t.jsx)('path', {
                  d: 'M1.4 1.4 L8 7 L14.6 1.4',
                  stroke: y,
                  strokeWidth: '1.6',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  opacity: '.8',
                }),
              }),
            ],
          })
        : (0, t.jsx)('p', {
            style: {
              position: 'absolute',
              bottom: '9%',
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily: v,
              fontSize: 8,
              fontWeight: 600,
              letterSpacing: '.42em',
              textTransform: 'uppercase',
              color: y,
              margin: 0,
              opacity: F && !C ? 0.7 : 0,
              transition: 'opacity .8s ease',
              animation: F && !C ? 'fae-prompt 2.8s ease-in-out infinite' : 'none',
            },
            children: U,
          }),
    ],
  })
}
function Y({ wedding: e, photos: c, isGuest: f, ready: h, skipHero: g = !1 }) {
  let k,
    S,
    [$, W] = (0, i.useState)(!1)
  ;(0, i.useEffect)(() => {
    W(!0)
  }, [])
  let z = (0, i.useRef)(null)
  ;(0, i.useEffect)(() => {
    if (!f || !h) return
    let e = !1,
      t = () => {
        ;((e = !0), i())
      },
      i = () => {
        ;(window.removeEventListener('wheel', t, { capture: !0 }),
          window.removeEventListener('touchmove', t, { capture: !0 }),
          window.removeEventListener('keydown', t, { capture: !0 }))
      }
    ;(window.addEventListener('wheel', t, { capture: !0, passive: !0 }),
      window.addEventListener('touchmove', t, { capture: !0, passive: !0 }),
      window.addEventListener('keydown', t, { capture: !0 }))
    let n = setTimeout(() => {
      if (e) return
      if (window.scrollY > 80) return void i()
      let t = z.current
      t && ((t.nextElementSibling ?? t).scrollIntoView({ behavior: 'smooth', block: 'start' }), i())
    }, 3e3)
    return () => {
      ;(clearTimeout(n), i())
    }
  }, [f, h])
  let F = (0, r.getOccasionConfig)(e.custom_config?.occasion_type),
    A = e.custom_config?.ceremony_label?.trim() || F.label,
    B = e.custom_config?.hero_label?.trim() || A,
    D = e.custom_config?.religious_header,
    E = e.custom_config?.religious_subtext,
    Z = e.custom_config?.religious_header_inline ? 0 : -43,
    R = new Date(e.event_date),
    X = R.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    P = R.toLocaleTimeString('en-GB', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: !0,
    }),
    O = e.custom_config?.welcome_note || F.welcomePresets[0] || '',
    U = e.custom_config?.welcome_label?.trim() || 'We Welcome You',
    N = e.custom_config?.venue_maps_url,
    G = c.map((e) => e.url),
    K = !!(e.venue_lat && e.venue_lng) || !!e.venue_name,
    Q = e.custom_config?.swap_names ? e.groom_name : e.bride_name,
    q = e.custom_config?.swap_names ? e.bride_name : e.groom_name,
    J = e.custom_config?.swap_names ? e.custom_config?.groom_parents : e.custom_config?.bride_parents,
    ee = e.custom_config?.swap_names ? e.custom_config?.bride_parents : e.custom_config?.groom_parents,
    et = e.custom_config?.swap_names ? e.custom_config?.groom_address : e.custom_config?.bride_address,
    ei = e.custom_config?.swap_names ? e.custom_config?.bride_address : e.custom_config?.groom_address,
    en =
      (e.custom_config?.swap_names ? e.custom_config?.groom_full_name : e.custom_config?.bride_full_name) ||
      Q,
    eo =
      (e.custom_config?.swap_names ? e.custom_config?.bride_full_name : e.custom_config?.groom_full_name) ||
      q,
    ea = e.custom_config?.time_subtitle?.trim() || '',
    er = e.custom_config?.time_label?.trim() || '',
    es = e.custom_config?.reception_note,
    el = !!e.custom_config?.reception_note_highlight,
    ec = e.custom_config?.bible_verse,
    ed = e.custom_config?.bible_ref,
    ep = e.custom_config?.verse_arabic,
    em = !!e.custom_config?.show_bismillah,
    ex = e.custom_config?.event1_label?.trim() || 'Engagement',
    ef = e.custom_config?.event1_date,
    eh = e.custom_config?.event1_venue || '',
    eg = e.custom_config?.event1_address || '',
    ey = e.custom_config?.event1_maps_url,
    eu = e.custom_config?.event1_note,
    ev = e.custom_config?.event1_note_label,
    ew = !!e.custom_config?.use_ring_icon,
    ej = !!e.custom_config?.event1_hide_time,
    eb = !!e.custom_config?.event1_hide_map,
    ek = ef
      ? new Date(ef).toLocaleDateString('en-GB', {
          timeZone: 'Asia/Kolkata',
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      : '',
    e_ = ef
      ? new Date(ef).toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: !0,
        })
      : '',
    eS = (e.custom_config?.countdown_to_main ? null : ef) || e.event_date,
    e$ = e.custom_config?.countdown_to_day_start
      ? ((k = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).formatToParts(new Date(eS))),
        (S = (e) => k.find((t) => t.type === e)?.value ?? ''),
        `${S('year')}-${S('month')}-${S('day')}T00:00:00+05:30`)
      : eS,
    eW = !!e.custom_config?.show_cross,
    ez = !!e.custom_config?.no_hero_backdrop,
    eF = !!e.custom_config?.hide_hero_date,
    eV = !!e.custom_config?.welcome_in_hero,
    eC = Math.min(2, Math.max(0.6, e.custom_config?.hero_text_scale ?? 1)),
    eT = (e) => Math.round(e * eC * 100) / 100,
    eM = Math.min(60, Math.max(2, e.custom_config?.hero_text_top ?? 20 - (eC - 1) * 9)),
    eA = Math.min(2, Math.max(0.6, e.custom_config?.hero_verse_scale ?? 1)),
    eI = (e) => Math.round(e * eC * eA * 100) / 100,
    eL = e.custom_config?.hero_text_offset_y ?? 0,
    eH = !!e.custom_config?.show_add_to_calendar,
    eB = e.custom_config?.event_end_date,
    eD = !!e.custom_config?.savedate_calendar,
    eE = !!e.custom_config?.footer_credit_bottom,
    eY = {
      title: `${A} — ${Q} & ${q}`,
      details: `Join us to celebrate the ${A} of ${Q} & ${q}.`,
      location: [e.venue_name, e.venue_address].filter(Boolean).join(', '),
      startISO: e.event_date,
      endISO: eB,
      uid: `${e.slug || e.id}-main@zetron.tech`,
    },
    eZ = !!e.custom_config?.split_ceremony_pages,
    eR = e.custom_config?.hero_tagline?.trim() || '',
    eX = e.custom_config?.verse_label?.trim() || '',
    eP = e.custom_config?.welcome_heading?.trim() || '',
    eO = e.custom_config?.countdown_label?.trim() || 'Counting Down',
    eU = e.custom_config?.countdown_subtitle?.trim() || '',
    eN = e.custom_config?.venue_label?.trim() || '',
    eG = e.custom_config?.venue_cta_label?.trim() || '',
    eK = e.custom_config?.closing_label?.trim() || '',
    eQ = e.custom_config?.closing_text?.trim() || '',
    eq = e.custom_config?.savedate_label?.trim() || '',
    eJ = e.custom_config?.savedate_note?.trim() || '',
    e0 = e.custom_config?.savedate_date?.trim() || '',
    e1 = e.custom_config?.savedate_footnote?.trim() || '',
    e2 = !!e.custom_config?.split_weekday,
    e5 = !!e.custom_config?.hide_ceremony_venue,
    e4 = !!e.custom_config?.ceremony_after_countdown,
    e8 = R.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata', weekday: 'long' }),
    e6 = R.toLocaleDateString('en-GB', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    e3 = ef && !eZ
  ;(C(0.08), C(0.08))
  let e7 = C(0.08),
    e9 = C(0.08),
    te = C(0.08),
    tt = C(0.06),
    ti = C(0.08),
    tn = C(0.06),
    to = C(0.08),
    ta = C(0.08),
    tr = C(0.08),
    ts = C(0.08),
    tl = C(0.08),
    tc = C(0.08),
    td = {
      fontFamily: v,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: l,
      display: 'block',
      textAlign: 'center',
      marginBottom: 16,
      whiteSpace: 'nowrap',
    },
    tp = { ...td, whiteSpace: 'normal', lineHeight: 1.7 },
    tm = (0, t.jsxs)('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      },
      children: [
        (0, t.jsx)('span', {
          style: {
            fontFamily: v,
            fontSize: 8,
            fontWeight: 400,
            letterSpacing: '.34em',
            textTransform: 'uppercase',
            color: p,
            display: 'inline-block',
            padding: '4px 14px',
            whiteSpace: 'nowrap',
            border: `1px solid ${s}28`,
            background: 'rgba(250,248,242,0.50)',
            opacity: +!!to.inView,
            transition: to.inView ? 'opacity .7s ease' : 'none',
          },
          children: ex,
        }),
        (0, t.jsx)('div', {
          style: {
            width: 30,
            height: 1,
            background: `${s}45`,
            margin: eZ ? '22px 0 20px' : '14px 0 12px',
            opacity: +!!to.inView,
            transition: to.inView ? 'opacity .6s ease .2s' : 'none',
          },
        }),
        eu &&
          (0, t.jsxs)(T, {
            inView: to.inView,
            delay: 0.08,
            children: [
              ev &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: u,
                    fontStyle: 'italic',
                    fontWeight: 600,
                    fontSize: 15,
                    color: l,
                    opacity: 0.92,
                    margin: '0 0 8px',
                    lineHeight: 1.4,
                  },
                  children: ev,
                }),
              (0, t.jsx)('p', {
                style: {
                  fontFamily: w,
                  fontStyle: 'italic',
                  fontWeight: 500,
                  fontSize: 13,
                  color: d,
                  opacity: 0.88,
                  margin: '0 0 22px',
                  lineHeight: 1.65,
                  textAlign: 'center',
                },
                children: eu,
              }),
            ],
          }),
        (0, t.jsx)('div', {
          style: {
            opacity: 0.82 * !!to.inView,
            transform: to.inView ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.88)',
            transition: to.inView
              ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.16,1,.3,1) .1s'
              : 'none',
            marginBottom: eZ ? 24 : 14,
          },
          children:
            eZ || ew
              ? (0, t.jsxs)('svg', {
                  width: '76',
                  height: '60',
                  viewBox: '0 0 94 74',
                  fill: 'none',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('circle', {
                      cx: '36',
                      cy: '45',
                      r: '23',
                      fill: `${s}0b`,
                      stroke: s,
                      strokeWidth: '1.4',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '36',
                      cy: '45',
                      r: '18.5',
                      fill: 'none',
                      stroke: `${s}55`,
                      strokeWidth: '0.7',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '58',
                      cy: '45',
                      r: '23',
                      fill: 'none',
                      stroke: s,
                      strokeWidth: '1.4',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '58',
                      cy: '45',
                      r: '18.5',
                      fill: 'none',
                      stroke: `${s}55`,
                      strokeWidth: '0.7',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M58 7 L63.5 15 L58 24 L52.5 15 Z',
                      fill: `${s}20`,
                      stroke: s,
                      strokeWidth: '1.1',
                      strokeLinejoin: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '52.5',
                      y1: '15',
                      x2: '63.5',
                      y2: '15',
                      stroke: `${s}99`,
                      strokeWidth: '0.6',
                    }),
                    (0, t.jsx)('line', {
                      x1: '58',
                      y1: '7',
                      x2: '58',
                      y2: '24',
                      stroke: `${s}66`,
                      strokeWidth: '0.5',
                    }),
                  ],
                })
              : (0, t.jsxs)('svg', {
                  width: '66',
                  height: '56',
                  viewBox: '0 0 82 70',
                  fill: 'none',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('rect', {
                      x: '7',
                      y: '28',
                      width: '68',
                      height: '38',
                      fill: `${s}0b`,
                      stroke: s,
                      strokeWidth: '1.2',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M2 28 L41 7 L80 28Z',
                      fill: `${s}16`,
                      stroke: s,
                      strokeWidth: '1.2',
                      strokeLinejoin: 'round',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M33 66 L33 51 Q41 45 49 51 L49 66Z',
                      fill: `${s}12`,
                      stroke: s,
                      strokeWidth: '1',
                    }),
                    (0, t.jsx)('rect', {
                      x: '29',
                      y: '62',
                      width: '24',
                      height: '4',
                      fill: 'none',
                      stroke: `${s}60`,
                      strokeWidth: '0.9',
                    }),
                    (0, t.jsx)('rect', {
                      x: '11',
                      y: '36',
                      width: '15',
                      height: '14',
                      fill: `${s}09`,
                      stroke: s,
                      strokeWidth: '0.95',
                    }),
                    (0, t.jsx)('line', {
                      x1: '18.5',
                      y1: '36',
                      x2: '18.5',
                      y2: '50',
                      stroke: `${s}88`,
                      strokeWidth: '0.65',
                    }),
                    (0, t.jsx)('line', {
                      x1: '11',
                      y1: '43',
                      x2: '26',
                      y2: '43',
                      stroke: `${s}88`,
                      strokeWidth: '0.65',
                    }),
                    (0, t.jsx)('rect', {
                      x: '56',
                      y: '36',
                      width: '15',
                      height: '14',
                      fill: `${s}09`,
                      stroke: s,
                      strokeWidth: '0.95',
                    }),
                    (0, t.jsx)('line', {
                      x1: '63.5',
                      y1: '36',
                      x2: '63.5',
                      y2: '50',
                      stroke: `${s}88`,
                      strokeWidth: '0.65',
                    }),
                    (0, t.jsx)('line', {
                      x1: '56',
                      y1: '43',
                      x2: '71',
                      y2: '43',
                      stroke: `${s}88`,
                      strokeWidth: '0.65',
                    }),
                    (0, t.jsx)('line', {
                      x1: '2',
                      y1: '68',
                      x2: '80',
                      y2: '68',
                      stroke: `${s}55`,
                      strokeWidth: '1.1',
                      strokeLinecap: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '41',
                      y1: '1',
                      x2: '41',
                      y2: '12',
                      stroke: s,
                      strokeWidth: '1.6',
                      strokeLinecap: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '36',
                      y1: '6',
                      x2: '46',
                      y2: '6',
                      stroke: s,
                      strokeWidth: '1.6',
                      strokeLinecap: 'round',
                    }),
                  ],
                }),
        }),
        (0, t.jsx)(M, {
          inView: to.inView,
          delay: 0.15,
          children: (0, t.jsx)('p', {
            style: {
              fontFamily: u,
              fontWeight: 600,
              letterSpacing: '.04em',
              fontSize: 'clamp(13px,3.6vw,18px)',
              lineHeight: 1.35,
              margin: 0,
              color: 'transparent',
              backgroundImage: `linear-gradient(90deg, ${d} 0%, ${l} 28%, ${s} 50%, ${l} 72%, ${d} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              animation: to.inView ? 'fa-shimmer 4.5s linear 0.8s infinite' : 'none',
            },
            children: ek,
          }),
        }),
        !eZ && (0, t.jsx)('div', { style: { width: 20, height: 1, background: `${s}30`, margin: '10px 0' } }),
        !ej &&
          (0, t.jsx)(M, {
            inView: to.inView,
            delay: 0.28,
            children: (0, t.jsx)('p', {
              style: {
                fontFamily: u,
                fontWeight: 400,
                letterSpacing: '.06em',
                fontSize: 'clamp(18px,5vw,26px)',
                color: s,
                margin: 0,
                lineHeight: 1,
              },
              children: e_,
            }),
          }),
        eZ
          ? (0, t.jsxs)('div', {
              style: { width: '48%', display: 'flex', alignItems: 'center', gap: 7, margin: '20px 0' },
              children: [
                (0, t.jsx)('div', {
                  style: { flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${s}55)` },
                }),
                (0, t.jsxs)('svg', {
                  width: 12,
                  height: 12,
                  viewBox: '0 0 22 22',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('path', {
                      d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('circle', { cx: 11, cy: 11, r: 2, fill: s, opacity: 0.9 }),
                  ],
                }),
                (0, t.jsx)('div', {
                  style: { flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${s}55)` },
                }),
              ],
            })
          : (0, t.jsx)('div', { style: { width: 20, height: 1, background: `${s}30`, margin: '10px 0' } }),
        eh &&
          (0, t.jsxs)(T, {
            inView: to.inView,
            delay: 0.4,
            children: [
              eZ &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: v,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '.32em',
                    textTransform: 'uppercase',
                    color: p,
                    opacity: 0.6,
                    margin: '0 0 10px',
                  },
                  children: 'Venue',
                }),
              (0, t.jsx)('p', {
                style: {
                  fontFamily: u,
                  fontWeight: 600,
                  letterSpacing: '.02em',
                  fontSize: 'clamp(12px,3.2vw,15px)',
                  color: d,
                  margin: 0,
                  lineHeight: 1.5,
                },
                children: eh,
              }),
              eg &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: v,
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: p,
                    opacity: 0.58,
                    margin: '6px 0 0',
                    lineHeight: 1.6,
                  },
                  children: eg,
                }),
            ],
          }),
        ey &&
          (0, t.jsx)(T, {
            inView: to.inView,
            delay: 0.52,
            children: (0, t.jsx)('a', {
              href: ey,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                marginTop: 14,
                padding: '6px 16px',
                borderRadius: 100,
                border: `1px solid ${s}50`,
                background: 'rgba(250,248,242,0.65)',
                color: l,
                fontFamily: v,
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              },
              children: '↗ Directions',
            }),
          }),
      ],
    }),
    tx = (0, t.jsxs)('div', {
      style: {
        width: '60%',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        opacity: +!!to.inView,
        transition: to.inView ? 'opacity .9s ease .4s' : 'none',
      },
      children: [
        (0, t.jsx)('div', {
          style: { flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${s}50)` },
        }),
        (0, t.jsx)('div', {
          style: { width: 5, height: 5, borderRadius: '50%', background: s, opacity: 0.6 },
        }),
        (0, t.jsx)('div', {
          style: { flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${s}50)` },
        }),
      ],
    }),
    tf = (0, t.jsxs)('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
      },
      children: [
        (0, t.jsx)('span', {
          style: {
            fontFamily: v,
            fontSize: 8,
            fontWeight: 400,
            letterSpacing: '.34em',
            textTransform: 'uppercase',
            color: p,
            display: 'inline-block',
            padding: '4px 14px',
            whiteSpace: 'nowrap',
            border: `1px solid ${s}28`,
            background: 'rgba(250,248,242,0.50)',
            opacity: +!!to.inView,
            transition: to.inView ? 'opacity .7s ease' : 'none',
          },
          children: A,
        }),
        (0, t.jsx)('div', {
          style: {
            width: 30,
            height: 1,
            background: `${s}45`,
            margin: e3 ? '14px 0 12px' : '22px 0 20px',
            opacity: +!!to.inView,
            transition: to.inView ? 'opacity .6s ease .2s' : 'none',
          },
        }),
        (0, t.jsx)('div', {
          style: {
            opacity: 0.82 * !!to.inView,
            transform: to.inView ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.88)',
            transition: to.inView
              ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.16,1,.3,1) .1s'
              : 'none',
            marginBottom: e3 ? 14 : 24,
          },
          children:
            (e3 && !ew) || eW
              ? (0, t.jsxs)('svg', {
                  width: '53',
                  height: '75',
                  viewBox: '0 0 66 94',
                  fill: 'none',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('rect', {
                      x: '4',
                      y: '42',
                      width: '58',
                      height: '46',
                      fill: `${s}09`,
                      stroke: s,
                      strokeWidth: '1.2',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M2 42 L33 27 L64 42Z',
                      fill: `${s}14`,
                      stroke: s,
                      strokeWidth: '1.2',
                      strokeLinejoin: 'round',
                    }),
                    (0, t.jsx)('rect', {
                      x: '24',
                      y: '16',
                      width: '18',
                      height: '26',
                      fill: `${s}0e`,
                      stroke: s,
                      strokeWidth: '1.1',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M19 18 L33 8 L47 18Z',
                      fill: `${s}18`,
                      stroke: s,
                      strokeWidth: '1.1',
                      strokeLinejoin: 'round',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M29.5 24 L29.5 33 Q33 37 36.5 33 L36.5 24Z',
                      fill: `${s}14`,
                      stroke: `${s}99`,
                      strokeWidth: '0.8',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M26 88 L26 73 Q33 66 40 73 L40 88Z',
                      fill: `${s}12`,
                      stroke: s,
                      strokeWidth: '1.05',
                    }),
                    (0, t.jsx)('rect', {
                      x: '22',
                      y: '84',
                      width: '22',
                      height: '4',
                      fill: 'none',
                      stroke: `${s}60`,
                      strokeWidth: '0.9',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M8 53 L8 66 Q13.5 71 19 66 L19 53Z',
                      fill: `${s}09`,
                      stroke: s,
                      strokeWidth: '0.95',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M47 53 L47 66 Q52.5 71 58 66 L58 53Z',
                      fill: `${s}09`,
                      stroke: s,
                      strokeWidth: '0.95',
                    }),
                    (0, t.jsx)('line', {
                      x1: '2',
                      y1: '90',
                      x2: '64',
                      y2: '90',
                      stroke: `${s}55`,
                      strokeWidth: '1.1',
                      strokeLinecap: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '33',
                      y1: '1',
                      x2: '33',
                      y2: '13',
                      stroke: s,
                      strokeWidth: '1.6',
                      strokeLinecap: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '28',
                      y1: '6',
                      x2: '38',
                      y2: '6',
                      stroke: s,
                      strokeWidth: '1.6',
                      strokeLinecap: 'round',
                    }),
                  ],
                })
              : (0, t.jsxs)('svg', {
                  width: '76',
                  height: '60',
                  viewBox: '0 0 94 74',
                  fill: 'none',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('circle', {
                      cx: '36',
                      cy: '45',
                      r: '23',
                      fill: `${s}0b`,
                      stroke: s,
                      strokeWidth: '1.4',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '36',
                      cy: '45',
                      r: '18.5',
                      fill: 'none',
                      stroke: `${s}55`,
                      strokeWidth: '0.7',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '58',
                      cy: '45',
                      r: '23',
                      fill: 'none',
                      stroke: s,
                      strokeWidth: '1.4',
                    }),
                    (0, t.jsx)('circle', {
                      cx: '58',
                      cy: '45',
                      r: '18.5',
                      fill: 'none',
                      stroke: `${s}55`,
                      strokeWidth: '0.7',
                    }),
                    (0, t.jsx)('path', {
                      d: 'M58 7 L63.5 15 L58 24 L52.5 15 Z',
                      fill: `${s}20`,
                      stroke: s,
                      strokeWidth: '1.1',
                      strokeLinejoin: 'round',
                    }),
                    (0, t.jsx)('line', {
                      x1: '52.5',
                      y1: '15',
                      x2: '63.5',
                      y2: '15',
                      stroke: `${s}99`,
                      strokeWidth: '0.6',
                    }),
                    (0, t.jsx)('line', {
                      x1: '58',
                      y1: '7',
                      x2: '58',
                      y2: '24',
                      stroke: `${s}66`,
                      strokeWidth: '0.5',
                    }),
                  ],
                }),
        }),
        e2 &&
          (0, t.jsx)(M, {
            inView: to.inView,
            delay: 0.12,
            children: (0, t.jsx)('p', {
              style: {
                fontFamily: v,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.34em',
                textTransform: 'uppercase',
                color: p,
                opacity: 0.62,
                margin: '0 0 12px',
              },
              children: e8,
            }),
          }),
        (0, t.jsx)(M, {
          inView: to.inView,
          delay: 0.18,
          children: (0, t.jsx)('p', {
            style: {
              fontFamily: u,
              fontWeight: 600,
              letterSpacing: '.04em',
              fontSize: e2 ? 'clamp(16px,4.6vw,22px)' : 'clamp(13px,3.6vw,18px)',
              lineHeight: 1.35,
              margin: 0,
              color: 'transparent',
              backgroundImage: `linear-gradient(90deg, ${d} 0%, ${l} 28%, ${s} 50%, ${l} 72%, ${d} 100%)`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              animation: to.inView ? 'fa-shimmer 4.5s linear 0.8s infinite' : 'none',
            },
            children: e2 ? e6 : X,
          }),
        }),
        e3 && (0, t.jsx)('div', { style: { width: 20, height: 1, background: `${s}30`, margin: '10px 0' } }),
        (0, t.jsx)(M, {
          inView: to.inView,
          delay: 0.32,
          children: (0, t.jsx)('p', {
            style: {
              fontFamily: u,
              fontWeight: 400,
              letterSpacing: '.06em',
              fontSize: ea ? 'clamp(15px,4.2vw,21px)' : 'clamp(18px,5vw,26px)',
              color: s,
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            },
            children: ea || P,
          }),
        }),
        er &&
          (0, t.jsx)(M, {
            inView: to.inView,
            delay: 0.38,
            children: (0, t.jsx)('p', {
              style: {
                fontFamily: v,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.28em',
                textTransform: 'uppercase',
                color: p,
                opacity: 0.6,
                margin: '8px 0 0',
              },
              children: er,
            }),
          }),
        e3
          ? (0, t.jsx)('div', { style: { width: 20, height: 1, background: `${s}30`, margin: '10px 0' } })
          : (0, t.jsxs)('div', {
              style: { width: '48%', display: 'flex', alignItems: 'center', gap: 7, margin: '20px 0' },
              children: [
                (0, t.jsx)('div', {
                  style: { flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${s}55)` },
                }),
                (0, t.jsxs)('svg', {
                  width: 12,
                  height: 12,
                  viewBox: '0 0 22 22',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('path', {
                      d: 'M11 4 C13 7,14 9,11 11 C8 9,9 7,11 4Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M18 11 C15 13,13 14,11 11 C13 8,15 9,18 11Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M11 18 C9 15,8 13,11 11 C14 13,13 15,11 18Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('path', {
                      d: 'M4 11 C7 9,9 8,11 11 C9 14,7 13,4 11Z',
                      fill: m,
                      opacity: 0.65,
                    }),
                    (0, t.jsx)('circle', { cx: 11, cy: 11, r: 2, fill: s, opacity: 0.9 }),
                  ],
                }),
                (0, t.jsx)('div', {
                  style: { flex: 1, height: 1, background: `linear-gradient(to left, transparent, ${s}55)` },
                }),
              ],
            }),
        e.venue_name &&
          !e5 &&
          (0, t.jsxs)(T, {
            inView: to.inView,
            delay: 0.44,
            children: [
              !e3 &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: v,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '.32em',
                    textTransform: 'uppercase',
                    color: p,
                    opacity: 0.6,
                    margin: '0 0 10px',
                  },
                  children: 'Venue',
                }),
              (0, t.jsx)('p', {
                style: {
                  fontFamily: u,
                  fontWeight: 600,
                  letterSpacing: '.02em',
                  fontSize: 'clamp(12px,3.2vw,15px)',
                  color: d,
                  margin: 0,
                  lineHeight: 1.5,
                },
                children: e.venue_name,
              }),
              e.venue_address &&
                (0, t.jsx)('p', {
                  style: {
                    fontFamily: v,
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: p,
                    opacity: 0.58,
                    margin: '6px 0 0',
                    lineHeight: 1.6,
                  },
                  children: e.venue_address,
                }),
            ],
          }),
        N &&
          !e5 &&
          (0, t.jsx)(T, {
            inView: to.inView,
            delay: 0.57,
            children: (0, t.jsx)('a', {
              href: N,
              target: '_blank',
              rel: 'noopener noreferrer',
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                marginTop: 14,
                padding: '6px 16px',
                borderRadius: 100,
                border: `1px solid ${s}50`,
                background: 'rgba(250,248,242,0.65)',
                color: l,
                fontFamily: v,
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              },
              children: '↗ Directions',
            }),
          }),
        eH &&
          (0, t.jsx)(T, {
            inView: to.inView,
            delay: 0.6,
            children: (0, t.jsx)('div', {
              style: { marginTop: N ? 10 : 14 },
              children: (0, t.jsx)(y, { fileName: `${e.slug || 'invitation'}.ics`, event: eY }),
            }),
          }),
        es &&
          (0, t.jsx)(T, {
            inView: to.inView,
            delay: 0.62,
            children: el
              ? (0, t.jsx)('div', {
                  style: {
                    display: 'inline-block',
                    marginTop: 18,
                    padding: '12px 24px',
                    borderRadius: 14,
                    background: 'rgba(250,248,242,0.94)',
                    border: `1.5px solid ${s}`,
                    boxShadow: `0 4px 18px rgba(74,55,40,0.18), inset 0 0 0 3px rgba(250,248,242,0.94), inset 0 0 0 4px ${s}55`,
                  },
                  children: (0, t.jsx)('p', {
                    style: {
                      fontFamily: w,
                      fontStyle: 'italic',
                      fontWeight: 700,
                      fontSize: 13.5,
                      color: l,
                      margin: 0,
                      lineHeight: 1.5,
                      textAlign: 'center',
                      letterSpacing: '.01em',
                    },
                    children: es,
                  }),
                })
              : (0, t.jsx)('p', {
                  style: {
                    fontFamily: w,
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 13,
                    color: d,
                    opacity: 0.88,
                    margin: '14px 0 0',
                    lineHeight: 1.65,
                    textAlign: 'center',
                  },
                  children: es,
                }),
          }),
      ],
    }),
    th = (0, t.jsxs)(t.Fragment, {
      children: [
        (0, t.jsx)('img', {
          src: '/images/floral-arch-staircase.jpg',
          alt: '',
          'aria-hidden': !0,
          style: {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
            pointerEvents: 'none',
          },
        }),
        (0, t.jsx)(_, {}),
        (0, t.jsx)(V, {}),
      ],
    }),
    tg = (0, t.jsx)('div', {
      'aria-hidden': !0,
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        background: `linear-gradient(to bottom, transparent, ${x})`,
        pointerEvents: 'none',
      },
    }),
    ty = e.custom_config?.letter_watermark_image?.trim() || '',
    tu = Math.min(0.3, Math.max(0.02, e.custom_config?.letter_watermark_opacity ?? 0.07)),
    tv = ty
      ? (0, t.jsx)('div', {
          'aria-hidden': !0,
          style: { position: 'absolute', inset: 0, pointerEvents: 'none', clipPath: 'inset(0)' },
          children: (0, t.jsx)('div', {
            style: {
              position: 'fixed',
              inset: 0,
              backgroundImage: `url('${ty}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              opacity: tu,
            },
          }),
        })
      : (0, t.jsx)('div', {
          'aria-hidden': !0,
          style: {
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `url('${e.custom_config?.bg_url || '/images/floral-arch-bg.jpg'}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            opacity: 0.045,
          },
        }),
    tw =
      eX && ec
        ? (0, t.jsxs)('div', {
            ref: tl.ref,
            style: { textAlign: 'center', padding: '80px 0 0' },
            children: [
              (0, t.jsxs)(T, {
                inView: tl.inView,
                children: [
                  (0, t.jsx)(L, { inView: tl.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                  (0, t.jsx)('span', { style: tp, children: eX }),
                ],
              }),
              (0, t.jsx)('p', {
                'aria-hidden': !0,
                style: {
                  fontFamily: w,
                  fontStyle: 'italic',
                  fontSize: 100,
                  lineHeight: 0.5,
                  color: m,
                  opacity: 0.12 * !!tl.inView,
                  transform: tl.inView ? 'none' : 'scale(0.3) rotate(-18deg)',
                  transition: tl.inView
                    ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.34,1.56,.64,1) .1s'
                    : 'none',
                  margin: '18px 0 -14px',
                  userSelect: 'none',
                },
                children: '“',
              }),
              (0, t.jsx)(T, {
                inView: tl.inView,
                delay: 0.22,
                children: (0, t.jsxs)('p', {
                  style: {
                    fontFamily: w,
                    fontStyle: 'italic',
                    fontWeight: 500,
                    fontSize: 'clamp(17px,4.6vw,22px)',
                    color: d,
                    lineHeight: 1.95,
                    margin: '0 auto',
                    maxWidth: 460,
                  },
                  children: ['“', ec, '”'],
                }),
              }),
              ed &&
                (0, t.jsxs)(T, {
                  inView: tl.inView,
                  delay: 0.34,
                  children: [
                    (0, t.jsx)('div', {
                      style: { width: 26, height: 1, background: `${s}45`, margin: '20px auto 12px' },
                    }),
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: v,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '.26em',
                        textTransform: 'uppercase',
                        color: l,
                        opacity: 0.72,
                        margin: 0,
                      },
                      children: ed,
                    }),
                  ],
                }),
            ],
          })
        : null,
    tj = (0, t.jsxs)('div', {
      ref: e7.ref,
      style: { textAlign: 'center', padding: e4 ? '80px 0 96px' : '80px 0 72px' },
      children: [
        (0, t.jsxs)(T, {
          inView: e7.inView,
          children: [
            (0, t.jsx)(L, { inView: e7.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
            (0, t.jsx)('span', { style: tp, children: eO }),
            eU &&
              (0, t.jsx)('p', {
                style: {
                  fontFamily: w,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: 'clamp(14px,3.8vw,17px)',
                  color: d,
                  opacity: 0.74,
                  margin: '-4px 0 0',
                  lineHeight: 1.7,
                },
                children: eU,
              }),
          ],
        }),
        (0, t.jsx)('div', {
          style: { marginTop: 32 },
          children: (0, t.jsx)(H, { targetDate: e$, inView: e7.inView }),
        }),
      ],
    }),
    tb =
      O && !eV
        ? (0, t.jsxs)('div', {
            ref: e9.ref,
            style: { textAlign: 'center', padding: e4 ? '80px 0 0' : '0 0 80px' },
            children: [
              (0, t.jsxs)(T, {
                inView: e9.inView,
                children: [
                  (0, t.jsx)(L, { inView: e9.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                  (0, t.jsx)('span', { style: tp, children: U }),
                  eP &&
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: u,
                        fontWeight: 400,
                        letterSpacing: '.04em',
                        fontSize: 'clamp(18px,5vw,24px)',
                        color: d,
                        margin: '-2px 0 0',
                        lineHeight: 1.4,
                      },
                      children: eP,
                    }),
                ],
              }),
              (0, t.jsx)('p', {
                'aria-hidden': !0,
                style: {
                  fontFamily: w,
                  fontStyle: 'italic',
                  fontSize: 100,
                  lineHeight: 0.5,
                  color: m,
                  opacity: 0.12 * !!e9.inView,
                  transform: e9.inView ? 'none' : 'scale(0.3) rotate(-18deg)',
                  transition: e9.inView
                    ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.34,1.56,.64,1) .1s'
                    : 'none',
                  margin: '16px 0 -18px',
                  userSelect: 'none',
                },
                children: '“',
              }),
              (0, t.jsx)(T, {
                inView: e9.inView,
                delay: 0.25,
                children: O.split(/\n\n+/).map((e, i) =>
                  (0, t.jsx)(
                    'p',
                    {
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 'clamp(15px,4vw,18px)',
                        color: d,
                        lineHeight: 2.1,
                        margin: i > 0 ? '1.2em auto 0' : '0 auto',
                        maxWidth: 500,
                      },
                      children: e.trim(),
                    },
                    i,
                  ),
                ),
              }),
            ],
          })
        : null,
    tk = (0, t.jsx)(t.Fragment, {
      children:
        eZ && ef
          ? (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)('div', {
                  style: {
                    position: 'relative',
                    minHeight: '100svh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    backgroundColor: x,
                  },
                  children: [
                    th,
                    (0, t.jsx)('div', {
                      ref: to.ref,
                      style: {
                        position: 'relative',
                        zIndex: 3,
                        width: 'min(78vw, 320px)',
                        paddingTop: eu
                          ? 'clamp(48px, calc(8svh + 30px), 120px)'
                          : 'clamp(82px, calc(15svh + 50px), 180px)',
                      },
                      children: tm,
                    }),
                    tg,
                  ],
                }),
                (0, t.jsxs)('div', {
                  style: {
                    position: 'relative',
                    minHeight: '100svh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    overflow: 'hidden',
                    backgroundColor: x,
                  },
                  children: [
                    th,
                    (0, t.jsx)('div', {
                      style: {
                        position: 'relative',
                        zIndex: 3,
                        width: 'min(78vw, 320px)',
                        paddingTop: 'clamp(82px, calc(15svh + 50px), 180px)',
                      },
                      children: tf,
                    }),
                    tg,
                  ],
                }),
              ],
            })
          : (0, t.jsxs)('div', {
              style: {
                position: 'relative',
                minHeight: '100svh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: x,
              },
              children: [
                th,
                (0, t.jsxs)('div', {
                  ref: to.ref,
                  style: {
                    position: 'relative',
                    zIndex: 3,
                    width: 'min(78vw, 320px)',
                    minHeight: ef ? void 0 : '80svh',
                    paddingTop: ef ? 'clamp(40px, 8svh, 72px)' : 'clamp(50px, 8svh, 82px)',
                    paddingBottom: 'clamp(100px, 28svh, 200px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 28 * !!ef,
                    justifyContent: ef ? 'flex-start' : 'center',
                  },
                  children: [ef && (0, t.jsxs)(t.Fragment, { children: [tm, tx] }), tf],
                }),
                tg,
              ],
            }),
    })
  return (0, t.jsxs)('div', {
    children: [
      (0, t.jsx)('style', {
        children: `
        ${b}
        *{box-sizing:border-box}
        .fa-photos{display:flex;gap:14px;overflow-x:auto;padding:4px 0 16px;scroll-snap-type:x mandatory}
        .fa-photos::-webkit-scrollbar{height:3px}
        .fa-photos::-webkit-scrollbar-thumb{background:${s}35;border-radius:4px}
        @media(min-width:480px){.fa-wrap{padding:32px 18px 80px!important}:root{--fa-pad:38px}}
        @media(min-width:640px){.fa-wrap{padding:40px 28px 80px!important}:root{--fa-pad:46px}}
        @media(max-width:479px){:root{--fa-pad:26px}}
        .fa-card-hover{transition:transform .25s ease,box-shadow .25s ease}
        .fa-card-hover:hover{transform:translateY(-3px);box-shadow:0 12px 38px rgba(74,55,40,.20),0 2px 8px rgba(74,55,40,.08)}
      `,
      }),
      !g &&
        (0, t.jsxs)('div', {
          ref: z,
          style: {
            position: 'relative',
            width: '100%',
            height: '100svh',
            backgroundColor: x,
            overflow: 'hidden',
          },
          children: [
            (0, t.jsx)('img', {
              src: e.custom_config?.bg_url || '/images/floral-arch-bg.jpg',
              alt: '',
              loading: 'lazy',
              decoding: 'async',
              style: {
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              },
            }),
            (0, t.jsx)(_, {}),
            (0, t.jsx)(V, {}),
            (eW || 'cross' === D) &&
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  top: '5%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                },
                children: (0, t.jsxs)('svg', {
                  width: '28',
                  height: '38',
                  viewBox: '0 0 28 38',
                  fill: 'none',
                  'aria-hidden': !0,
                  children: [
                    (0, t.jsx)('rect', {
                      x: '12',
                      y: '0',
                      width: '4',
                      height: '38',
                      rx: '2',
                      fill: s,
                      opacity: '0.75',
                    }),
                    (0, t.jsx)('rect', {
                      x: '0',
                      y: '10',
                      width: '28',
                      height: '4',
                      rx: '2',
                      fill: s,
                      opacity: '0.75',
                    }),
                    (0, t.jsx)('circle', { cx: '14', cy: '12', r: '2.5', fill: s, opacity: '0.9' }),
                  ],
                }),
              }),
            (0, t.jsxs)('div', {
              style: {
                position: 'absolute',
                top: `calc(${eM.toFixed(2)}% + ${eL}px)`,
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                textAlign: 'center',
                width: `min(${Math.min(78, eT(68))}vw, ${eT(280)}px)`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ...(ez
                  ? {}
                  : {
                      background: 'rgba(250,248,242,0.55)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: 18,
                      padding: `clamp(${eT(14)}px,${eT(4)}vw,${eT(22)}px) clamp(${eT(10)}px,${eT(3)}vw,${eT(18)}px)`,
                    }),
              },
              children: [
                'bismillah' === D &&
                  (0, t.jsxs)('div', {
                    style: {
                      width: '100%',
                      textAlign: 'center',
                      marginBottom: 8,
                      position: 'relative',
                      top: Z,
                    },
                    children: [
                      (0, t.jsx)('p', {
                        dir: 'rtl',
                        lang: 'ar',
                        style: {
                          fontFamily: "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                          fontSize: 'clamp(13px,5.2vw,21px)',
                          fontWeight: 400,
                          color: l,
                          lineHeight: 1.7,
                          margin: 0,
                          letterSpacing: '.01em',
                        },
                        children: o.BISMILLAH_AR,
                      }),
                      E &&
                        (0, t.jsx)('p', {
                          style: {
                            fontFamily: w,
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 12,
                            color: d,
                            opacity: 0.7,
                            margin: '6px 0 0',
                            letterSpacing: '.01em',
                          },
                          children: E,
                        }),
                      (0, t.jsx)('div', {
                        style: { width: 22, height: 1, background: `${s}40`, margin: '8px auto 0' },
                      }),
                    ],
                  }),
                D &&
                  'bismillah' !== D &&
                  'cross' !== D &&
                  (0, t.jsxs)('div', {
                    style: {
                      width: '100%',
                      textAlign: 'center',
                      marginBottom: 8,
                      position: 'relative',
                      top: Z,
                    },
                    children: [
                      (0, t.jsx)(n.ReligiousHeader, {
                        type: D,
                        meaning: E,
                        accent: l,
                        color: d,
                        marginBottom: 0,
                        fontSize: 'clamp(24px,7vw,40px)',
                      }),
                      (0, t.jsx)('div', {
                        style: { width: 22, height: 1, background: `${s}40`, margin: '8px auto 0' },
                      }),
                    ],
                  }),
                ec &&
                  !eX &&
                  (0, t.jsxs)('div', {
                    style: { width: '100%', textAlign: 'center', marginBottom: 8, position: 'relative' },
                    children: [
                      (0, t.jsxs)('svg', {
                        width: '34',
                        height: '34',
                        viewBox: '0 0 34 34',
                        fill: 'none',
                        'aria-hidden': !0,
                        style: {
                          position: 'absolute',
                          top: -10,
                          right: -2,
                          opacity: 0.6,
                          pointerEvents: 'none',
                        },
                        children: [
                          (0, t.jsx)('path', {
                            d: 'M32 2 C24 6,16 10,6 20',
                            stroke: m,
                            strokeWidth: '1.1',
                            fill: 'none',
                            strokeLinecap: 'round',
                          }),
                          (0, t.jsx)('ellipse', {
                            cx: '26',
                            cy: '6',
                            rx: '4.5',
                            ry: '2.2',
                            fill: m,
                            opacity: '0.7',
                            transform: 'rotate(-35 26 6)',
                          }),
                          (0, t.jsx)('ellipse', {
                            cx: '19',
                            cy: '11',
                            rx: '4',
                            ry: '2',
                            fill: m,
                            opacity: '0.6',
                            transform: 'rotate(-40 19 11)',
                          }),
                          (0, t.jsx)('ellipse', {
                            cx: '12',
                            cy: '16',
                            rx: '3.5',
                            ry: '1.8',
                            fill: m,
                            opacity: '0.55',
                            transform: 'rotate(-45 12 16)',
                          }),
                          (0, t.jsx)('ellipse', {
                            cx: '7',
                            cy: '21',
                            rx: '3',
                            ry: '1.5',
                            fill: m,
                            opacity: '0.5',
                            transform: 'rotate(-50 7 21)',
                          }),
                        ],
                      }),
                      em &&
                        (0, t.jsx)('p', {
                          dir: 'rtl',
                          lang: 'ar',
                          style: {
                            fontFamily: "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                            fontSize: 'clamp(9px,5vw,15px)',
                            fontWeight: 400,
                            color: l,
                            lineHeight: 1.7,
                            margin: '0 0 6px',
                            letterSpacing: '.01em',
                          },
                          children: o.BISMILLAH_AR,
                        }),
                      ep &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)('p', {
                              'aria-hidden': !0,
                              style: {
                                position: 'absolute',
                                top: 12,
                                left: 2,
                                fontFamily: w,
                                fontStyle: 'italic',
                                fontSize: 38,
                                lineHeight: 0.5,
                                color: m,
                                opacity: 0.22,
                                margin: 0,
                                userSelect: 'none',
                              },
                              children: '“',
                            }),
                            (0, t.jsx)('p', {
                              dir: 'rtl',
                              lang: 'ar',
                              style: {
                                fontFamily: "'Amiri','Scheherazade New','Noto Naskh Arabic',serif",
                                fontSize: 'clamp(9px,5vw,15px)',
                                fontWeight: 400,
                                color: l,
                                lineHeight: 1.8,
                                margin: '0 0 8px',
                                letterSpacing: '.01em',
                              },
                              children: ep,
                            }),
                          ],
                        }),
                      (0, t.jsxs)('p', {
                        style: {
                          fontFamily: w,
                          fontStyle: 'italic',
                          fontWeight: 600,
                          fontSize: eI(13),
                          color: d,
                          opacity: 0.82,
                          margin: 0,
                          lineHeight: 1.85,
                        },
                        children: ['“', ec, '”'],
                      }),
                      ed &&
                        (0, t.jsxs)('p', {
                          style: {
                            fontFamily: v,
                            fontSize: eI(7),
                            letterSpacing: '.18em',
                            textTransform: 'uppercase',
                            color: l,
                            opacity: 0.65,
                            margin: `${eI(3)}px 0 0`,
                          },
                          children: ['— ', ed],
                        }),
                      (0, t.jsx)('div', {
                        style: {
                          width: eI(22),
                          height: 1,
                          background: `${s}40`,
                          margin: `${eI(8)}px auto 0`,
                        },
                      }),
                    ],
                  }),
                !D &&
                  (!e.custom_config?.hide_occasion_label || !f) &&
                  (0, t.jsx)('span', {
                    style: {
                      fontFamily: v,
                      fontSize: eT(7),
                      fontWeight: 400,
                      letterSpacing: '.40em',
                      textTransform: 'uppercase',
                      color: p,
                      display: 'inline-block',
                      padding: `${eT(4)}px ${eT(12)}px`,
                      border: `1px solid ${s}28`,
                      background: 'rgba(250,248,242,0.50)',
                      marginBottom: eT(16),
                    },
                    children: B,
                  }),
                (0, t.jsx)('h1', {
                  style: {
                    fontFamily: u,
                    fontWeight: 600,
                    letterSpacing: '.06em',
                    fontSize: `clamp(${eT(22)}px,${eT(5.5)}vw,${eT(32)}px)`,
                    color: d,
                    lineHeight: 1.15,
                    margin: 0,
                    wordBreak: 'keep-all',
                    overflowWrap: 'normal',
                  },
                  children: Q,
                }),
                J &&
                  (0, t.jsx)('p', {
                    style: {
                      fontFamily: w,
                      fontStyle: 'italic',
                      fontSize: eT(10),
                      color: d,
                      opacity: 0.72,
                      margin: `${eT(3)}px 0 0`,
                      lineHeight: 1.5,
                    },
                    children: J,
                  }),
                q &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsxs)('div', {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: eT(10),
                          justifyContent: 'center',
                          margin: `${eT(4)}px 0 ${eT(2)}px`,
                          width: '100%',
                        },
                        children: [
                          (0, t.jsx)('div', {
                            style: { flex: 1, height: 1, background: `${s}65`, maxWidth: eT(26) },
                          }),
                          (0, t.jsx)('span', {
                            style: { fontFamily: j, fontSize: eT(38), color: s, lineHeight: 1 },
                            children: '&',
                          }),
                          (0, t.jsx)('div', {
                            style: { flex: 1, height: 1, background: `${s}65`, maxWidth: eT(26) },
                          }),
                        ],
                      }),
                      (0, t.jsx)('h1', {
                        style: {
                          fontFamily: u,
                          fontWeight: 600,
                          letterSpacing: '.06em',
                          fontSize: `clamp(${eT(22)}px,${eT(5.5)}vw,${eT(32)}px)`,
                          color: d,
                          lineHeight: 1.15,
                          margin: 0,
                          wordBreak: 'keep-all',
                          overflowWrap: 'normal',
                        },
                        children: q,
                      }),
                      ee &&
                        (0, t.jsx)('p', {
                          style: {
                            fontFamily: w,
                            fontStyle: 'italic',
                            fontSize: eT(10),
                            color: d,
                            opacity: 0.72,
                            margin: `${eT(3)}px 0 0`,
                            lineHeight: 1.5,
                          },
                          children: ee,
                        }),
                    ],
                  }),
                (0, t.jsx)('div', {
                  style: {
                    width: eT(32),
                    height: 1,
                    background: `${s}55`,
                    margin: `${eT(8)}px auto ${eT(4)}px`,
                  },
                }),
                eR
                  ? (0, t.jsx)('p', {
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: `clamp(${eT(11)}px,${eT(3.4)}vw,${eT(13)}px)`,
                        color: d,
                        opacity: 0.8,
                        margin: 0,
                        lineHeight: 1.8,
                      },
                      children: eR,
                    })
                  : !eF &&
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: v,
                        fontSize: eT(8),
                        fontWeight: 700,
                        letterSpacing: '.22em',
                        textTransform: 'uppercase',
                        color: d,
                        opacity: 0.65,
                        margin: 0,
                      },
                      children: X,
                    }),
                eV &&
                  O &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)('div', {
                        style: {
                          width: eT(32),
                          height: 1,
                          background: `${s}55`,
                          margin: `${eT(8)}px auto ${eT(6)}px`,
                        },
                      }),
                      (0, t.jsx)('p', {
                        style: {
                          fontFamily: w,
                          fontStyle: 'italic',
                          fontWeight: 500,
                          fontSize: `clamp(${eT(10)}px,${eT(3)}vw,${eT(12)}px)`,
                          color: d,
                          opacity: 0.82,
                          margin: 0,
                          lineHeight: 1.75,
                        },
                        children: O,
                      }),
                    ],
                  }),
              ],
            }),
            (0, t.jsx)(n.ScrollHint, { color: `${s}99` }),
          ],
        }),
      !e4 && tk,
      e4 &&
        (0, t.jsxs)('div', {
          style: { position: 'relative', backgroundColor: x, overflow: 'hidden' },
          children: [
            tv,
            (0, t.jsx)(_, {}),
            (0, t.jsxs)('div', {
              style: {
                maxWidth: 600,
                margin: '0 auto',
                padding: '0 clamp(28px,8vw,72px)',
                position: 'relative',
                zIndex: 1,
              },
              children: [tw, tb, tj],
            }),
          ],
        }),
      e4 && tk,
      (0, t.jsxs)('div', {
        style: { position: 'relative', backgroundColor: x, overflow: 'hidden' },
        children: [
          tv,
          (0, t.jsx)(_, {}),
          (0, t.jsxs)('div', {
            style: {
              maxWidth: 600,
              margin: '0 auto',
              padding: `${e4 ? '76px' : '0'} clamp(28px,8vw,72px) ${eE ? 'calc(22px + env(safe-area-inset-bottom, 0px))' : '100px'}`,
              position: 'relative',
              zIndex: 1,
            },
            children: [
              !e4 && (0, t.jsxs)(t.Fragment, { children: [tw, tj, tb] }),
              (J || ee) &&
                e.custom_config?.show_families !== !1 &&
                (0, t.jsxs)('div', {
                  ref: ta.ref,
                  style: { textAlign: 'center', padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: ta.inView,
                      children: [
                        (0, t.jsx)(L, { inView: ta.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', { style: td, children: 'With the Blessings of Our Families' }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      style: { display: 'flex', flexDirection: 'column', gap: 24, marginTop: 32 },
                      children: [
                        Q &&
                          (0, t.jsxs)(T, {
                            inView: ta.inView,
                            delay: 0.1,
                            children: [
                              (0, t.jsx)('p', {
                                style: {
                                  fontFamily: u,
                                  fontWeight: 600,
                                  letterSpacing: '.04em',
                                  fontSize: 18,
                                  color: d,
                                  margin: '0 0 6px',
                                  lineHeight: 1.3,
                                  textTransform: 'uppercase',
                                },
                                children: en,
                              }),
                              J &&
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: w,
                                    fontStyle: 'italic',
                                    fontSize: 15,
                                    color: d,
                                    opacity: 0.85,
                                    margin: 0,
                                    lineHeight: 1.8,
                                  },
                                  children: J,
                                }),
                              et &&
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: w,
                                    fontStyle: 'italic',
                                    fontSize: 14,
                                    color: d,
                                    opacity: 0.75,
                                    margin: '4px 0 0',
                                    lineHeight: 1.7,
                                  },
                                  children: et,
                                }),
                            ],
                          }),
                        (0, t.jsx)(T, {
                          inView: ta.inView,
                          delay: 0.2,
                          children: (0, t.jsxs)('div', {
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              justifyContent: 'center',
                            },
                            children: [
                              (0, t.jsx)('div', {
                                style: { flex: 1, height: 1, background: `${s}30`, maxWidth: 60 },
                              }),
                              (0, t.jsx)('span', {
                                style: { fontFamily: j, fontSize: 28, color: s, lineHeight: 1 },
                                children: '&',
                              }),
                              (0, t.jsx)('div', {
                                style: { flex: 1, height: 1, background: `${s}30`, maxWidth: 60 },
                              }),
                            ],
                          }),
                        }),
                        q &&
                          (0, t.jsxs)(T, {
                            inView: ta.inView,
                            delay: 0.3,
                            children: [
                              (0, t.jsx)('p', {
                                style: {
                                  fontFamily: u,
                                  fontWeight: 600,
                                  letterSpacing: '.04em',
                                  fontSize: 18,
                                  color: d,
                                  margin: '0 0 6px',
                                  lineHeight: 1.3,
                                  textTransform: 'uppercase',
                                },
                                children: eo,
                              }),
                              ee &&
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: w,
                                    fontStyle: 'italic',
                                    fontSize: 15,
                                    color: d,
                                    opacity: 0.85,
                                    margin: 0,
                                    lineHeight: 1.8,
                                  },
                                  children: ee,
                                }),
                              ei &&
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: w,
                                    fontStyle: 'italic',
                                    fontSize: 14,
                                    color: d,
                                    opacity: 0.75,
                                    margin: '4px 0 0',
                                    lineHeight: 1.7,
                                  },
                                  children: ei,
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              e.story &&
                e.custom_config?.show_story !== !1 &&
                (0, t.jsxs)('div', {
                  ref: te.ref,
                  style: { padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: te.inView,
                      style: { textAlign: 'center' },
                      children: [
                        (0, t.jsx)(L, { inView: te.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', { style: td, children: 'Our Story' }),
                      ],
                    }),
                    (0, t.jsx)('p', {
                      'aria-hidden': !0,
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontSize: 100,
                        lineHeight: 0.6,
                        color: m,
                        opacity: 0.12 * !!te.inView,
                        transform: te.inView ? 'none' : 'scale(0.4) rotate(-14deg)',
                        transition: te.inView
                          ? 'opacity .8s ease .1s, transform .9s cubic-bezier(.34,1.56,.64,1) .1s'
                          : 'none',
                        margin: '16px 0 -14px -2px',
                        userSelect: 'none',
                        display: 'inline-block',
                      },
                      children: '“',
                    }),
                    (0, t.jsx)(T, {
                      inView: te.inView,
                      delay: 0.2,
                      children: (0, t.jsx)('p', {
                        style: {
                          fontFamily: w,
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: 17.5,
                          lineHeight: 2.1,
                          color: d,
                          margin: 0,
                        },
                        children: e.story,
                      }),
                    }),
                  ],
                }),
              G.length > 0 &&
                e.custom_config?.show_album !== !1 &&
                (0, t.jsxs)('div', {
                  ref: tt.ref,
                  style: { padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: tt.inView,
                      style: { textAlign: 'center' },
                      children: [
                        (0, t.jsx)(L, { inView: tt.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', {
                          style: { ...td, display: 'block', marginBottom: 28 },
                          children: 'Moments Together',
                        }),
                      ],
                    }),
                    (0, t.jsx)(I, { urls: G, inView: tt.inView }),
                  ],
                }),
              (K || (!!eh && !eb)) &&
                (0, t.jsxs)('div', {
                  ref: ti.ref,
                  style: { padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: ti.inView,
                      style: { textAlign: 'center' },
                      children: [
                        (0, t.jsx)(L, { inView: ti.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', { style: tp, children: eN || (eh && !eb ? 'Venues' : 'Find Us') }),
                      ],
                    }),
                    eh &&
                      !eb &&
                      (0, t.jsxs)('div', {
                        style: { marginBottom: 44 * !!K },
                        children: [
                          (0, t.jsxs)(T, {
                            inView: ti.inView,
                            delay: 0.08,
                            style: { textAlign: 'center', margin: '20px 0 16px' },
                            children: [
                              (0, t.jsx)('p', {
                                style: {
                                  fontFamily: v,
                                  fontSize: 7.5,
                                  letterSpacing: '.24em',
                                  textTransform: 'uppercase',
                                  color: l,
                                  opacity: 0.72,
                                  margin: '0 0 6px',
                                },
                                children: ex,
                              }),
                              (0, t.jsx)('p', {
                                style: {
                                  fontFamily: u,
                                  fontWeight: 400,
                                  letterSpacing: '.04em',
                                  fontSize: 'clamp(16px,4.5vw,22px)',
                                  color: d,
                                  margin: '0 0 4px',
                                  lineHeight: 1.3,
                                },
                                children: eh,
                              }),
                              eg &&
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: v,
                                    fontSize: 9,
                                    letterSpacing: '.18em',
                                    textTransform: 'uppercase',
                                    color: p,
                                    opacity: 0.55,
                                    margin: 0,
                                  },
                                  children: eg,
                                }),
                            ],
                          }),
                          (0, t.jsx)(T, {
                            inView: ti.inView,
                            delay: 0.22,
                            children: (0, t.jsx)('div', {
                              style: { border: `1px solid ${s}22`, borderRadius: 12, overflow: 'hidden' },
                              children: (0, t.jsx)(n.MapBlock, {
                                venueName: eh,
                                venueAddress: eg,
                                accent: s,
                                mapsDirectUrl: ey ?? null,
                                ctaLabel: eG || void 0,
                              }),
                            }),
                          }),
                        ],
                      }),
                    K &&
                      (0, t.jsxs)('div', {
                        ref: ts.ref,
                        children: [
                          eh &&
                            !eb &&
                            (0, t.jsx)('p', {
                              style: {
                                fontFamily: v,
                                fontSize: 7.5,
                                letterSpacing: '.24em',
                                textTransform: 'uppercase',
                                color: l,
                                opacity: 0.72,
                                margin: '0 0 12px',
                                textAlign: 'center',
                              },
                              children: A,
                            }),
                          e.venue_name &&
                            (0, t.jsxs)(T, {
                              inView: eh && !eb ? ts.inView : ti.inView,
                              delay: 0.12,
                              style: { textAlign: 'center', margin: '0 0 16px' },
                              children: [
                                (0, t.jsx)('p', {
                                  style: {
                                    fontFamily: u,
                                    fontWeight: 400,
                                    letterSpacing: '.04em',
                                    fontSize: 'clamp(18px,5vw,24px)',
                                    color: d,
                                    margin: '0 0 6px',
                                    lineHeight: 1.3,
                                  },
                                  children: e.venue_name,
                                }),
                                e.venue_address &&
                                  (0, t.jsx)('p', {
                                    style: {
                                      fontFamily: v,
                                      fontSize: 9,
                                      letterSpacing: '.18em',
                                      textTransform: 'uppercase',
                                      color: p,
                                      opacity: 0.55,
                                      margin: 0,
                                    },
                                    children: e.venue_address,
                                  }),
                              ],
                            }),
                          (0, t.jsx)(T, {
                            inView: eh && !eb ? ts.inView : ti.inView,
                            delay: 0.26,
                            children: (0, t.jsx)('div', {
                              style: { border: `1px solid ${s}22`, borderRadius: 12, overflow: 'hidden' },
                              children: (0, t.jsx)(n.MapBlock, {
                                venueName: e.venue_name,
                                venueAddress: e.venue_address,
                                accent: s,
                                venueLat: e.venue_lat,
                                venueLng: e.venue_lng,
                                mapsDirectUrl: N ?? null,
                                ctaLabel: eG || void 0,
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              eQ &&
                (0, t.jsxs)('div', {
                  ref: tc.ref,
                  style: { textAlign: 'center', padding: '0 0 80px' },
                  children: [
                    eK &&
                      (0, t.jsxs)(T, {
                        inView: tc.inView,
                        children: [
                          (0, t.jsx)(L, {
                            inView: tc.inView,
                            style: { maxWidth: 240, margin: '0 auto 28px' },
                          }),
                          (0, t.jsx)('span', { style: tp, children: eK }),
                        ],
                      }),
                    (0, t.jsx)('p', {
                      'aria-hidden': !0,
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontSize: 100,
                        lineHeight: 0.5,
                        color: m,
                        opacity: 0.12 * !!tc.inView,
                        transform: tc.inView ? 'none' : 'scale(0.3) rotate(-18deg)',
                        transition: tc.inView
                          ? 'opacity .7s ease .1s, transform .8s cubic-bezier(.34,1.56,.64,1) .1s'
                          : 'none',
                        margin: '18px 0 -14px',
                        userSelect: 'none',
                      },
                      children: '“',
                    }),
                    (0, t.jsx)(T, {
                      inView: tc.inView,
                      delay: 0.22,
                      children: (0, t.jsxs)('p', {
                        style: {
                          fontFamily: w,
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: 'clamp(16px,4.4vw,20px)',
                          color: d,
                          lineHeight: 2,
                          margin: '0 auto',
                          maxWidth: 460,
                        },
                        children: ['“', eQ, '”'],
                      }),
                    }),
                  ],
                }),
              (0, t.jsx)(n.TemplateExtras, { wedding: e, accent: l, textColor: d, showCalendar: !1 }),
              f &&
                e.custom_config?.show_rsvp !== !1 &&
                (0, t.jsxs)('div', {
                  ref: tn.ref,
                  style: { padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: tn.inView,
                      style: { textAlign: 'center' },
                      children: [
                        (0, t.jsx)(L, { inView: tn.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', { style: td, children: 'RSVP' }),
                      ],
                    }),
                    (0, t.jsx)(a.default, { weddingId: e.id, bare: !0 }),
                  ],
                }),
              e.custom_config?.compliments &&
                (0, t.jsxs)('div', {
                  ref: tr.ref,
                  style: { textAlign: 'center', padding: '0 0 80px' },
                  children: [
                    (0, t.jsxs)(T, {
                      inView: tr.inView,
                      children: [
                        (0, t.jsx)(L, { inView: tr.inView, style: { maxWidth: 240, margin: '0 auto 28px' } }),
                        (0, t.jsx)('span', { style: td, children: 'With Compliments Of' }),
                      ],
                    }),
                    (0, t.jsx)('div', {
                      style: { marginTop: 24 },
                      children: e.custom_config.compliments
                        .split(/[,\n]+/)
                        .map((e, i) =>
                          (0, t.jsx)(
                            T,
                            {
                              inView: tr.inView,
                              delay: 0.1 + 0.12 * i,
                              children: (0, t.jsx)('p', {
                                style: {
                                  fontFamily: u,
                                  fontWeight: 400,
                                  letterSpacing: '.04em',
                                  fontSize: 'clamp(16px,4.5vw,20px)',
                                  color: d,
                                  opacity: 0.82,
                                  margin: '6px 0',
                                  lineHeight: 1.4,
                                },
                                children: e.trim(),
                              }),
                            },
                            i,
                          ),
                        ),
                    }),
                  ],
                }),
              f && (0, t.jsx)(n.ScrollIndicatorMarker, {}),
              e.custom_config?.show_love_from !== !1 &&
                e.custom_config?.with_love_from &&
                (0, t.jsxs)(T, {
                  inView: !0,
                  style: { textAlign: 'center', padding: '0 0 44px' },
                  children: [
                    (0, t.jsx)(L, { inView: !0, style: { maxWidth: 220, margin: '0 auto 22px' } }),
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: v,
                        fontSize: 10,
                        textTransform: 'uppercase',
                        letterSpacing: '.24em',
                        color: p,
                        opacity: 0.65,
                        marginBottom: 12,
                      },
                      children: e.custom_config.love_from_label?.trim() || 'Best wishes',
                    }),
                    e.custom_config.with_love_from
                      .split(/\n+/)
                      .map((e) => e.trim())
                      .filter(Boolean)
                      .map((e, i) =>
                        0 === i
                          ? (0, t.jsx)(
                              'p',
                              {
                                style: {
                                  fontFamily: u,
                                  fontWeight: 600,
                                  fontSize: 19,
                                  letterSpacing: '.03em',
                                  lineHeight: 1.5,
                                  margin: 0,
                                  color: 'transparent',
                                  backgroundImage: `linear-gradient(90deg, ${d} 0%, ${l} 28%, ${s} 50%, ${l} 72%, ${d} 100%)`,
                                  backgroundSize: '200% auto',
                                  WebkitBackgroundClip: 'text',
                                  backgroundClip: 'text',
                                  animation: 'fa-shimmer 4.5s linear 0.8s infinite',
                                },
                                children: e,
                              },
                              i,
                            )
                          : (0, t.jsx)(
                              'p',
                              {
                                style: {
                                  fontFamily: w,
                                  fontStyle: 'italic',
                                  fontWeight: 400,
                                  fontSize: 15,
                                  color: d,
                                  opacity: 0.78,
                                  margin: '10px 0 0',
                                  lineHeight: 1.7,
                                },
                                children: e,
                              },
                              i,
                            ),
                      ),
                  ],
                }),
              e.custom_config?.show_promo !== !1 &&
                (0, t.jsxs)(T, {
                  inView: !0,
                  style: { textAlign: 'center', padding: '0 0 48px' },
                  children: [
                    (0, t.jsx)(L, { inView: !0, style: { maxWidth: 200, margin: '0 auto 32px' } }),
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontSize: 16,
                        color: p,
                        margin: '0 0 18px',
                      },
                      children: 'Want a beautiful invitation like this one?',
                    }),
                    (0, t.jsx)('a', {
                      href: `/?utm_source=invitation&utm_medium=promo_strip&utm_campaign=${encodeURIComponent(e.slug ?? e.id)}`,
                      style: {
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '10px 30px',
                        borderRadius: 100,
                        background: `linear-gradient(135deg, ${l}, ${s})`,
                        color: '#fff',
                        fontFamily: v,
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: '.10em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        boxShadow: `0 4px 20px ${s}45`,
                      },
                      children: '✦ Create Yours',
                    }),
                  ],
                }),
              (0, t.jsxs)('div', {
                style: { textAlign: 'center', paddingBottom: 48 * !eE },
                children: [
                  (0, t.jsx)(L, { inView: !0, style: { maxWidth: 220, margin: '0 auto 24px' } }),
                  eq && (0, t.jsx)('span', { style: { ...tp, marginBottom: 20 }, children: eq }),
                  (0, t.jsxs)('p', {
                    style: {
                      fontFamily: u,
                      fontWeight: eq ? 600 : 400,
                      letterSpacing: '.04em',
                      fontSize: eq ? 'clamp(22px,6vw,30px)' : 24,
                      color: d,
                      margin: '0 0 10px',
                      opacity: eq ? 0.92 : 0.7,
                      lineHeight: 1.25,
                    },
                    children: [Q, q ? ` & ${q}` : ''],
                  }),
                  eJ &&
                    (0, t.jsxs)('p', {
                      style: {
                        fontFamily: w,
                        fontStyle: 'italic',
                        fontWeight: 400,
                        fontSize: 'clamp(14px,3.9vw,17px)',
                        color: d,
                        opacity: 0.8,
                        margin: '16px auto 0',
                        lineHeight: 1.9,
                        maxWidth: 420,
                      },
                      children: ['“', eJ, '”'],
                    }),
                  e0 &&
                    (0, t.jsx)('p', {
                      style: {
                        fontFamily: u,
                        fontWeight: 600,
                        letterSpacing: '.14em',
                        fontSize: 'clamp(18px,5vw,24px)',
                        color: s,
                        margin: '24px 0 0',
                        lineHeight: 1.3,
                      },
                      children: e0,
                    }),
                  eD &&
                    (0, t.jsx)('div', {
                      style: { marginTop: 18 },
                      children: (0, t.jsx)(y, { fileName: `${e.slug || 'invitation'}.ics`, event: eY }),
                    }),
                  e1 &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)('div', {
                          style: { width: 30, height: 1, background: `${s}45`, margin: '22px auto 16px' },
                        }),
                        (0, t.jsx)('p', {
                          style: {
                            fontFamily: v,
                            fontSize: 8.5,
                            fontWeight: 700,
                            letterSpacing: '.30em',
                            textTransform: 'uppercase',
                            color: p,
                            opacity: 0.58,
                            margin: '0 0 26px',
                            lineHeight: 1.9,
                          },
                          children: e1,
                        }),
                      ],
                    }),
                  (0, t.jsxs)('p', {
                    style: e.custom_config?.footer_credit_strong
                      ? {
                          fontFamily: v,
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: '.16em',
                          textTransform: 'uppercase',
                          color: p,
                          opacity: 0.9,
                          margin: eE ? '88px 0 0' : 0,
                        }
                      : {
                          fontFamily: v,
                          fontSize: 8,
                          letterSpacing: '.16em',
                          textTransform: 'uppercase',
                          color: p,
                          opacity: 0.4,
                          margin: eE ? '88px 0 0' : 0,
                        },
                    children: [(0, t.jsx)(ZtCredit, {})],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f && (0, t.jsx)(n.ScrollIndicator, { color: s }),
    ],
  })
}
export const FloralEnvelopeCover = E
export default function ({
  wedding: e,
  photos: n = [],
  children: o,
  isGuest: a = !0,
  skipCover: r = !1,
  skipHero: s = !1,
}) {
  let [l, c] = (0, i.useState)(!a || r),
    [d, p] = (0, i.useState)(!a || r)
  function m() {
    ;(document.dispatchEvent(new CustomEvent('app:ready')),
      c(!0),
      requestAnimationFrame(() => requestAnimationFrame(() => p(!0))))
  }
  return (0, t.jsxs)(t.Fragment, {
    children: [
      a &&
        !l &&
        !r &&
        (e.custom_config?.cover_envelope_image
          ? (0, t.jsx)(E, { wedding: e, onDone: m })
          : (0, t.jsx)(B, { wedding: e, onDone: m })),
      l &&
        (0, t.jsx)('div', {
          style: { opacity: +!!d, transition: 'opacity .7s ease' },
          children: (0, t.jsx)(Y, { wedding: e, photos: n, isGuest: a, ready: l, skipHero: s }),
        }),
    ],
  })
}
