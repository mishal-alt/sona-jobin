import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
import * as __m74080 from 'react-dom'
import * as __m76855 from './m76855.js'
import * as __m75157 from './m75157.js'
import * as __m92914 from './m92914.js'
import * as __m74870 from './m74870.js'
;('use strict')
var t = __m43476,
  a = __m71645,
  r = __m74080,
  o = __m76855,
  i = __m75157,
  n = __m76855,
  s = __m92914,
  l = __m74870
let d = '#4c6546',
  h = '#775a19',
  c = '#1b1c18',
  p = o.DEMO_ALBUM_URLS
function u({ photos: e }) {
  let a = [-3, 2, -1.5, 3.5, -2.5, 1.5]
  return (0, t.jsxs)('div', {
    style: { padding: '0 32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 },
    children: [
      e.slice(0, 10).map((e, r) =>
        (0, t.jsxs)(
          'div',
          {
            style: {
              background: '#fffdf6',
              padding: '12px 12px 36px',
              boxShadow: '0 6px 28px rgba(119,90,25,.14), 0 2px 8px rgba(0,0,0,.08)',
              transform: `rotate(${a[r % a.length]}deg)`,
              transition: 'transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s',
              cursor: 'default',
              flexShrink: 0,
              width: 160,
              animation: `polaroidDrop .6s cubic-bezier(.16,1,.3,1) ${90 * r}ms both`,
            },
            onMouseEnter: (e) => {
              let t = e.currentTarget
              ;((t.style.transform = 'rotate(0deg) scale(1.08) translateY(-8px)'),
                (t.style.boxShadow = '0 18px 48px rgba(119,90,25,.22), 0 4px 16px rgba(0,0,0,.14)'),
                (t.style.zIndex = '10'))
            },
            onMouseLeave: (e) => {
              let t = e.currentTarget
              ;((t.style.transform = `rotate(${a[r % a.length]}deg)`),
                (t.style.boxShadow = '0 6px 28px rgba(119,90,25,.14), 0 2px 8px rgba(0,0,0,.08)'),
                (t.style.zIndex = ''))
            },
            children: [
              (0, t.jsx)('div', {
                style: { width: '100%', aspectRatio: '1', overflow: 'hidden', background: '#e8d5b8' },
                children: (0, t.jsx)('img', {
                  src: e,
                  alt: '',
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'sepia(18%) contrast(1.05)',
                    display: 'block',
                    transition: 'transform .4s ease',
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = 'scale(1.06)'
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  },
                }),
              }),
              (0, t.jsx)('div', {
                style: {
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 8,
                },
                children: (0, t.jsx)('div', {
                  style: { width: 48, height: 1, background: '#775a19', opacity: 0.3 },
                }),
              }),
            ],
          },
          r,
        ),
      ),
      (0, t.jsx)('style', {
        children:
          '@keyframes polaroidDrop { from { opacity:0; transform:translateY(-40px) rotate(var(--r,0deg)) } to { opacity:1 } }',
      }),
    ],
  })
}
function g({ photos: e }) {
  let a = [240, 180, 210, 190, 230, 170]
  return (0, t.jsxs)('div', {
    style: { padding: '0 24px', columns: 2, columnGap: 12 },
    children: [
      e.slice(0, 10).map((e, r) =>
        (0, t.jsxs)(
          'div',
          {
            style: {
              marginBottom: 12,
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(201,168,76,0.3)',
              boxShadow: '0 0 20px rgba(201,168,76,.08), 0 4px 20px rgba(0,0,0,.4)',
              breakInside: 'avoid',
              position: 'relative',
              animation: `candleFadeUp .7s ease ${100 * r}ms both`,
              transition: 'box-shadow .3s, transform .3s',
            },
            onMouseEnter: (e) => {
              let t = e.currentTarget
              ;((t.style.boxShadow = '0 0 40px rgba(201,168,76,.28), 0 8px 32px rgba(0,0,0,.55)'),
                (t.style.transform = 'scale(1.02)'))
            },
            onMouseLeave: (e) => {
              let t = e.currentTarget
              ;((t.style.boxShadow = '0 0 20px rgba(201,168,76,.08), 0 4px 20px rgba(0,0,0,.4)'),
                (t.style.transform = 'scale(1)'))
            },
            children: [
              (0, t.jsx)('img', {
                src: e,
                alt: '',
                style: {
                  width: '100%',
                  height: a[r % a.length],
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(.9) contrast(1.1)',
                  transition: 'filter .4s',
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.filter = 'brightness(1.02) contrast(1.08)'
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.filter = 'brightness(.9) contrast(1.1)'
                },
              }),
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, transparent 55%, rgba(8,8,22,.65))',
                  pointerEvents: 'none',
                },
              }),
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(201,168,76,.15)',
                  pointerEvents: 'none',
                },
              }),
            ],
          },
          r,
        ),
      ),
      (0, t.jsx)('style', {
        children:
          '@keyframes candleFadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }',
      }),
    ],
  })
}
function m({ photos: e }) {
  let r = (0, a.useRef)(null),
    o = (0, a.useRef)(0),
    i = [...e, ...e]
  return (
    (0, a.useEffect)(() => {
      let e = r.current
      if (!e) return
      let t = 0,
        a = !1,
        i = () => {
          ;(a || ((t += 0.5) >= e.scrollWidth / 2 && (t = 0), (e.scrollLeft = t)),
            (o.current = requestAnimationFrame(i)))
        },
        n = () => {
          a = !0
        },
        s = () => {
          a = !1
        }
      return (
        e.addEventListener('mouseenter', n),
        e.addEventListener('mouseleave', s),
        (o.current = requestAnimationFrame(i)),
        () => {
          ;(cancelAnimationFrame(o.current),
            e.removeEventListener('mouseenter', n),
            e.removeEventListener('mouseleave', s))
        }
      )
    }, []),
    (0, t.jsxs)('div', {
      style: { position: 'relative' },
      children: [
        (0, t.jsx)('div', {
          style: { display: 'flex', gap: 0, marginBottom: 6, paddingLeft: 24, overflow: 'hidden' },
          children: [...Array(18)].map((e, a) =>
            (0, t.jsx)(
              'div',
              {
                style: {
                  width: 22,
                  height: 12,
                  border: '1.5px solid rgba(58,143,165,.35)',
                  borderRadius: 3,
                  marginRight: 6,
                  flexShrink: 0,
                },
              },
              a,
            ),
          ),
        }),
        (0, t.jsx)('div', {
          ref: r,
          style: { display: 'flex', gap: 6, overflowX: 'hidden' },
          children: i.map((e, a) =>
            (0, t.jsxs)(
              'div',
              {
                style: { flexShrink: 0, width: 220, height: 300, overflow: 'hidden', position: 'relative' },
                children: [
                  (0, t.jsx)('img', {
                    src: e,
                    alt: '',
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'saturate(1.1) brightness(1.02)',
                    },
                    loading: 'lazy',
                  }),
                  (0, t.jsx)('svg', {
                    style: { position: 'absolute', bottom: -1, left: 0, right: 0, width: '100%' },
                    height: '28',
                    viewBox: '0 0 220 28',
                    preserveAspectRatio: 'none',
                    children: (0, t.jsx)('path', {
                      d: 'M0,8 C55,22 110,0 165,14 C190,20 210,10 220,8 L220,28 L0,28 Z',
                      fill: '#f7efe3',
                    }),
                  }),
                ],
              },
              a,
            ),
          ),
        }),
        (0, t.jsx)('div', {
          style: { display: 'flex', gap: 0, marginTop: 6, paddingLeft: 24, overflow: 'hidden' },
          children: [...Array(18)].map((e, a) =>
            (0, t.jsx)(
              'div',
              {
                style: {
                  width: 22,
                  height: 12,
                  border: '1.5px solid rgba(58,143,165,.35)',
                  borderRadius: 3,
                  marginRight: 6,
                  flexShrink: 0,
                },
              },
              a,
            ),
          ),
        }),
        (0, t.jsx)('div', {
          style: {
            position: 'absolute',
            top: 30,
            left: 0,
            bottom: 30,
            width: 60,
            background: 'linear-gradient(to right,#f7efe3,transparent)',
            pointerEvents: 'none',
          },
        }),
        (0, t.jsx)('div', {
          style: {
            position: 'absolute',
            top: 30,
            right: 0,
            bottom: 30,
            width: 60,
            background: 'linear-gradient(to left,#f7efe3,transparent)',
            pointerEvents: 'none',
          },
        }),
      ],
    })
  )
}
function y({ photos: e }) {
  let r = (0, a.useRef)(null),
    o = (0, a.useRef)(0),
    i = [...e, ...e]
  return (
    (0, a.useEffect)(() => {
      let e = r.current
      if (!e) return
      let t = 0,
        a = !1,
        i = () => {
          ;(a || ((t += 0.55) >= e.scrollWidth / 2 && (t = 0), (e.scrollLeft = t)),
            (o.current = requestAnimationFrame(i)))
        },
        n = () => {
          a = !0
        },
        s = () => {
          a = !1
        }
      return (
        e.addEventListener('mouseenter', n),
        e.addEventListener('mouseleave', s),
        (o.current = requestAnimationFrame(i)),
        () => {
          ;(cancelAnimationFrame(o.current),
            e.removeEventListener('mouseenter', n),
            e.removeEventListener('mouseleave', s))
        }
      )
    }, []),
    (0, t.jsxs)('div', {
      style: { position: 'relative' },
      children: [
        (0, t.jsx)('div', {
          style: { textAlign: 'center', marginBottom: 14 },
          children: (0, t.jsx)('span', {
            style: {
              display: 'inline-block',
              background: '#8b1a1a',
              color: '#fff',
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 9,
              fontWeight: 900,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              padding: '5px 18px',
              transform: 'rotate(-1.2deg)',
            },
            children: 'Our Memories',
          }),
        }),
        (0, t.jsx)('div', {
          ref: r,
          style: { display: 'flex', gap: 12, overflowX: 'hidden', cursor: 'grab' },
          children: i.map((a, r) =>
            (0, t.jsx)(
              'div',
              {
                style: {
                  flexShrink: 0,
                  width: 200,
                  position: 'relative',
                  animation: `saveFadeIn .5s ease ${(r % e.length) * 80}ms both`,
                },
                children: (0, t.jsx)('div', {
                  style: {
                    background: '#fffdf8',
                    padding: '10px 10px 30px',
                    boxShadow: '0 4px 18px rgba(27,28,24,.13)',
                  },
                  children: (0, t.jsxs)('div', {
                    style: {
                      height: 200,
                      overflow: 'hidden',
                      position: 'relative',
                      border: '2px solid #8b1a1a',
                    },
                    children: [
                      (0, t.jsx)('img', {
                        src: a,
                        alt: '',
                        style: {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          filter: 'contrast(1.06) saturate(.92)',
                          transition: 'transform .5s ease',
                        },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.transform = 'scale(1.07)'
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.transform = 'scale(1)'
                        },
                      }),
                      r % e.length == 0 &&
                        (0, t.jsx)('div', {
                          style: {
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            border: '2px solid rgba(139,26,26,.8)',
                            background: 'rgba(255,253,248,.85)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: 'rotate(-12deg)',
                          },
                          children: (0, t.jsxs)('span', {
                            style: {
                              fontFamily: "'Plus Jakarta Sans',sans-serif",
                              fontSize: 5.5,
                              fontWeight: 900,
                              color: '#8b1a1a',
                              textTransform: 'uppercase',
                              letterSpacing: '.07em',
                              textAlign: 'center',
                              lineHeight: 1.3,
                            },
                            children: ['Save', (0, t.jsx)('br', {}), 'Date'],
                          }),
                        }),
                    ],
                  }),
                }),
              },
              r,
            ),
          ),
        }),
        (0, t.jsx)('div', {
          style: {
            position: 'absolute',
            top: 36,
            left: 0,
            bottom: 0,
            width: 48,
            background: 'linear-gradient(to right,#fffdf8,transparent)',
            pointerEvents: 'none',
          },
        }),
        (0, t.jsx)('div', {
          style: {
            position: 'absolute',
            top: 36,
            right: 0,
            bottom: 0,
            width: 48,
            background: 'linear-gradient(to left,#fffdf8,transparent)',
            pointerEvents: 'none',
          },
        }),
        (0, t.jsx)('style', {
          children:
            '@keyframes saveFadeIn { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }',
        }),
      ],
    })
  )
}
function b({ photos: e }) {
  let a = ['40% 10% 40% 10%', '10% 40% 10% 40%', '10% 40% 40% 10%', '40% 10% 10% 40%']
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px', position: 'relative' },
    children: [
      [
        { top: '4%', left: '6%', r: 0, delay: 0 },
        { top: '10%', right: '5%', r: 25, delay: 200 },
        { top: '58%', left: '3%', r: -15, delay: 400 },
        { top: '72%', right: '7%', r: 30, delay: 600 },
      ].map((e, a) =>
        (0, t.jsx)(
          'div',
          {
            style: {
              position: 'absolute',
              width: 16,
              height: 22,
              background: 'rgba(245,184,199,0.6)',
              borderRadius: '50% 0 50% 0',
              transform: `rotate(${e.r}deg)`,
              top: e.top,
              left: e.left,
              right: e.right,
              pointerEvents: 'none',
              zIndex: 2,
              animation: `petalFloat 4s ease-in-out ${e.delay}ms infinite`,
            },
          },
          a,
        ),
      ),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative', zIndex: 1 },
        children: e.slice(0, 4).map((e, r) =>
          (0, t.jsx)(
            'div',
            {
              style: {
                borderRadius: a[r],
                overflow: 'hidden',
                aspectRatio: '1',
                boxShadow: '0 8px 28px rgba(181,41,78,.12)',
                border: '3px solid rgba(245,184,199,0.6)',
                animation: `sakuraBloom .6s cubic-bezier(.16,1,.3,1) ${120 * r}ms both`,
                transition: 'transform .3s, box-shadow .3s',
              },
              onMouseEnter: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = 'scale(1.05)'),
                  (t.style.boxShadow = '0 14px 40px rgba(181,41,78,.22)'))
              },
              onMouseLeave: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = ''), (t.style.boxShadow = '0 8px 28px rgba(181,41,78,.12)'))
              },
              children: (0, t.jsx)('img', {
                src: e,
                alt: '',
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'saturate(.95) brightness(1.04)',
                  transition: 'transform .4s',
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = 'scale(1.08)'
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                },
              }),
            },
            r,
          ),
        ),
      }),
      e[4] &&
        (0, t.jsx)('div', {
          style: {
            marginTop: 16,
            borderRadius: '20px 4px 20px 4px',
            overflow: 'hidden',
            height: 140,
            border: '3px solid rgba(245,184,199,0.6)',
            boxShadow: '0 8px 28px rgba(181,41,78,.10)',
            animation: 'sakuraBloom .6s cubic-bezier(.16,1,.3,1) 480ms both',
          },
          children: (0, t.jsx)('img', {
            src: e[4],
            alt: '',
            style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
            loading: 'lazy',
          }),
        }),
      (0, t.jsx)('style', {
        children: `
        @keyframes sakuraBloom { from { opacity:0; transform:scale(.88) } to { opacity:1; transform:scale(1) } }
        @keyframes petalFloat  { 0%,100% { transform:translateY(0) rotate(var(--r,0deg)) } 50% { transform:translateY(-8px) rotate(var(--r,0deg)) } }
      `,
      }),
    ],
  })
}
function f({ photos: e }) {
  return (0, t.jsxs)('div', {
    style: { padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8 },
    children: [
      (0, t.jsxs)('div', {
        style: {
          gridRow: '1 / 3',
          borderRadius: '4px 4px 60px 4px',
          overflow: 'hidden',
          position: 'relative',
        },
        children: [
          (0, t.jsx)('img', {
            src: e[0],
            alt: '',
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'saturate(.85) contrast(1.05)',
              minHeight: 300,
            },
            loading: 'lazy',
          }),
          (0, t.jsxs)('svg', {
            style: { position: 'absolute', bottom: 12, right: 12, opacity: 0.4 },
            width: '60',
            height: '80',
            viewBox: '0 0 60 80',
            fill: 'none',
            children: [
              (0, t.jsx)('path', { d: 'M30,75 C30,50 10,40 5,15', stroke: '#c9a84c', strokeWidth: '1.5' }),
              (0, t.jsx)('ellipse', {
                cx: '12',
                cy: '20',
                rx: '10',
                ry: '16',
                transform: 'rotate(-30 12 20)',
                stroke: '#c9a84c',
                strokeWidth: '1',
              }),
              (0, t.jsx)('ellipse', {
                cx: '40',
                cy: '30',
                rx: '8',
                ry: '14',
                transform: 'rotate(20 40 30)',
                stroke: '#c9a84c',
                strokeWidth: '1',
              }),
            ],
          }),
        ],
      }),
      e
        .slice(1, 4)
        .map((e, a) =>
          (0, t.jsx)(
            'div',
            {
              style: {
                borderRadius: 0 === a ? '4px 60px 4px 4px' : 2 === a ? '4px 4px 60px 4px' : 4,
                overflow: 'hidden',
                height: 96,
              },
              children: (0, t.jsx)('img', {
                src: e,
                alt: '',
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'saturate(.82) brightness(.95)',
                },
                loading: 'lazy',
              }),
            },
            a,
          ),
        ),
      e[4] &&
        (0, t.jsx)('div', {
          style: { gridColumn: '1 / -1', borderRadius: '4px 4px 4px 60px', overflow: 'hidden', height: 120 },
          children: (0, t.jsx)('img', {
            src: e[4],
            alt: '',
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'saturate(.85) brightness(.95)',
            },
            loading: 'lazy',
          }),
        }),
    ],
  })
}
function x({ photos: e }) {
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsx)('div', {
        style: { textAlign: 'center', marginBottom: 16 },
        children: (0, t.jsx)('span', {
          style: {
            display: 'inline-block',
            background: 'linear-gradient(135deg,#3d0e18,#5a1625)',
            color: '#c9a03c',
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            padding: '5px 18px',
            borderTop: '1.5px solid #c9a03c',
            borderBottom: '1.5px solid #c9a03c',
          },
          children: 'Our Memories',
        }),
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
        children: e.slice(0, 10).map((e, a) =>
          (0, t.jsxs)(
            'div',
            {
              style: {
                position: 'relative',
                overflow: 'hidden',
                border: '1.5px solid rgba(201,160,60,0.5)',
                boxShadow: '0 4px 20px rgba(61,14,24,.25), inset 0 0 0 1px rgba(201,160,60,.15)',
                animation: `velvetReveal .6s ease ${90 * a}ms both`,
                transition: 'transform .3s, box-shadow .3s',
              },
              onMouseEnter: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = 'scale(1.04)'),
                  (t.style.boxShadow = '0 8px 32px rgba(201,160,60,.22)'))
              },
              onMouseLeave: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = 'scale(1)'),
                  (t.style.boxShadow = '0 4px 20px rgba(61,14,24,.25), inset 0 0 0 1px rgba(201,160,60,.15)'))
              },
              children: [
                (0, t.jsx)('img', {
                  src: e,
                  alt: '',
                  style: {
                    width: '100%',
                    aspectRatio: '1',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'sepia(10%) brightness(.95) contrast(1.06)',
                    transition: 'transform .4s, filter .4s',
                  },
                  onMouseEnter: (e) => {
                    let t = e.currentTarget
                    ;((t.style.transform = 'scale(1.06)'),
                      (t.style.filter = 'sepia(0%) brightness(1) contrast(1.04)'))
                  },
                  onMouseLeave: (e) => {
                    let t = e.currentTarget
                    ;((t.style.transform = 'scale(1)'),
                      (t.style.filter = 'sepia(10%) brightness(.95) contrast(1.06)'))
                  },
                }),
                [
                  { top: 4, left: 4 },
                  { top: 4, right: 4 },
                  { bottom: 4, left: 4 },
                  { bottom: 4, right: 4 },
                ].map((e, a) =>
                  (0, t.jsx)(
                    'svg',
                    {
                      style: { position: 'absolute', ...e },
                      width: '9',
                      height: '9',
                      viewBox: '0 0 9 9',
                      fill: 'none',
                      children: (0, t.jsx)('path', {
                        d: 'M1,8 L1,1 L8,1',
                        stroke: '#c9a03c',
                        strokeWidth: '1',
                        opacity: '.7',
                      }),
                    },
                    a,
                  ),
                ),
                (0, t.jsx)('div', {
                  style: {
                    position: 'absolute',
                    bottom: 5,
                    right: 7,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 8,
                    fontWeight: 700,
                    color: 'rgba(201,160,60,.75)',
                    letterSpacing: '.06em',
                  },
                  children: String(a + 1).padStart(2, '0'),
                }),
              ],
            },
            a,
          ),
        ),
      }),
      (0, t.jsx)('style', {
        children:
          '@keyframes velvetReveal { from { opacity:0; transform:scale(.94) } to { opacity:1; transform:scale(1) } }',
      }),
    ],
  })
}
function v({ photos: e }) {
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsx)('div', {
        style: { display: 'flex', justifyContent: 'center', marginBottom: 16 },
        children: (0, t.jsxs)('div', {
          style: {
            width: 220,
            height: 260,
            borderRadius: '50% 50% 48% 48% / 44% 44% 56% 56%',
            overflow: 'hidden',
            border: '3px solid rgba(212,160,64,.6)',
            boxShadow: '0 12px 48px rgba(212,160,64,.2), 0 4px 16px rgba(0,0,0,.25)',
            position: 'relative',
          },
          children: [
            (0, t.jsx)('img', {
              src: e[0],
              alt: '',
              style: {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'sepia(12%) brightness(1.05) contrast(1.04)',
              },
            }),
            (0, t.jsx)('div', {
              style: {
                position: 'absolute',
                inset: 0,
                border: '6px solid rgba(255,255,255,.12)',
                borderRadius: 'inherit',
                pointerEvents: 'none',
              },
            }),
          ],
        }),
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 },
        children: e.slice(1, 7).map((e, a) =>
          (0, t.jsxs)(
            'div',
            {
              style: {
                position: 'relative',
                aspectRatio: '1',
                overflow: 'hidden',
                borderRadius: 4,
                boxShadow: '0 4px 16px rgba(0,0,0,.18)',
                animation: `annAlbumFade .5s ease ${80 * a}ms both`,
              },
              children: [
                (0, t.jsx)('img', {
                  src: e,
                  alt: '',
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'sepia(8%) brightness(1.02)',
                    transition: 'transform .4s',
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = 'scale(1.07)'
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  },
                }),
                [
                  { top: 4, left: 4, r: 0 },
                  { top: 4, right: 4, r: 90 },
                  { bottom: 4, right: 4, r: 180 },
                  { bottom: 4, left: 4, r: 270 },
                ].map((e, a) =>
                  (0, t.jsx)(
                    'svg',
                    {
                      style: { position: 'absolute', ...(({ r: e, ...t }) => t)(e) },
                      width: '10',
                      height: '10',
                      viewBox: '0 0 10 10',
                      fill: 'none',
                      children: (0, t.jsx)('path', {
                        d: 'M1,9 L1,1 L9,1',
                        stroke: 'rgba(212,160,64,.8)',
                        strokeWidth: '1.5',
                        transform: `rotate(${e.r} 5 5)`,
                      }),
                    },
                    a,
                  ),
                ),
              ],
            },
            a,
          ),
        ),
      }),
      (0, t.jsx)('style', {
        children:
          '@keyframes annAlbumFade { from { opacity:0; transform:scale(.9) } to { opacity:1; transform:scale(1) } }',
      }),
    ],
  })
}
function w({ photos: e }) {
  let a = [
    '50% 10% 50% 10%',
    '10% 50% 10% 50%',
    '20% 50% 20% 50%',
    '50% 20% 50% 20%',
    '30% 30% 50% 50%',
    '50% 50% 30% 30%',
  ]
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsx)('div', {
        style: {
          borderRadius: '12px 60px 12px 60px',
          overflow: 'hidden',
          height: 220,
          marginBottom: 14,
          boxShadow: '0 10px 40px rgba(212,112,160,.2)',
          border: '2px solid rgba(212,112,160,.3)',
        },
        children: (0, t.jsx)('img', {
          src: e[0],
          alt: '',
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(1.05) brightness(1.04)',
          },
        }),
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 },
        children: e.slice(1, 7).map((e, r) =>
          (0, t.jsx)(
            'div',
            {
              style: {
                borderRadius: a[r % a.length],
                overflow: 'hidden',
                aspectRatio: '1',
                boxShadow: '0 6px 20px rgba(212,112,160,.16)',
                border: '2px solid rgba(212,112,160,.22)',
                animation: `engJewel .55s cubic-bezier(.16,1,.3,1) ${80 * r}ms both`,
                transition: 'transform .3s, box-shadow .3s',
              },
              onMouseEnter: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = 'scale(1.06)'),
                  (t.style.boxShadow = '0 12px 36px rgba(212,112,160,.3)'))
              },
              onMouseLeave: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = ''), (t.style.boxShadow = '0 6px 20px rgba(212,112,160,.16)'))
              },
              children: (0, t.jsx)('img', {
                src: e,
                alt: '',
                style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
                loading: 'lazy',
              }),
            },
            r,
          ),
        ),
      }),
      (0, t.jsx)('style', {
        children:
          '@keyframes engJewel { from { opacity:0; transform:scale(.8) rotate(-6deg) } to { opacity:1; transform:scale(1) rotate(0deg) } }',
      }),
    ],
  })
}
function j({ photos: e }) {
  let a = [2, -3, 1.5, -2.5, 3, -1],
    r = ['#f040a0', '#ffd700', '#a040f0', '#40d0f0', '#f04040', '#40f080']
  return (0, t.jsxs)('div', {
    style: { padding: '0 16px', position: 'relative' },
    children: [
      [...Array(18)].map((e, a) =>
        (0, t.jsx)(
          'div',
          {
            style: {
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: a % 3 == 0 ? '50%' : 2,
              background: r[a % r.length],
              top: `${40 * Math.sin(1.7 * a) + 50}%`,
              left: `${(a / 18) * 90 + 5}%`,
              opacity: 0.55,
              transform: `rotate(${23 * a}deg)`,
              pointerEvents: 'none',
              zIndex: 0,
            },
          },
          a,
        ),
      ),
      (0, t.jsx)('div', {
        style: {
          borderRadius: 20,
          overflow: 'hidden',
          height: 200,
          marginBottom: 12,
          boxShadow: '0 12px 40px rgba(240,64,160,.25)',
          border: '3px solid rgba(240,64,160,.3)',
          position: 'relative',
          zIndex: 1,
        },
        children: (0, t.jsx)('img', {
          src: e[0],
          alt: '',
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(1.1) brightness(1.05)',
          },
        }),
      }),
      (0, t.jsx)('div', {
        style: {
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        },
        children: e.slice(1, 6).map((e, o) =>
          (0, t.jsxs)(
            'div',
            {
              style: {
                background: '#fff',
                padding: '8px 8px 28px',
                boxShadow: '0 6px 24px rgba(0,0,0,.15)',
                transform: `rotate(${a[o % a.length]}deg)`,
                width: 110,
                flexShrink: 0,
                animation: `bDayPop .5s cubic-bezier(.16,1,.3,1) ${90 * o}ms both`,
                transition: 'transform .3s, box-shadow .3s',
              },
              onMouseEnter: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = 'rotate(0deg) scale(1.1) translateY(-6px)'),
                  (t.style.boxShadow = '0 16px 40px rgba(0,0,0,.2)'))
              },
              onMouseLeave: (e) => {
                let t = e.currentTarget
                ;((t.style.transform = `rotate(${a[o % a.length]}deg)`),
                  (t.style.boxShadow = '0 6px 24px rgba(0,0,0,.15)'))
              },
              children: [
                (0, t.jsx)('div', {
                  style: { height: 100, overflow: 'hidden', background: '#f8e8f4' },
                  children: (0, t.jsx)('img', {
                    src: e,
                    alt: '',
                    style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' },
                    loading: 'lazy',
                  }),
                }),
                (0, t.jsx)('div', {
                  style: {
                    width: 36,
                    height: 1.5,
                    background: `${r[o % r.length]}`,
                    opacity: 0.5,
                    margin: '8px auto 0',
                  },
                }),
              ],
            },
            o,
          ),
        ),
      }),
      (0, t.jsx)('style', {
        children:
          '@keyframes bDayPop { from { opacity:0; transform:scale(0.7) rotate(var(--r,0deg)) translateY(20px) } to { opacity:1 } }',
      }),
    ],
  })
}
function k({ photos: e }) {
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsxs)('div', {
        style: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8, marginBottom: 8 },
        children: [
          (0, t.jsxs)('div', {
            style: { overflow: 'hidden', borderRadius: 8, height: 220, position: 'relative' },
            children: [
              (0, t.jsx)('img', {
                src: e[0],
                alt: '',
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'saturate(.85) brightness(.95) contrast(1.08)',
                  transition: 'transform .4s',
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = 'scale(1.04)'
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                },
              }),
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 9,
                  fontWeight: 800,
                  color: 'rgba(255,255,255,.8)',
                  letterSpacing: '.12em',
                  background: 'rgba(10,22,40,.55)',
                  padding: '3px 8px',
                  borderRadius: 3,
                },
                children: '01',
              }),
            ],
          }),
          (0, t.jsx)('div', {
            style: { display: 'flex', flexDirection: 'column', gap: 8 },
            children: e.slice(1, 3).map((e, a) =>
              (0, t.jsxs)(
                'div',
                {
                  style: { overflow: 'hidden', borderRadius: 8, flex: 1, position: 'relative' },
                  children: [
                    (0, t.jsx)('img', {
                      src: e,
                      alt: '',
                      style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'saturate(.85) brightness(.95)',
                        transition: 'transform .4s',
                      },
                      onMouseEnter: (e) => {
                        e.currentTarget.style.transform = 'scale(1.05)'
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                      },
                    }),
                    (0, t.jsxs)('div', {
                      style: {
                        position: 'absolute',
                        bottom: 6,
                        left: 6,
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 8,
                        fontWeight: 800,
                        color: 'rgba(255,255,255,.75)',
                        background: 'rgba(10,22,40,.55)',
                        padding: '2px 6px',
                        borderRadius: 2,
                      },
                      children: ['0', a + 2],
                    }),
                  ],
                },
                a,
              ),
            ),
          }),
        ],
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 },
        children: e.slice(3, 6).map((e, a) =>
          (0, t.jsxs)(
            'div',
            {
              style: { overflow: 'hidden', borderRadius: 8, height: 100, position: 'relative' },
              children: [
                (0, t.jsx)('img', {
                  src: e,
                  alt: '',
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'saturate(.8) brightness(.92) contrast(1.06)',
                    transition: 'transform .4s',
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.transform = 'scale(1.06)'
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  },
                }),
                (0, t.jsxs)('div', {
                  style: {
                    position: 'absolute',
                    bottom: 5,
                    left: 5,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 8,
                    fontWeight: 800,
                    color: 'rgba(255,255,255,.7)',
                    background: 'rgba(10,22,40,.5)',
                    padding: '2px 5px',
                    borderRadius: 2,
                  },
                  children: ['0', a + 4],
                }),
              ],
            },
            a,
          ),
        ),
      }),
    ],
  })
}
function S({ photos: e }) {
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsx)('div', {
        style: { display: 'flex', justifyContent: 'center', marginBottom: 14 },
        children: (0, t.jsx)('div', {
          style: {
            width: '60%',
            borderRadius: '50% 50% 8px 8px / 32% 32% 8px 8px',
            overflow: 'hidden',
            height: 210,
            border: '3px solid rgba(212,136,42,.4)',
            boxShadow: '0 10px 40px rgba(212,136,42,.18)',
          },
          children: (0, t.jsx)('img', {
            src: e[0],
            alt: '',
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(.92) brightness(1.04) warmth(1.1)',
            },
          }),
        }),
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
        children: e.slice(1, 5).map((e, a) =>
          (0, t.jsx)(
            'div',
            {
              style: {
                borderRadius: a % 2 == 0 ? '12px 40px 12px 12px' : '40px 12px 12px 12px',
                overflow: 'hidden',
                height: 120,
                border: '2px solid rgba(212,136,42,.25)',
                boxShadow: '0 4px 16px rgba(212,136,42,.12)',
                animation: `hwFade .5s ease ${100 * a}ms both`,
              },
              children: (0, t.jsx)('img', {
                src: e,
                alt: '',
                style: {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'saturate(.9) brightness(1.02)',
                  transition: 'transform .4s',
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = 'scale(1.07)'
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                },
              }),
            },
            a,
          ),
        ),
      }),
      (0, t.jsx)('style', {
        children:
          '@keyframes hwFade { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }',
      }),
    ],
  })
}
function L({ photos: e }) {
  let a = [
    '60% 40% 70% 30% / 50% 60% 40% 50%',
    '30% 70% 40% 60% / 60% 40% 70% 30%',
    '50% 50% 30% 70% / 40% 60% 50% 50%',
    '70% 30% 60% 40% / 50% 40% 60% 50%',
    '40% 60% 50% 50% / 70% 30% 50% 50%',
    '60% 40% 30% 70% / 30% 70% 40% 60%',
  ]
  return (0, t.jsxs)('div', {
    style: { padding: '0 16px', position: 'relative' },
    children: [
      [...Array(6)].map((e, a) =>
        (0, t.jsx)(
          'div',
          {
            style: {
              position: 'absolute',
              top: `${15 + 14 * a}%`,
              left: a % 2 == 0 ? '4%' : '92%',
              fontSize: 10,
              opacity: 0.35,
              pointerEvents: 'none',
              animation: `starTwinkle 2s ease ${300 * a}ms infinite alternate`,
            },
            children: '★',
          },
          a,
        ),
      ),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
        children: e
          .slice(0, 6)
          .map((e, r) =>
            (0, t.jsx)(
              'div',
              {
                style: {
                  borderRadius: a[r % a.length],
                  overflow: 'hidden',
                  aspectRatio: '1',
                  boxShadow: '0 6px 24px rgba(192,144,232,.22)',
                  border: '2.5px solid rgba(192,144,232,.3)',
                  animation: `blobIn .6s cubic-bezier(.16,1,.3,1) ${90 * r}ms both`,
                },
                children: (0, t.jsx)('img', {
                  src: e,
                  alt: '',
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'saturate(.9) brightness(1.06)',
                  },
                  loading: 'lazy',
                }),
              },
              r,
            ),
          ),
      }),
      (0, t.jsx)('style', {
        children: `
        @keyframes blobIn { from { opacity:0; transform:scale(.75) } to { opacity:1; transform:scale(1) } }
        @keyframes starTwinkle { from { opacity:.2; transform:scale(.9) } to { opacity:.5; transform:scale(1.1) } }
      `,
      }),
    ],
  })
}
function P({ photos: e }) {
  let r = '#9a7a3c',
    [o, i] = (0, a.useState)(null),
    n = e.slice(0, 6)
  ;(0, a.useEffect)(() => {
    let e = (e) => {
      ;('Escape' === e.key && i(null),
        'ArrowLeft' === e.key && i((e) => (null !== e && e > 0 ? e - 1 : e)),
        'ArrowRight' === e.key && i((e) => (null !== e && e < n.length - 1 ? e + 1 : e)))
    }
    return (window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e))
  }, [])
  let s = ({ flip: e = !1 }) =>
      (0, t.jsxs)('svg', {
        width: '22',
        height: '26',
        viewBox: '0 0 22 26',
        fill: 'none',
        style: { display: 'block', transform: e ? 'scaleX(-1)' : void 0 },
        children: [
          (0, t.jsx)('path', {
            d: 'M11,24 C11,17 11,10 11,3',
            stroke: r,
            strokeWidth: '.9',
            strokeLinecap: 'round',
            opacity: '.6',
          }),
          (0, t.jsx)('path', { d: 'M11,16 C6,12 3,8 6,4 C9,1 12,6 11,12', fill: '#6e8259', opacity: '.75' }),
          (0, t.jsx)('path', {
            d: 'M11,16 C16,12 19,8 16,4 C13,1 10,6 11,12',
            fill: '#3d5236',
            opacity: '.6',
          }),
          (0, t.jsx)('circle', { cx: '11', cy: '3', r: '1.8', fill: r, opacity: '.55' }),
        ],
      }),
    l = { position: 'relative', background: '#f5ede0', cursor: 'pointer' }
  return (0, t.jsxs)('div', {
    style: { padding: '0 20px' },
    children: [
      (0, t.jsxs)('div', {
        style: { display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 10, marginBottom: 10 },
        children: [
          (0, t.jsxs)('div', {
            style: { ...l, padding: '10px 10px 24px 10px', boxShadow: '0 3px 18px rgba(61,82,54,.12)' },
            onClick: () => i(0),
            children: [
              (0, t.jsx)('img', {
                src: n[0],
                alt: '',
                style: {
                  width: '100%',
                  height: 200,
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'saturate(.88) sepia(6%)',
                },
                loading: 'lazy',
              }),
              (0, t.jsx)('div', {
                style: {
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 22,
                  height: 22,
                  background: 'linear-gradient(225deg, rgba(154,122,60,.28) 50%, transparent 50%)',
                },
              }),
              (0, t.jsx)('div', {
                style: { position: 'absolute', bottom: 4, left: 8 },
                children: (0, t.jsx)(s, {}),
              }),
            ],
          }),
          (0, t.jsx)('div', {
            style: { display: 'flex', flexDirection: 'column', gap: 10 },
            children: n
              .slice(1, 3)
              .map((e, a) =>
                (0, t.jsxs)(
                  'div',
                  {
                    style: {
                      ...l,
                      padding: '8px 8px 20px',
                      boxShadow: '0 3px 14px rgba(61,82,54,.1)',
                      flex: 1,
                    },
                    onClick: () => i(a + 1),
                    children: [
                      (0, t.jsx)('img', {
                        src: e,
                        alt: '',
                        style: {
                          width: '100%',
                          height: '100%',
                          minHeight: 90,
                          objectFit: 'cover',
                          display: 'block',
                          filter: 'saturate(.88) sepia(5%)',
                        },
                        loading: 'lazy',
                      }),
                      (0, t.jsx)('div', {
                        style: {
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          width: 18,
                          height: 18,
                          background: 'linear-gradient(225deg, rgba(154,122,60,.24) 50%, transparent 50%)',
                        },
                      }),
                      1 === a &&
                        (0, t.jsx)('div', {
                          style: { position: 'absolute', bottom: 3, left: 6 },
                          children: (0, t.jsx)(s, { flip: !0 }),
                        }),
                    ],
                  },
                  a,
                ),
              ),
          }),
        ],
      }),
      (0, t.jsx)('div', {
        style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 },
        children: n
          .slice(3, 6)
          .map((e, a) =>
            (0, t.jsxs)(
              'div',
              {
                style: { ...l, padding: '8px 8px 22px', boxShadow: '0 3px 14px rgba(61,82,54,.1)' },
                onClick: () => i(a + 3),
                children: [
                  (0, t.jsx)('img', {
                    src: e,
                    alt: '',
                    style: {
                      width: '100%',
                      height: 110,
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'saturate(.88) sepia(5%)',
                    },
                    loading: 'lazy',
                  }),
                  (0, t.jsx)('div', {
                    style: {
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: 16,
                      height: 16,
                      background: 'linear-gradient(225deg, rgba(154,122,60,.22) 50%, transparent 50%)',
                    },
                  }),
                  1 === a &&
                    (0, t.jsx)('div', {
                      style: { position: 'absolute', bottom: 3, left: 5 },
                      children: (0, t.jsx)(s, {}),
                    }),
                ],
              },
              a,
            ),
          ),
      }),
      (0, t.jsxs)('div', {
        style: { display: 'flex', alignItems: 'center', gap: 10, marginTop: 18, padding: '0 4px' },
        children: [
          (0, t.jsx)('div', {
            style: { flex: 1, height: 0.7, background: `linear-gradient(to right,transparent,${r}44)` },
          }),
          (0, t.jsx)(s, {}),
          (0, t.jsx)('div', {
            style: { flex: 1, height: 0.7, background: `linear-gradient(to left,transparent,${r}44)` },
          }),
        ],
      }),
      null !== o &&
        (0, t.jsxs)('div', {
          onClick: () => i(null),
          style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1e3,
            background: 'rgba(18,14,8,0.92)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: [
            (0, t.jsxs)('div', {
              onClick: (e) => e.stopPropagation(),
              style: {
                position: 'relative',
                border: '1.5px solid rgba(154,122,60,.5)',
                padding: 8,
                background: '#f5ede0',
                boxShadow: '0 24px 80px rgba(0,0,0,.7)',
              },
              children: [
                (0, t.jsx)('img', {
                  src: n[o],
                  alt: '',
                  style: {
                    display: 'block',
                    maxWidth: '85vw',
                    maxHeight: '80vh',
                    objectFit: 'contain',
                    filter: 'saturate(.88) sepia(5%)',
                  },
                }),
                (0, t.jsx)('div', {
                  style: {
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: 28,
                    height: 28,
                    background: 'linear-gradient(225deg, rgba(154,122,60,.38) 50%, transparent 50%)',
                  },
                }),
              ],
            }),
            (0, t.jsx)('button', {
              onClick: () => i(null),
              style: {
                position: 'absolute',
                top: 18,
                right: 22,
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,.65)',
                fontSize: 28,
                lineHeight: 1,
                cursor: 'pointer',
                padding: 6,
              },
              children: '✕',
            }),
            o > 0 &&
              (0, t.jsx)('button', {
                onClick: (e) => {
                  ;(e.stopPropagation(), i((e) => (null !== e && e > 0 ? e - 1 : e)))
                },
                style: {
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(154,122,60,.18)',
                  border: '1px solid rgba(154,122,60,.35)',
                  color: r,
                  fontSize: 26,
                  lineHeight: 1,
                  cursor: 'pointer',
                  padding: '10px 16px',
                  borderRadius: 2,
                },
                children: '‹',
              }),
            o < n.length - 1 &&
              (0, t.jsx)('button', {
                onClick: (e) => {
                  ;(e.stopPropagation(), i((e) => (null !== e && e < n.length - 1 ? e + 1 : e)))
                },
                style: {
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(154,122,60,.18)',
                  border: '1px solid rgba(154,122,60,.35)',
                  color: r,
                  fontSize: 26,
                  lineHeight: 1,
                  cursor: 'pointer',
                  padding: '10px 16px',
                  borderRadius: 2,
                },
                children: '›',
              }),
            (0, t.jsxs)('p', {
              style: {
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,.38)',
                fontSize: 11,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                letterSpacing: '.22em',
                margin: 0,
              },
              children: [o + 1, ' / ', n.length],
            }),
          ],
        }),
    ],
  })
}
function T({
  venueName: e,
  venueAddress: a,
  accent: r = d,
  venueLat: o,
  venueLng: i,
  mapsDirectUrl: n,
  ctaLabel: s = 'Directions →',
}) {
  let l =
    n ||
    (null != o && null != i
      ? `https://maps.google.com/?q=${o},${i}`
      : `https://maps.google.com/?q=${encodeURIComponent((a || e || '').trim())}`)
  return (0, t.jsxs)('div', {
    style: { borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 36px rgba(27,28,24,.09)' },
    children: [
      (0, t.jsxs)('div', {
        className: 't-map-ph',
        style: { height: 190, position: 'relative' },
        children: [
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '42%',
              left: 0,
              right: 0,
              height: 16,
              background: 'rgba(255,255,255,.65)',
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              left: '38%',
              top: 0,
              bottom: 0,
              width: 12,
              background: 'rgba(255,255,255,.65)',
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '68%',
              left: 0,
              right: '18%',
              height: 9,
              background: 'rgba(255,255,255,.5)',
              borderRadius: 4,
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '22%',
              left: '58%',
              right: 0,
              height: 9,
              background: 'rgba(255,255,255,.5)',
              borderRadius: 4,
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '8%',
              left: '5%',
              width: '22%',
              height: '28%',
              background: 'rgba(76,101,70,.14)',
              borderRadius: 8,
            },
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '28%',
              left: '35%',
              width: 26,
              height: 26,
              background: r,
              borderRadius: '50% 50% 50% 0',
              transform: 'rotate(-45deg)',
              boxShadow: `0 4px 12px ${r}55`,
            },
            children: (0, t.jsx)('div', {
              style: {
                position: 'absolute',
                top: '28%',
                left: '28%',
                width: '44%',
                height: '44%',
                background: 'white',
                borderRadius: '50%',
              },
            }),
          }),
          (0, t.jsx)('div', {
            style: {
              position: 'absolute',
              top: '22%',
              left: '29%',
              width: 38,
              height: 38,
              border: `2px solid ${r}50`,
              borderRadius: '50%',
              animation: 'tRsvpPulse 2s infinite',
            },
          }),
        ],
      }),
      (0, t.jsxs)('div', {
        style: {
          background: 'white',
          padding: '14px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        },
        children: [
          (0, t.jsxs)('div', {
            style: { minWidth: 0 },
            children: [
              (0, t.jsx)('div', {
                style: {
                  fontFamily: "'Noto Serif',serif",
                  fontWeight: 600,
                  fontSize: 14,
                  color: c,
                  marginBottom: 2,
                },
                children: e,
              }),
              (0, t.jsx)('div', {
                style: {
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 11,
                  color: '#44483d',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                },
                children: a,
              }),
            ],
          }),
          (0, t.jsx)('a', {
            href: l,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
              background: r,
              color: 'white',
              padding: '8px 14px',
              borderRadius: 8,
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textDecoration: 'none',
              flexShrink: 0,
            },
            children: s,
          }),
        ],
      }),
    ],
  })
}
function _({ children: e, color: a = h }) {
  return (0, t.jsx)('p', {
    style: {
      fontFamily: "'Plus Jakarta Sans',sans-serif",
      fontSize: 10,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.25em',
      color: a,
      marginBottom: 10,
    },
    children: e,
  })
}
let C = "'Noto Serif Devanagari','Nirmala UI','Kohinoor Devanagari','Noto Sans Devanagari',serif",
  M = "'Amiri','Scheherazade New','Noto Naskh Arabic',serif"
function R({ id: e, accent: a, fontSize: r, align: o }) {
  let i = {
    fontSize: r,
    fontWeight: 400,
    color: a,
    lineHeight: 1.7,
    margin: 0,
    letterSpacing: '.01em',
    textAlign: o,
  }
  switch (e) {
    case 'bismillah':
      return (0, t.jsx)('p', {
        dir: 'rtl',
        lang: 'ar',
        style: { ...i, fontFamily: M },
        children: l.BISMILLAH_AR,
      })
    case 'om':
      return (0, t.jsx)('p', { lang: 'sa', style: { ...i, fontFamily: C }, children: 'ॐ' })
    case 'ganesha':
      return (0, t.jsx)('p', {
        lang: 'sa',
        style: { ...i, fontFamily: C, fontSize: `calc(${r} * 0.62)` },
        children: '॥ श्री गणेशाय नमः ॥',
      })
    case 'ikonkar':
      return (0, t.jsx)('p', { lang: 'pa', style: { ...i, fontFamily: C }, children: 'ੴ' })
    case 'cross':
      return (0, t.jsxs)('svg', {
        width: '20',
        height: '28',
        viewBox: '0 0 20 28',
        fill: 'none',
        'aria-hidden': !0,
        children: [
          (0, t.jsx)('rect', { x: '8.5', y: '0', width: '3', height: '28', rx: '1.5', fill: a }),
          (0, t.jsx)('rect', { x: '2', y: '6.5', width: '16', height: '3', rx: '1.5', fill: a }),
        ],
      })
    case 'crescent':
      return (0, t.jsxs)('svg', {
        width: '34',
        height: '30',
        viewBox: '0 0 34 30',
        fill: 'none',
        'aria-hidden': !0,
        children: [
          (0, t.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            fill: a,
            d: 'M15 1a14 14 0 1 0 0 28 14 14 0 0 1 0-28Zm-1.6 2.6a11.4 11.4 0 0 0 0 22.8 16.5 16.5 0 0 1 0-22.8Z',
          }),
          (0, t.jsx)('path', {
            fill: a,
            d: 'm27.5 8.2 1.5 4.3 4.3.2-3.4 2.7 1.2 4.3-3.6-2.4-3.6 2.4 1.2-4.3-3.4-2.7 4.3-.2z',
          }),
        ],
      })
    case 'star_of_david':
      return (0, t.jsxs)('svg', {
        width: '30',
        height: '30',
        viewBox: '0 0 30 30',
        fill: 'none',
        'aria-hidden': !0,
        children: [
          (0, t.jsx)('path', {
            d: 'M15 2.2 26 21.4H4z',
            stroke: a,
            strokeWidth: '1.8',
            strokeLinejoin: 'round',
          }),
          (0, t.jsx)('path', {
            d: 'M15 27.8 4 8.6h22z',
            stroke: a,
            strokeWidth: '1.8',
            strokeLinejoin: 'round',
          }),
        ],
      })
    default:
      return null
  }
}
function F({
  type: e,
  verse: a,
  verseRef: r,
  arabic: o,
  meaning: i,
  accent: n,
  color: s,
  align: d = 'center',
  marginBottom: h = 'clamp(12px,2vh,28px)',
  marginTop: c = 0,
  fontSize: p = 'clamp(24px,6.5vw,38px)',
  maxWidth: u = 380,
}) {
  let g = (e ?? '').trim(),
    m = ['bismillah', 'cross', 'om', 'ganesha', 'ikonkar', 'crescent', 'star_of_david'].includes(g)
      ? g
      : null,
    y = o?.trim(),
    b = a?.trim(),
    f = r?.trim(),
    x = i?.trim() || ('bismillah' === m ? l.BISMILLAH_MEANING_DEFAULT : '')
  return m || y || b || f
    ? (0, t.jsxs)('div', {
        style: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left' === d ? 'flex-start' : 'center',
          marginBottom: h,
          marginTop: c,
        },
        children: [
          m && (0, t.jsx)(R, { id: m, accent: n, fontSize: p, align: d }),
          m &&
            x &&
            (0, t.jsx)('p', {
              style: {
                fontFamily: "'Noto Serif',serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(11px,2.9vw,13px)',
                color: s,
                opacity: 0.8,
                lineHeight: 1.7,
                margin: '6px 0 0',
                maxWidth: u,
                textAlign: d,
              },
              children: x,
            }),
          y &&
            (0, t.jsx)('p', {
              dir: 'rtl',
              lang: 'ar',
              style: {
                fontFamily: M,
                fontSize: 'clamp(15px,4vw,23px)',
                fontWeight: 400,
                color: n,
                lineHeight: 1.9,
                margin: `${m ? 'clamp(10px,2vh,18px)' : 0} 0 0`,
                maxWidth: u,
                textAlign: 'center',
              },
              children: y,
            }),
          b &&
            (0, t.jsxs)('p', {
              style: {
                fontFamily: "'Noto Serif',serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(13px,3.4vw,15px)',
                color: s,
                opacity: 0.85,
                lineHeight: 1.8,
                margin: `${m || y ? 10 : 0}px 0 0`,
                maxWidth: u,
                textAlign: d,
              },
              children: ['“', b, '”'],
            }),
          f &&
            (0, t.jsx)('p', {
              style: {
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
                color: n,
                opacity: 0.9,
                margin: '7px 0 0',
                textAlign: d,
              },
              children: f,
            }),
        ],
      })
    : null
}
function A({
  wedding: e,
  accent: a,
  color: r,
  align: o = 'center',
  marginBottom: i,
  marginTop: n,
  fontSize: s,
  maxWidth: d,
}) {
  let h = (0, l.getReligiousOpening)(e.custom_config)
  return h.any
    ? (0, t.jsx)(F, {
        type: h.symbol,
        verse: h.text,
        verseRef: h.ref,
        arabic: h.arabic,
        meaning: h.symbolMeaning,
        accent: a,
        color: r,
        align: o,
        marginBottom: i,
        marginTop: n,
        fontSize: s,
        maxWidth: d,
      })
    : null
}
function E(e, t = 'invitation') {
  let a = e.end ?? new Date(e.start.getTime() + 108e5),
    esc = (x) => String(x ?? '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;'),
    ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Zetron Tech//Invitation//EN',
      'BEGIN:VEVENT',
      `UID:${e.uid}`,
      `DTSTAMP:${(0, n.toUtcStamp)(new Date())}`,
      `DTSTART:${(0, n.toUtcStamp)(e.start)}`,
      `DTEND:${(0, n.toUtcStamp)(a)}`,
      `SUMMARY:${esc(e.title)}`,
      `LOCATION:${esc(e.location)}`,
      `DESCRIPTION:${esc(e.details)}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`
}
function B(e, t) {
  if (!e.event_date) return null
  let a = e.custom_config?.event_end_date,
    r = [e.bride_name, e.groom_name].filter(Boolean).join(' & ')
  return {
    title: r ? `${t} — ${r}` : t,
    start: (0, i.parseEventDate)(e.event_date),
    end: a ? (0, i.parseEventDate)(a) : null,
    location: [e.venue_name, e.venue_address].filter(Boolean).join(', '),
    details: r
      ? `You are invited to the ${t.toLowerCase()} of ${r}.`
      : `You are invited to the ${t.toLowerCase()}.`,
    uid: `${e.id}-main@zetron.tech`,
  }
}
function W(e, t) {
  if (!t.date) return null
  let a = [e.bride_name, e.groom_name].filter(Boolean).join(' & ')
  return {
    title: a ? `${t.label} — ${a}` : t.label,
    start: (0, i.parseEventDate)(t.date),
    end: t.endDate ? (0, i.parseEventDate)(t.endDate) : null,
    location: [t.venue, t.address].filter(Boolean).join(', '),
    details: a
      ? `You are invited to the ${t.label.toLowerCase()} of ${a}.`
      : `You are invited to the ${t.label.toLowerCase()}.`,
    uid: `${e.id}-second@zetron.tech`,
  }
}
function N({
  event: e,
  fileName: o = 'invitation',
  accent: i = d,
  color: s,
  bg: l = 'transparent',
  label: h = 'Add to calendar',
  style: p,
}) {
  let u,
    g,
    [m, y] = (0, a.useState)(!1),
    [b, f] = (0, a.useState)(null),
    x = (0, a.useRef)(null),
    v = (0, a.useRef)(null)
  if (
    ((0, a.useEffect)(() => {
      if (!m) return
      let e = (e) => {
          let t = e.target
          x.current?.contains(t) || v.current?.contains(t) || y(!1)
        },
        t = (e) => {
          'Escape' === e.key && y(!1)
        },
        a = () => y(!1)
      return (
        document.addEventListener('mousedown', e),
        document.addEventListener('keydown', t),
        document.addEventListener('scroll', a, !0),
        window.addEventListener('resize', a),
        () => {
          ;(document.removeEventListener('mousedown', e),
            document.removeEventListener('keydown', t),
            document.removeEventListener('scroll', a, !0),
            window.removeEventListener('resize', a))
        }
      )
    }, [m]),
    !e)
  )
    return null
  let w = {
    display: 'block',
    padding: '13px 16px',
    borderRadius: 10,
    fontFamily: "'Plus Jakarta Sans',sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: c,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    textAlign: 'left',
  }
  return (0, t.jsxs)('div', {
    ref: x,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      (0, t.jsxs)('button', {
        type: 'button',
        onClick: function () {
          if (m) return void y(!1)
          let e = x.current?.getBoundingClientRect()
          if (e) {
            let t = e.bottom + 8 + 104 > window.innerHeight
            f({ x: e.left + e.width / 2, y: t ? e.top - 8 : e.bottom + 8, up: t })
          }
          y(!0)
        },
        'aria-expanded': m,
        'aria-haspopup': 'menu',
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          padding: '10px 18px',
          borderRadius: 100,
          background: l,
          border: `1px solid ${i}55`,
          color: s ?? i,
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '.14em',
          textTransform: 'uppercase',
          transition: 'opacity .18s',
          ...p,
        },
        children: [
          (0, t.jsxs)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 20 20',
            fill: 'none',
            'aria-hidden': !0,
            style: { flexShrink: 0 },
            children: [
              (0, t.jsx)('rect', {
                x: '2.6',
                y: '4.2',
                width: '14.8',
                height: '13.2',
                rx: '3.2',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
              (0, t.jsx)('path', {
                d: 'M2.6 8.4h14.8',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
              (0, t.jsx)('path', {
                d: 'M6.8 2.6v3M13.2 2.6v3',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
              (0, t.jsx)('path', {
                d: 'M10 11.4v3.4M8.3 13.1h3.4',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
            ],
          }),
          h,
        ],
      }),
      m &&
        b &&
        'u' > typeof document &&
        (0, r.createPortal)(
          (0, t.jsxs)('div', {
            ref: v,
            role: 'menu',
            style: {
              position: 'fixed',
              left: b.x,
              top: b.y,
              transform: b.up ? 'translate(-50%,-100%)' : 'translateX(-50%)',
              background: '#fffefb',
              border: `1px solid ${i}33`,
              borderRadius: 14,
              boxShadow: '0 2px 6px rgba(27,28,24,.10), 0 18px 40px -10px rgba(27,28,24,.30)',
              overflow: 'hidden',
              zIndex: 2147483e3,
              minWidth: 216,
              padding: 4,
            },
            children: [
              (0, t.jsx)('a', {
                role: 'menuitem',
                href:
                  ((u = e.end ?? new Date(e.start.getTime() + 108e5)),
                  (g = new URLSearchParams({
                    action: 'TEMPLATE',
                    text: e.title,
                    dates: `${(0, n.toUtcStamp)(e.start)}/${(0, n.toUtcStamp)(u)}`,
                    details: e.details,
                    location: e.location,
                  })),
                  `https://www.google.com/calendar/render?${g.toString()}`),
                target: '_blank',
                rel: 'noopener noreferrer',
                style: w,
                onClick: () => y(!1),
                children: 'Google Calendar',
              }),
              (0, t.jsx)('a', {
                role: 'menuitem',
                href: E(e, o),
                style: w,
                onClick: () => y(!1),
                children: 'Apple / Outlook (.ics)',
              }),
            ],
          }),
          document.body,
        ),
    ],
  })
}
function z({ children: e, delay: r = 0, style: o }) {
  let i = (0, a.useRef)(null),
    [n, s] = (0, a.useState)(!1)
  return (
    (0, a.useEffect)(() => {
      let e = i.current
      if (!e) return
      if ('u' < typeof IntersectionObserver) return void s(!0)
      let t = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && (s(!0), t.disconnect())
        },
        { threshold: 0.12 },
      )
      return (t.observe(e), () => t.disconnect())
    }, []),
    (0, t.jsx)('div', {
      ref: i,
      style: {
        opacity: +!!n,
        transform: n ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${r}s, transform .8s cubic-bezier(.16,1,.3,1) ${r}s`,
        ...o,
      },
      children: e,
    })
  )
}
function $({
  wedding: e,
  accent: a,
  textColor: r,
  subColor: o,
  bg: n = 'transparent',
  showMap: s = !0,
  padding: d = '80px 40px',
  maxWidth: h = 580,
}) {
  let c = (0, l.getSecondCeremony)(e.custom_config)
  if (!c) return null
  let p = o ?? `${r}99`,
    u = 'en-US',
    g = c.date ? (0, i.parseEventDate)(c.date) : null,
    m = c.endDate ? (0, i.parseEventDate)(c.endDate) : null,
    y = g?.toLocaleDateString(u, {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    b = (e) =>
      e.toLocaleTimeString(u, { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: !0 }),
    f = g ? (m && m.toDateString() === g.toDateString() ? `${b(g)} – ${b(m)}` : b(g)) : null
  return (0, t.jsx)('section', {
    id: 'second-ceremony',
    style: { background: n, padding: d, position: 'relative', overflow: 'hidden' },
    children: (0, t.jsxs)('div', {
      style: { maxWidth: h, margin: '0 auto', textAlign: 'center' },
      children: [
        (0, t.jsxs)(z, {
          children: [
            (0, t.jsx)(_, { color: a, children: c.label }),
            (0, t.jsx)('h2', {
              style: {
                fontFamily: "'Noto Serif',serif",
                fontSize: 34,
                fontWeight: 300,
                color: r,
                lineHeight: 1.25,
              },
              children: c.venue,
            }),
            y &&
              (0, t.jsx)('p', {
                style: {
                  fontFamily: "'Noto Serif',serif",
                  fontSize: 17,
                  color: r,
                  opacity: 0.75,
                  marginTop: 12,
                },
                children: y,
              }),
            f &&
              (0, t.jsx)('p', {
                style: {
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 12,
                  color: a,
                  marginTop: 5,
                  letterSpacing: '.12em',
                },
                children: f,
              }),
            c.address &&
              (0, t.jsx)('p', {
                style: {
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: 12,
                  color: p,
                  marginTop: 8,
                  letterSpacing: '.05em',
                  lineHeight: 1.7,
                },
                children: c.address,
              }),
            c.date &&
              (0, t.jsx)('div', {
                style: { marginTop: 20 },
                children: (0, t.jsx)(N, {
                  event: W(e, c),
                  fileName: c.label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  accent: a,
                  color: a,
                }),
              }),
          ],
        }),
        s &&
          (0, t.jsx)(z, {
            delay: 0.1,
            style: { marginTop: 30 },
            children: (0, t.jsx)(T, {
              venueName: c.venue,
              venueAddress: c.address,
              accent: a,
              mapsDirectUrl: c.mapsUrl,
            }),
          }),
      ],
    }),
  })
}
function D(e) {
  return (
    e.custom_config?.ceremony_label?.trim() || (0, s.getOccasionConfig)(e.custom_config?.occasion_type).label
  )
}
function I({
  wedding: e,
  accent: a,
  textColor: r,
  bg: o = 'transparent',
  label: i = 'Save the date',
  padding: n = '56px 40px',
}) {
  let s = B(e, D(e))
  return s
    ? (0, t.jsx)('section', {
        style: { background: o, padding: n, position: 'relative', overflow: 'hidden' },
        children: (0, t.jsx)('div', {
          style: { maxWidth: 580, margin: '0 auto', textAlign: 'center' },
          children: (0, t.jsxs)(z, {
            children: [
              (0, t.jsx)(_, { color: a, children: i }),
              (0, t.jsx)('div', {
                style: { marginTop: 6 },
                children: (0, t.jsx)(N, {
                  event: s,
                  fileName:
                    D(e)
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-') || 'invitation',
                  accent: a,
                  color: r,
                }),
              }),
            ],
          }),
        }),
      })
    : null
}
export const ALBUM_RECOMMENDATIONS = {
  heirloom: { ideal: 6, min: 4, max: 10, tip: '4–10 photos look great as a Polaroid wall' },
  candle: { ideal: 6, min: 4, max: 10, tip: '4–10 photos fill the masonry grid beautifully' },
  beach: { ideal: 8, min: 4, max: 10, tip: '6–10 photos keep the filmstrip looping nicely' },
  savedate: { ideal: 6, min: 3, max: 10, tip: '5–10 photos for a smooth scrolling carousel' },
  sakura: { ideal: 5, min: 4, max: 10, tip: '5 for the shaped grid + extras as a panorama row' },
  botanical: { ideal: 5, min: 4, max: 10, tip: '4–10 photos suit the editorial mosaic layout' },
  velvet: { ideal: 8, min: 4, max: 10, tip: '6–10 photos fill the stage board dramatically' },
  anniversary: { ideal: 7, min: 4, max: 10, tip: '1 oval locket feature + 6 gold-framed grid photos' },
  engagement: { ideal: 7, min: 4, max: 10, tip: '1 hero + 6 jewel-cut shapes in the grid' },
  birthday: { ideal: 6, min: 3, max: 10, tip: '1 hero + 5 polaroid-style tilted photos' },
  corporate: { ideal: 6, min: 4, max: 10, tip: '6 photos fill the magazine grid perfectly' },
  housewarming: { ideal: 5, min: 3, max: 10, tip: '1 arch feature + 4 warm corner-radius tiles' },
  babyshower: { ideal: 6, min: 4, max: 10, tip: '6 blob-shaped pastel photos fill the grid' },
  wonderland: {
    ideal: 6,
    min: 3,
    max: 10,
    tip: '3–10 photos show beautifully in the petal-framed Blooming Gallery',
  },
  chateau: { ideal: 6, min: 3, max: 6, tip: '6 photos fill the botanical garden journal layout perfectly' },
}
export const AddToCalendar = N
export const CountdownTimer = function ({
  targetDate: e,
  accent: r = d,
  textColor: o = c,
  bg: i = '#f5f4ed',
}) {
  let {
    d: n,
    h: s,
    m: l,
    s: h,
  } = (function (e) {
    let [t, r] = (0, a.useState)({ d: 0, h: 0, m: 0, s: 0 })
    return (
      (0, a.useEffect)(() => {
        function t() {
          let t = new Date(e).getTime() - Date.now()
          t <= 0
            ? r({ d: 0, h: 0, m: 0, s: 0 })
            : r({
                d: Math.floor(t / 864e5),
                h: Math.floor((t % 864e5) / 36e5),
                m: Math.floor((t % 36e5) / 6e4),
                s: Math.floor((t % 6e4) / 1e3),
              })
        }
        t()
        let a = setInterval(t, 1e3)
        return () => clearInterval(a)
      }, [e]),
      t
    )
  })(e)
  return (0, t.jsx)('div', {
    style: { display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' },
    children: [
      ['Days', n],
      ['Hours', s],
      ['Mins', l],
      ['Secs', h],
    ].map(([e, a]) =>
      (0, t.jsxs)(
        'div',
        {
          style: {
            background: i,
            borderRadius: 12,
            padding: '14px 18px',
            textAlign: 'center',
            minWidth: 68,
            border: `1px solid ${r}20`,
          },
          children: [
            (0, t.jsx)('div', {
              style: {
                fontFamily: "'Noto Serif',serif",
                fontSize: 34,
                fontWeight: 600,
                color: r,
                lineHeight: 1,
                letterSpacing: '-.03em',
                overflow: 'hidden',
              },
              children: (0, t.jsx)(
                'span',
                {
                  style: { display: 'block', animation: 'numFlip .3s ease' },
                  children: String(a).padStart(2, '0'),
                },
                a,
              ),
            }),
            (0, t.jsx)('div', {
              style: {
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: 9,
                textTransform: 'uppercase',
                letterSpacing: '.15em',
                color: o,
                opacity: 0.45,
                marginTop: 4,
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
export const MapBlock = T
export const OrnamentalDivider = function ({ color: e = h }) {
  return (0, t.jsxs)('div', {
    style: { display: 'flex', alignItems: 'center', gap: 14, margin: '6px 0' },
    children: [
      (0, t.jsx)('div', {
        style: { flex: 1, height: 1, background: `linear-gradient(to right,transparent,${e}45)` },
      }),
      (0, t.jsx)('svg', {
        width: '18',
        height: '18',
        viewBox: '0 0 18 18',
        fill: e,
        children: (0, t.jsx)('path', {
          d: 'M9 1.5l1.3 4.9H15l-3.8 2.8 1.45 4.5L9 11.2l-3.65 2.5 1.45-4.5L3 6.4h4.7z',
        }),
      }),
      (0, t.jsx)('div', {
        style: { flex: 1, height: 1, background: `linear-gradient(to left,transparent,${e}45)` },
      }),
    ],
  })
}
export const PhotoAlbum = function ({
  photos: e = [],
  accent: a = d,
  isGuest: r = !1,
  dark: o = !1,
  templateId: i = 'heirloom',
}) {
  let n = e.length ? e : p
  switch (i) {
    case 'candle':
      return (0, t.jsx)(g, { photos: n })
    case 'beach':
      return (0, t.jsx)(m, { photos: n })
    case 'savedate':
      return (0, t.jsx)(y, { photos: n })
    case 'sakura':
      return (0, t.jsx)(b, { photos: n })
    case 'botanical':
      return (0, t.jsx)(f, { photos: n })
    case 'velvet':
      return (0, t.jsx)(x, { photos: n })
    case 'anniversary':
      return (0, t.jsx)(v, { photos: n })
    case 'engagement':
      return (0, t.jsx)(w, { photos: n })
    case 'birthday':
      return (0, t.jsx)(j, { photos: n })
    case 'corporate':
      return (0, t.jsx)(k, { photos: n })
    case 'housewarming':
      return (0, t.jsx)(S, { photos: n })
    case 'babyshower':
      return (0, t.jsx)(L, { photos: n })
    case 'chateau':
      return (0, t.jsx)(P, { photos: n })
    default:
      return (0, t.jsx)(u, { photos: n })
  }
}
export const ReligiousBand = function ({
  wedding: e,
  accent: a,
  color: r,
  bg: o = 'transparent',
  padding: i = 'clamp(48px,9vw,76px) 32px',
  maxWidth: n = 420,
}) {
  return (0, l.getReligiousOpening)(e.custom_config).any
    ? (0, t.jsx)('section', {
        style: { background: o, padding: i, position: 'relative', overflow: 'hidden' },
        children: (0, t.jsx)('div', {
          style: { maxWidth: n, margin: '0 auto' },
          children: (0, t.jsx)(z, {
            children: (0, t.jsx)(A, { wedding: e, accent: a, color: r, marginBottom: 0, maxWidth: n }),
          }),
        }),
      })
    : null
}
export const ReligiousBlock = A
export const ReligiousHeader = F
export const ScrollHint = function ({ color: e = 'rgba(255,255,255,0.7)', style: r }) {
  let [o, i] = (0, a.useState)(!0)
  return (
    (0, a.useEffect)(() => {
      function e() {
        Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0, document.body.scrollTop || 0) >
          20 && i(!1)
      }
      return (
        window.addEventListener('scroll', e, { passive: !0 }),
        document.body.addEventListener('scroll', e, { passive: !0 }),
        () => {
          ;(window.removeEventListener('scroll', e), document.body.removeEventListener('scroll', e))
        }
      )
    }, []),
    (0, t.jsxs)('div', {
      'aria-hidden': !0,
      style: {
        position: 'absolute',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        opacity: +!!o,
        transition: 'opacity 0.6s ease',
        ...r,
      },
      children: [
        (0, t.jsx)('style', {
          children: `
        @keyframes sh-cascade {
          0%   { opacity: 0; transform: translateY(-3px); }
          35%  { opacity: 1; }
          70%  { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(7px); }
        }
      `,
        }),
        [0, 1, 2].map((a) =>
          (0, t.jsx)(
            'svg',
            {
              width: 18,
              height: 10,
              viewBox: '0 0 18 10',
              fill: 'none',
              style: {
                animation: `sh-cascade 1.7s ease-in-out ${(0.24 * a).toFixed(2)}s infinite`,
                opacity: 0,
              },
              children: (0, t.jsx)('path', {
                d: 'M1.5 1.5 L9 8.5 L16.5 1.5',
                stroke: e,
                strokeWidth: 1.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            },
            a,
          ),
        ),
      ],
    })
  )
}
export const ScrollIndicator = function ({ color: e = '#fff', bottom: r = 24, scale: o = 1 }) {
  let [i, n] = (0, a.useState)(!1)
  return (
    (0, a.useEffect)(() => {
      let e = document.querySelector('[data-scroll-end]')
      if (!e) return
      let t = new IntersectionObserver(
        ([e]) => {
          !e.isIntersecting && e.boundingClientRect.top < 0 ? n(!0) : n(e.isIntersecting)
        },
        { threshold: 0 },
      )
      return (t.observe(e), () => t.disconnect())
    }, []),
    (0, t.jsxs)('div', {
      'aria-hidden': !0,
      style: {
        position: 'fixed',
        bottom: `calc(${r}px + env(safe-area-inset-bottom, 0px))`,
        left: '50%',
        transform: 1 === o ? 'translateX(-50%)' : `translateX(-50%) scale(${o})`,
        transformOrigin: 'center bottom',
        zIndex: 80,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        opacity: +!i,
        transition: 'opacity .5s ease',
      },
      children: [
        (0, t.jsx)('style', {
          children: `
        @keyframes si-bounce {
          0%,100% { opacity: .2; transform: translateY(0); }
          50%     { opacity: 1;  transform: translateY(5px); }
        }
      `,
        }),
        (0, t.jsx)('span', {
          style: {
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontWeight: 600,
            fontSize: 7,
            letterSpacing: '.28em',
            textTransform: 'uppercase',
            color: e,
            textShadow: '0 1px 8px rgba(0,0,0,.7)',
          },
          children: 'Scroll',
        }),
        [0, 1, 2].map((a) =>
          (0, t.jsx)(
            'svg',
            {
              width: 14,
              height: 8,
              viewBox: '0 0 14 8',
              fill: 'none',
              style: {
                animation: `si-bounce 1.4s ease ${(0.16 * a).toFixed(2)}s infinite`,
                filter: 'drop-shadow(0 1px 4px rgba(0,0,0,.6))',
              },
              children: (0, t.jsx)('path', {
                d: 'M1 1l6 5.5L13 1',
                stroke: e,
                strokeWidth: 1.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            },
            a,
          ),
        ),
      ],
    })
  )
}
export const ScrollIndicatorMarker = function () {
  return (0, t.jsx)('div', {
    'data-scroll-end': !0,
    'aria-hidden': !0,
    style: { height: 0, overflow: 'hidden' },
  })
}
export const SectionLabel = _
export const TemplateExtras = function ({
  wedding: e,
  accent: a,
  textColor: r,
  subColor: o,
  bg: i = 'transparent',
  showSecondCeremony: n = !0,
  showCalendar: s = !0,
  showMap: l = !0,
  padding: d,
}) {
  return (0, t.jsxs)(t.Fragment, {
    children: [
      n &&
        (0, t.jsx)($, {
          wedding: e,
          accent: a,
          textColor: r,
          subColor: o,
          bg: i,
          showMap: l,
          ...(d ? { padding: d } : {}),
        }),
      s && (0, t.jsx)(I, { wedding: e, accent: a, textColor: r, bg: i }),
    ],
  })
}
export const heroNameFontSize = function (e, t) {
  let a = Math.max((e ?? '').trim().length, (t ?? '').trim().length)
  return a <= 4
    ? 'clamp(56px,12vw,116px)'
    : a <= 6
      ? 'clamp(52px,10vw,104px)'
      : a <= 8
        ? 'clamp(52px,8.5vw,96px)'
        : a <= 11
          ? 'clamp(40px,7vw,82px)'
          : a <= 14
            ? 'clamp(32px,5.8vw,68px)'
            : 'clamp(26px,4.8vw,56px)'
}
export const icsUrl = E
export const mainCeremonyCalendarEvent = B
export const secondCeremonyCalendarEvent = W
