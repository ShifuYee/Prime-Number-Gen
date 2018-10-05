'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const calc = require('./primeNumbers');

// templating boilerplate setup
app.engine('html', nunjucks.render); // how to render html templates
app.set('view engine', 'html'); // what file extension do our templates have
nunjucks.configure('views', { noCache: true }); // where to find the views, caching off

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static(path.join(__dirname, '/public')));

app.post('/api', function (req, res) {
  const output = calc.calcPrimeNumbers(req.body.number);
  res.send(output);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
