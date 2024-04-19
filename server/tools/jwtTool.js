const SECRET = process.env.SECRET || "SECRET";

const jwt = require('jsonwebtoken');

// create json web token
module.exports.MAXAGE =  24 * 60 * 60; // 1 day
module.exports.createToken = (login) => {
    return jwt.sign({ login }, SECRET, {
        expiresIn: this.MAXAGE
    });
};
module.exports.verify = (token, callback) => {
    jwt.verify(token, SECRET,(err, decodedToken)=>callback(err, decodedToken))
};

