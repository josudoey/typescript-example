import { Server } from 'socket.io'
export function createSocketIoServer (httpServer: http.Server, opts: socketIo.ServerOptions): Server
