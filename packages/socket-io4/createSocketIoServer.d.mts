/**
 * @param {import('http').Server} httpServer
 * @param {import('socket.io').ServerOptions} opts
 * @returns {import('socket.io').Server}
 */
export function createSocketIoServer(httpServer: import('http').Server, opts: import('socket.io').ServerOptions): import('socket.io').Server;
