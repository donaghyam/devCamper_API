const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load environemnt variables
// call config on dotenv object
// add path to location
dotenv.config({ path: './config/config.env' });

// initialize app variable with express
const app = express();

// Dev logging middleware - 'Morgan' - similiar to built logger, with extra features
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
// connect to bootcamps file
app.use('/api/v1/bootcamps', bootcamps);
// we no longer need '/api/v1/bootcamps' in the bootcamps file

// initialize PORT variable
// set it to what is in the environment variables
const PORT = process.env.PORT || 5000;

// in order to run a server, call listen on app
// listen takes in PORT
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
