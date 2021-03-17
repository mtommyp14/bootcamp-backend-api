const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const morgan = require('morgan');
const errorHandler =  require('./middleware/error')
const colors = require('colors');

//Env
dotenv.config({
  path: './config/config.env',
});

//router file
const bootcamp = require('./routes/bootcamp');

//connect framework
const app = express();

//Body Parser
app.use(express.json());

//Connect MongoDB
connectDB();

//Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount Router
app.use('/api/v1/bootcamp', bootcamp);


app.use(errorHandler);

//Running Port
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

//Haddle Error from mongo
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close Sever & Exir Process
  server.close(() => process.exit(1));
});
