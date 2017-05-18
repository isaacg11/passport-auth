let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let passport = require('passport');
let port = 3000;
require('./user');
require('./passport');

let movies = require('./movies');
let users = require('./users');

let app = express();

app.set('view engine', 'ejs');
mongoose.connect('mongodb://isaac:123@ds157987.mlab.com:57987/codercamps-db');
app.use(bodyParser.json());
app.use(passport.initialize());


app.get('/', ((req, res) => {
  res.render('index');
}))

app.get('/about', ((req, res) => {
  res.render('about');
}))

app.use('/movies', movies);
app.use('/users', users);

app.listen(port, function () {
  console.log('server connected')
})
