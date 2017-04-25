exports.signup = function(req, res, next) {
  res.status(200).send({ message: 'Go ahead, start siging up!'})
  console.log(req.body);
}

exports.login = function(req, res, next) {
  res.status(200).send({ message: 'Go ahead, start loging in!'})
}
