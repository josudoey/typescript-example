// @ts-check

/**
 * @type {import('./getNamespace').getNamespace}
 */
export function getNamespace (socketIoServer, name) {
  return socketIoServer.of(name)
}
