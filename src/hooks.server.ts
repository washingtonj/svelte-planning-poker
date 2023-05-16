import type { Handle } from '@sveltejs/kit'
import { randomUUID } from 'crypto'

const SESSION_ID_COOKIE = 'session_id'

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get(SESSION_ID_COOKIE);

  if (!sessionId) {
    event.cookies.set(SESSION_ID_COOKIE, randomUUID(), {
      path: '/',
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });
  }

  return await resolve(event)
}