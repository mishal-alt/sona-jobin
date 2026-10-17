import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
;('use strict')
var t = __m43476,
  r = __m71645
function n({ paused: e, onToggle: r }) {
  return (0, t.jsx)('button', {
    onClick: r,
    'aria-label': e ? 'Play music' : 'Pause music',
    title: e ? 'Play music' : 'Pause music',
    style: {
      position: 'fixed',
      bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
      right: 24,
      zIndex: 9998,
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'rgba(15,15,15,.65)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,.18)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 18px rgba(0,0,0,.30)',
      transition: 'opacity .2s, transform .15s',
    },
    children: e
      ? (0, t.jsxs)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: [
            (0, t.jsx)('path', {
              d: 'M9 18V5l12-2v13',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            (0, t.jsx)('circle', { cx: '6', cy: '18', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('circle', { cx: '18', cy: '16', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('line', {
              x1: '3',
              y1: '3',
              x2: '21',
              y2: '21',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
            }),
          ],
        })
      : (0, t.jsxs)('svg', {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          children: [
            (0, t.jsx)('path', {
              d: 'M9 18V5l12-2v13',
              stroke: 'currentColor',
              strokeWidth: '1.8',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }),
            (0, t.jsx)('circle', { cx: '6', cy: '18', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
            (0, t.jsx)('circle', { cx: '18', cy: '16', r: '3', stroke: 'currentColor', strokeWidth: '1.8' }),
          ],
        }),
  })
}
export default function ({ src: e, startTime: o = 0, endTime: i, eagerStart: c = !1, children: s }) {
  let d = (0, r.useRef)(null),
    [a, u] = (0, r.useState)(!1),
    [l, h] = (0, r.useState)(!1)
  return (
    (0, r.useEffect)(() => {
      let t = d.current
      if (!t || !e) return
      let r = 'number' == typeof i && i > o
      function n() {
        t.currentTime >= i && (t.currentTime = o)
      }
      ;(r || (t.loop = !0), r && t.addEventListener('timeupdate', n))
      let s = !1
      function a() {
        ;(u(!0), h(!1))
        let e = 0,
          r = setInterval(() => {
            ;((t.volume = e = Math.min(e + 0.04, 0.38)), e >= 0.38 && clearInterval(r))
          }, 80)
      }
      function l() {
        s ||
          ((s = !0),
          document.removeEventListener('app:ready', p),
          window.removeEventListener('click', m),
          (t.currentTime = o),
          (t.volume = 0),
          (t.muted = !1),
          t.paused
            ? c
              ? t
                  .play()
                  .then(a)
                  .catch(() => {
                    ;((t.muted = !0),
                      t
                        .play()
                        .then(() => {
                          ;((t.muted = !1), a())
                        })
                        .catch(() => {
                          ;((s = !1),
                            document.addEventListener('app:ready', p, { once: !0 }),
                            window.addEventListener('click', m, { once: !0 }))
                        }))
                  })
              : t
                  .play()
                  .then(a)
                  .catch(() => {
                    ;((s = !1),
                      (t.muted = !0),
                      document.addEventListener('app:ready', p, { once: !0 }),
                      window.addEventListener('click', m, { once: !0 }))
                  })
            : a())
      }
      function p() {
        l()
      }
      function m() {
        l()
      }
      return (
        document.addEventListener('app:ready', p, { once: !0 }),
        window.addEventListener('click', m, { once: !0 }),
        () => {
          ;(document.removeEventListener('app:ready', p),
            window.removeEventListener('click', m),
            r && t.removeEventListener('timeupdate', n),
            t.pause())
        }
      )
    }, [e, o, i]),
    (0, t.jsxs)(t.Fragment, {
      children: [
        e &&
          (0, t.jsx)('audio', {
            ref: d,
            src: e,
            preload: 'metadata',
            autoPlay: !0,
            muted: !0,
            style: { display: 'none' },
          }),
        s,
        a &&
          (0, t.jsx)(n, {
            paused: l,
            onToggle: function () {
              let e = d.current
              e && (e.paused ? (e.play().catch(() => {}), h(!1)) : (e.pause(), h(!0)))
            },
          }),
      ],
    })
  )
}
