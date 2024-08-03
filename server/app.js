const express = require('express');
const compression = require('compression');
const dotenv = require('dotenv');
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
const {resolve} = require("path");

dotenv.config({ path:  './config.env'});


app.enable('trust proxy');
app.use(cors({
    origin: "https://master--accent-mark-web-site.netlify.app",
    // origin: "http://localhost:5173",
    credentials: true,
    'exposedHeaders': ['Accept', "jwt"],
    allowedHeaders:null
}))
app.use(compression())
app.use(cookieParser())
app.use(express.json());

app.use(authRoutes);
app.use(dataRoutes);
app.use(trainingRoutes);


const port = process.env.PORT || 3000;

app.listen(port,()=>{

    console.log(`Server is running on port ${port}`);
})


app.get("/user", authRequired, (req,res)=>{
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                // console.log(err.message);
                res.sendStatus(401);
            } else {
                // console.log(decodedToken);
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

process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    app.close(() => {
        console.log('💥 Process terminated!');
    });
});