const express = require('express');
const authRoutes = require('./routes/authRoutes');
const dataRoutes = require('./routes/dataRoutes');
const trainingRoutes = require('./routes/trainingRoutes');

const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser")
var bodyParser = require('body-parser')
var jwt = require('./tools/jwtTool')
var db_connect = require('./db/db_connect');
var {authRequired} = require('./middleware/authMiddleware');


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    'exposedHeaders': ['Accept', "jwt"],
}))
app.use(cookieParser())
app.use(express.json());

app.use(authRoutes);
app.use(dataRoutes);
app.use(trainingRoutes);


app.listen(3000)
console.log('Server is running on port 3000');

app.get("/user", authRequired, (req,res)=>{
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                console.log(decodedToken);
                res.status(200).json(
                    {
                    login:decodedToken.login
                    })
            }
        });
    } else {
        res.sendStatus(401)
    }
})