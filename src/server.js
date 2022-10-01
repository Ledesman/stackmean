const { application } = require('express');
const express= require ('express');
const morgan = require('morgan');
const Ruteo = require('./routes/routes')


const app = express();


//midelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.set('port',process.env.PORT || 4000)

app.use(Ruteo)


module.exports = app;