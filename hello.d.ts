interface HelloOptions {
  name: string
}

declare function Hello (opts: HelloOptions): void

export { HelloOptions }
export { Hello }
