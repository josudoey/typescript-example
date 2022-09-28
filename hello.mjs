// @ts-check
// @see https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html

/**
 * @type {import("./hello").Hello}
 */
function hello (opts) {
  const { name } = opts
  console.log(`hi! ${name}~`)
}

export { hello }
