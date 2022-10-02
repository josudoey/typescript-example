// @ts-check
import { Server } from 'socket.io'

/**
 * @type {import('./createSocketIoServer.d').createSocketIoServer}
 */
export function createSocketIoServer (httpServer, opts) {
  const socketIoServer = new Server(httpServer, opts)
  return socketIoServer
}
