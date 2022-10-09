/**
 * @param {import('socket.io').Server} socketIoServer
 * @param {string} name
 * @returns
 */
export function getNamespace(socketIoServer: import('socket.io').Server, name: string): import("socket.io").Namespace<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>;
