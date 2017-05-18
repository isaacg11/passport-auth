let express = require('express');
let mongoose = require('mongoose');
let passport = require('passport');
let router = express.Router();
let User = mongoose.model('User');

router.post('/register', (req, res) => {
  let user = new User({
    username: req.body.username,
    email: req.body.email
  });

  user.setPassword(req.body.password);

  user.save(() => {
    res.send('success!');
  })
})

router.post('/login',(req, res, next) => {
  passport.authenticate('local', function(err, user, info){
    if(err){
      return next(err);
    }
    if(user){
      return res.json({token: user.generateJWT()});
    }
    return res.status(400).send(info);
  })(req, res, next);
});

module.exports = router;
