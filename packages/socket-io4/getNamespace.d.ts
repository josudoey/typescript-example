import { Server, Namespace } from 'socket.io'

export function getNamespace (socketIoServer: Server, name: string): Namespace
