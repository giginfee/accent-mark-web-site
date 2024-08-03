let jwt = require('../tools/jwtTool');

const authRequired = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(req.cookies)
    res.setHeader('Access-Control-Allow-Origin', 'https://accent-mark-web-site.netlify.app');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (token) {
        jwt.verify(token,  (err, decodedToken) => {
            if (err) {
                // console.log(err.message);
                res.sendStatus(401);
            } else {
                // console.log(decodedToken);
                next();
            }
        });
    } else {
        res.sendStatus(401)
    }
};

module.exports = { authRequired };