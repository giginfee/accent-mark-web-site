var db_connect = require('../db/db_connect');
const jwt = require("../tools/jwtTool");

let db


async function checkConnection(){
    if (!db){
        db = await db_connect.connectToDatabase()
    }
}

module.exports.increaseLevel = async (req, res) => {
    await checkConnection()

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                let login=decodedToken.login
                db_connect.increaseLevel(+req.params.wordId,login, db).then(()=>{
                    res.sendStatus(200)})
            }
        });
    } else {
        res.sendStatus(401)
    }


}

module.exports.decreaseLevel = async (req, res) => {
    await checkConnection()

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                let login=decodedToken.login
                db_connect.decreaseLevel(+req.params.wordId, login, db).then(()=>{
                    res.sendStatus(200)})
            }
        });
    } else {
        res.sendStatus(401)
    }
}
module.exports.getRandom50Words = async (req, res) => {
    await checkConnection()

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                db_connect.get50RandomWords(db).then(data=>{
                    res.status(200).json(data)})
            } else {
                let login=decodedToken.login
                db_connect.get50RandomWordsForUser( login, db).then(data=>{
                    res.status(200).json(data)})
            }
        });
    } else {
        db_connect.get50RandomWords(db).then(data=>{
            res.status(200).json(data)})
    }
}
module.exports.getRandom50WordsWithAudio = async (req, res) => {
    await checkConnection()

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                db_connect.get50RandomWordsWithAudio( db).then(data=>{
                    res.status(200).json(data)})
            } else {
                let login=decodedToken.login
                db_connect.get50RandomWordsForUserWithAudio( login, db).then(data=>{
                    res.status(200).json(data)})
            }
        });
    } else {
        db_connect.get50RandomWordsWithAudio(db).then(data=>{
            res.status(200).json(data)})
    }
}



