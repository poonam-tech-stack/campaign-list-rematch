//logger utility
//Currently, it is using console but if update is required for logging, this makes it easier
const logger = {};

const methods = ['log', 'info', 'warn', 'error'];

methods.forEach((method) => {
  logger[method] = (message) => {
    console[method](message);
  };
});

export default logger;
