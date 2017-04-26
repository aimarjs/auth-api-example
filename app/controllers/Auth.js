
const User = require('../models/user');

exports.signup = function(req, res, next) {

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password || !name ) {
    return res.status(422).send({ error: 'Something is missing'});
  }

  User.findOne({ email }, function(err, existingUser) {

    if (!existingUser) {

      let user = new User({
        name: name,
        email: email,
        password: password
      })

      Promise.all([user.save()])
        .then(() => {
          res.status(201).send({ message: 'success!'})
        })
    } else {
      res.status(403).send({ error: existingUser.email + ' is already registered'  })
    }
  })
}

exports.login = function(req, res, next) {
  res.status(200).send({ message: 'Go ahead, start loging in!'})
}
