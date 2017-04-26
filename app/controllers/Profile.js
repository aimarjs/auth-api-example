const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const config = require('../../config');

exports.Profile = function(req, res) {

  const token = getToken(req.headers)

  if (token) {
    const decoded = jwt.decode(token, config.secret);
    const userId = decoded.sub;

    User.findById(userId, (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Could not process this request'
        })
      }

      return res.status(200).json({
        success: true,
        name: user.name,
        email: user.email
      })
    })
  }
}

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
