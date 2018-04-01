/**
 * Debugger that only logs if the environment variable DEBUG is set to true.
 */
module.exports = {
  log: (...args) => {
    if (process.env.DEBUG === 'true') {
      console.log(...args); /*eslint-disable-line no-console*/
    }
  }
};
