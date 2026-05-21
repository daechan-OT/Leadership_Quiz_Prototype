/**
 * iframeBridge — minimal postMessage contract between the Leadership Quiz
 * and a host page (e.g. Articulate Rise 360 Code Block).
 *
 * Outbound (app → host):
 *   { type: 'leadershipQuiz:ready' }
 *   { type: 'leadershipQuiz:start' }
 *   { type: 'leadershipQuiz:results', topStyles, allScores }
 *   { type: 'leadershipQuiz:restart' }
 *   { type: 'leadershipQuiz:resize', width, height, desiredHeight }
 *   { type: 'leadershipQuiz:wheel',  deltaY }
 *   { type: 'complete' }   <-- NOT namespaced; Rise's completion listener key
 *
 * Inbound (host → app):
 *   { type: 'leadershipQuiz:start' }
 *   { type: 'leadershipQuiz:restart' }
 *
 * The host may pass ?parentOrigin=<encoded> in the iframe URL to lock messages
 * to a specific origin. Otherwise events go to '*'.
 */

const NAMESPACE = 'leadershipQuiz'

const ASPECT_RATIO = 1.4
const MIN_DESIRED_HEIGHT = 600
const MAX_DESIRED_HEIGHT = 900

function readTargetOrigin() {
  if (typeof window === 'undefined') return '*'
  try {
    const p = new URLSearchParams(window.location.search)
    const explicit = p.get('parentOrigin')
    if (explicit) return decodeURIComponent(explicit)
  } catch {}
  return '*'
}

const targetOrigin = readTargetOrigin()

function inIframe() {
  try { return typeof window !== 'undefined' && window.parent !== window }
  catch { return true }
}

function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)) }

export function emit(event, payload = {}) {
  if (typeof window === 'undefined' || !inIframe()) return
  try {
    window.parent.postMessage(
      { type: `${NAMESPACE}:${event}`, ...payload },
      targetOrigin
    )
  } catch {}
}

// Rise's completion field listens for a bare { type: 'complete' } — no namespace.
// Idempotent: Rise ignores repeat fires.
export function emitComplete() {
  if (typeof window === 'undefined' || !inIframe()) return
  try { window.parent.postMessage({ type: 'complete' }, targetOrigin) } catch {}
}

export function reportSize() {
  if (typeof window === 'undefined' || !inIframe()) return
  const width = window.innerWidth
  const height = window.innerHeight
  const desiredHeight = Math.round(
    clamp(width * ASPECT_RATIO, MIN_DESIRED_HEIGHT, MAX_DESIRED_HEIGHT)
  )
  emit('resize', { width, height, desiredHeight })
}

export function onCommand(handler) {
  if (typeof window === 'undefined') return () => {}
  const listener = (e) => {
    const data = e.data
    if (!data || typeof data !== 'object' || typeof data.type !== 'string') return
    if (!data.type.startsWith(`${NAMESPACE}:`)) return
    if (targetOrigin !== '*' && e.origin !== targetOrigin) return
    handler(data.type.slice(NAMESPACE.length + 1), data)
  }
  window.addEventListener('message', listener)
  return () => window.removeEventListener('message', listener)
}

export const NAMESPACE_PREFIX = NAMESPACE
