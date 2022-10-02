// @ts-check
import Koa from 'koa'

/**
 * @type {import('./createApp').createApp}
 */
export function createApp () {
  const app = new Koa()
  return app
}
