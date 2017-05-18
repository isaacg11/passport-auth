let express = require('express');
let router = express.Router();
let mongodb = require('mongodb');
let Database = require('./db');

router.post('/', (req, res) => {
  let movie = req.body;
  movie_id = new mongodb.ObjectID();
  Database.db.collection('movies').save(movie).then((newMovie) => {
    res.send(newMovie);
  })
})

router.put('/', (req, res) => {
  let movie = req.body;
  movie_id = new mongodb.ObjectID(req.body._id);
  Database.db.collection('movies').save(movie).then((updatedMovie) => {
    res.send(updatedMovie);
  })
})

router.get('/', (req, res) => {
  Database.db.collection('movies').find().toArray().then((allMovies) => {
    res.json(allMovies);
  })
})

router.delete('/:id', (req, res) => {
  let movie_id = new mongodb.ObjectID(req.body._id);
  Database.db.collection('movies').remove({_id: req.params['id']}).then((deleteMovie) => {
    res.send(deleteMovie);
  })
})

module.exports = router;
