const express = require('express');
const dotenv = require('dotenv');

// Load environemnt variables
// call config on dotenv object
// add path to location
dotenv.config({ path: './config/config.env' });

// initialize app variable with express
const app = express();

// initialize PORT variable
// set it to what is in the environment variables
const PORT = process.env.PORT || 5000;

// in order to run a server, call listen on app
// listen takes in PORT
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
