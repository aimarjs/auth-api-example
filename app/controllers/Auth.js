exports.signup = function(req, res, next) {
  res.status(200).send({ message: 'Go ahead, start siging up!'})
}

exports.login = function(req, res, next) {
  res.status(200).send({ message: 'Go ahead, start loging in!'})
}
