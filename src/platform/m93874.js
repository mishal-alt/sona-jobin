import * as __m43476 from 'react/jsx-runtime'
import * as __m71645 from 'react'
;('use strict')
var t = __m43476,
  i = __m71645
export default function ({ weddingId: e, bare: n = !1, wishesMode: o = !1, hideContact: a = !1 }) {
  let [s, r] = (0, i.useState)({
      guest_name: '',
      guest_email: '',
      guest_phone: '',
      attending: 'yes',
      guests_count: 1,
      message: '',
    }),
    [l, c] = (0, i.useState)(!1),
    [d, p] = (0, i.useState)(!1),
    [m, x] = (0, i.useState)(null)
  async function g(t) {
    ;(t.preventDefault(), c(!0), x(null))
    let i = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          wedding_id: e,
          guest_name: s.guest_name,
          guest_email: s.guest_email || null,
          guest_phone: s.guest_phone || null,
          attending: 'yes' === s.attending,
          guests_count: Number(s.guests_count) || 1,
          message: s.message || null,
        }),
      }),
      n = await i.json()
    ;(c(!1), i.ok) ? p(!0) : x(n.error || 'Failed')
  }
  return d
    ? (0, t.jsxs)('div', {
        className: n ? 'text-center py-4' : 'card text-center',
        children: [
          (0, t.jsx)('p', {
            className: 'font-headline text-3xl italic text-primary',
            children: 'Thank you!',
          }),
          (0, t.jsx)('p', {
            className: 'mt-2 opacity-80',
            children: o ? 'Your wishes have been sent!' : 'Your response has been recorded.',
          }),
        ],
      })
    : (0, t.jsxs)('form', {
        onSubmit: g,
        className: n ? 'space-y-5' : 'card space-y-4',
        children: [
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsx)('label', { className: 'label', children: 'Your name' }),
              (0, t.jsx)('input', {
                className: 'input',
                required: !0,
                value: s.guest_name,
                onChange: (e) => r((t) => ({ ...t, guest_name: e.target.value })),
              }),
            ],
          }),
          !a &&
            (0, t.jsxs)('div', {
              className: 'grid md:grid-cols-2 gap-3',
              children: [
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Email (optional)' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      type: 'email',
                      value: s.guest_email,
                      onChange: (e) => r((t) => ({ ...t, guest_email: e.target.value })),
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Phone (optional)' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      value: s.guest_phone,
                      onChange: (e) => r((t) => ({ ...t, guest_phone: e.target.value })),
                    }),
                  ],
                }),
              ],
            }),
          !o &&
            (0, t.jsxs)('div', {
              className: 'grid md:grid-cols-2 gap-3',
              children: [
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'Attending?' }),
                    (0, t.jsxs)('select', {
                      className: 'input',
                      value: s.attending,
                      onChange: (e) => r((t) => ({ ...t, attending: e.target.value })),
                      children: [
                        (0, t.jsx)('option', { value: 'yes', children: 'Yes, joyfully accepting' }),
                        (0, t.jsx)('option', { value: 'no', children: 'Regretfully declining' }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)('div', {
                  children: [
                    (0, t.jsx)('label', { className: 'label', children: 'How many guests?' }),
                    (0, t.jsx)('input', {
                      className: 'input',
                      type: 'number',
                      min: 0,
                      max: 20,
                      value: s.guests_count,
                      onChange: (e) => r((t) => ({ ...t, guests_count: Number(e.target.value) })),
                    }),
                  ],
                }),
              ],
            }),
          (0, t.jsxs)('div', {
            children: [
              (0, t.jsx)('label', {
                className: 'label',
                children: o ? 'Your congratulatory message' : 'Message to the couple (optional)',
              }),
              (0, t.jsx)('textarea', {
                className: 'input min-h-[80px]',
                required: o,
                value: s.message,
                onChange: (e) => r((t) => ({ ...t, message: e.target.value })),
              }),
            ],
          }),
          m && (0, t.jsx)('p', { className: 'text-red-600 text-sm', children: m }),
          (0, t.jsx)('button', {
            className: 'btn-primary w-full',
            disabled: l,
            children: l ? 'Submitting…' : o ? 'Send Wishes 🎉' : 'Submit RSVP',
          }),
        ],
      })
}
