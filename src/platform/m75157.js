'use strict'
export const parseEventDate = function (e) {
  let t = e.trim()
  if (!t.includes('T') || /Z$|[+-]\d{2}:\d{2}$/.test(t)) return new Date(t)
  let a = /T\d{2}:\d{2}$/.test(t) ? `${t}:00` : t
  return new Date(`${a}+05:30`)
}
