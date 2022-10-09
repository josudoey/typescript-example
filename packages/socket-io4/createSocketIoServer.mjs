// @ts-check
import { Server } from 'socket.io'

/**
 * @param {import('http').Server} httpServer
 * @param {import('socket.io').ServerOptions} opts
 * @returns {import('socket.io').Server}
 */
export function createSocketIoServer (httpServer, opts) {
  const socketIoServer = new Server(httpServer, opts)
  return socketIoServer
}
