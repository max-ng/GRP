const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../config/config');

function jwtVerify(token, res, callback) {
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.jwtKey, (err, decoded) => {
      if (err) {
        res.status(403).send({success: false, message: 'Failed to authenticate token.'});
      } else {
        // Success
        callback(decoded);
      }
    });
  } else {
    // if there is no token, return an error
    // res.status(403).send({'success' : false, 'message' : 'No token provided.'});
    res.replyForbidden('No token provided');
  }
}

function jwtSign(user) {
  return jwt.sign(user, config.jwtKey);
}

exports.jwtVerify = jwtVerify;
exports.jwtSign = jwtSign;
