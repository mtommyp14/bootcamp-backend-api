const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')

//router file
const bootcamp = require('./routes/bootcamp');

dotenv.config({ path: './config/config.env' });

const app = express();

//Middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//Mount Router
app.use('/api/v1/bootcamp', bootcamp);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
