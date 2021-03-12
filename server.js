const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//Env
dotenv.config({
  path: './config/config.env',
});

//router file
const bootcamp = require('./routes/bootcamp');

const app = express();

connectDB();

//Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount Router
app.use('/api/v1/bootcamp', bootcamp);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//Hadle Error
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.massage}`);
  //Close Sever & Exir Process
  server.close(() => process.exit(1));
});
