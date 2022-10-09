// @ts-check

/**
 * @param {import('socket.io').Server} socketIoServer
 * @param {string} name
 * @returns
 */
export function getNamespace (socketIoServer, name) {
  return socketIoServer.of(name)
}
