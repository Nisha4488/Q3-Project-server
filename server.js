const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const knex = require('./db/knex');

const index = require('./routes/indexRoutes');
const sales = require('./routes/salesRoutes');
const users = require('./routes/usersRoutes');
const purchases = require('./routes/purchasesRoutes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/sales', sales);
app.use('/users', users);
app.use('/purchases', purchases);

app.listen(port, function() {
  console.log("listening on port: ", port);
})