// @ts-check
import http from 'http'

/**
 * @type {import('./createServer').createServer}
*/
export function createServer (app) {
  const server = http.createServer(app.callback())
  return server
}
