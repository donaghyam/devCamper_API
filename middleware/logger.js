// @desc    Logs request to console

const logger = (req, res, next) => {
  req.hello = 'Hello';
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  );
  // in every middleware you create, you must call next
  // this tells it to move on to the next piece of middleware in the cycle
  next();
};

module.exports = logger;
