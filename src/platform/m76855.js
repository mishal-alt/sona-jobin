'use strict'
let t = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?w=700&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&q=75&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=75&auto=format&fit=crop',
]
let a = (e) => String(e).padStart(2, '0')
export const DEMO_ALBUM_URLS = t
export const demoPhotos = function (e = 'demo') {
  return t.map((t, a) => ({
    id: `demo-${a}`,
    wedding_id: e,
    url: t,
    caption: null,
    sort_order: a,
    created_at: '2026-01-01T00:00:00.000Z',
  }))
}
export const toUtcStamp = (e) =>
  `${e.getUTCFullYear()}${a(e.getUTCMonth() + 1)}${a(e.getUTCDate())}T${a(e.getUTCHours())}${a(e.getUTCMinutes())}${a(e.getUTCSeconds())}Z`
