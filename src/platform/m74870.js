'use strict'
function t(e) {
  return (
    !!e &&
    (!0 === e.premium_addon ||
      (function (e) {
        return (
          !!e &&
          void 0 === e.premium_addon &&
          !!e &&
          !!(
            o(e.reception_venue_name) ||
            o(e.religious_header) ||
            !0 === e.show_bismillah ||
            'true' === e.show_bismillah ||
            o(e.verse_arabic) ||
            o(e.verse_text) ||
            o(e.bible_verse)
          )
        )
      })(e))
  )
}
let a = [
    { id: 'bismillah', label: 'Bismillah (بِسْمِ ٱللَّٰهِ)', faith: 'Islamic' },
    { id: 'crescent', label: 'Star & Crescent', faith: 'Islamic' },
    { id: 'cross', label: 'Cross', faith: 'Christian' },
    { id: 'om', label: 'Om (ॐ)', faith: 'Hindu' },
    { id: 'ganesha', label: 'Ganesha', faith: 'Hindu' },
    { id: 'ikonkar', label: 'Ik Onkar (ੴ)', faith: 'Sikh' },
    { id: 'star_of_david', label: 'Star of David', faith: 'Jewish' },
  ],
  r = new Set(a.map((e) => e.id))
function o(e) {
  return 'string' == typeof e ? e.trim() : ''
}
export const BISMILLAH_AR = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ'
export const BISMILLAH_MEANING_DEFAULT = 'In the Name of Allah, the Most Gracious, the Most Merciful'
export const RELIGIOUS_SYMBOLS = a
export const getReligiousOpening = function (e) {
  if (!t(e)) return { symbol: null, symbolMeaning: null, arabic: null, text: null, ref: null, any: !1 }
  let a = o(e.religious_header),
    i = r.has(a) ? a : null,
    n = !0 === e.show_bismillah || 'true' === e.show_bismillah,
    s = o(e.verse_arabic) || null,
    l = o(e.verse_text) || o(e.bible_verse) || null,
    d = o(e.verse_ref) || o(e.bible_ref) || null,
    h = i ?? (n ? 'bismillah' : null),
    c =
      'bismillah' === h
        ? o(e.bismillah_meaning) || o(e.religious_subtext) || null
        : o(e.religious_subtext) || null
  return { symbol: h, symbolMeaning: c, arabic: s, text: l, ref: d, any: !!(h || s || l || d) }
}
export const getSecondCeremony = function (e) {
  if (!t(e)) return null
  let a = o(e.reception_venue_name)
  return a
    ? {
        label: o(e.reception_label) || 'Reception',
        venue: a,
        address: o(e.reception_venue_address),
        mapsUrl: o(e.reception_maps_url) || null,
        date: o(e.reception_date) || null,
        endDate: o(e.reception_end_date) || null,
      }
    : null
}
export const isPremiumOn = function (e) {
  return !!e && !0 === e.premium_addon
}
export const isPremiumPaid = function (e) {
  return !!e && !0 === e.premium_paid
}
export const premiumContentVisible = t
