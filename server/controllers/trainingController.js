var db_connect = require('../db/db_connect');
const jwt = require("../tools/jwtTool");


module.exports.increaseLevel = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                let login=decodedToken.login
                db_connect.increaseLevel(+req.params.wordId,login).then(()=>{
                    res.sendStatus(200)})
            }
        });
    } else {
        res.sendStatus(401)
    }


}

module.exports.decreaseLevel = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                let login=decodedToken.login
                db_connect.decreaseLevel(+req.params.wordId, login).then(()=>{
                    res.sendStatus(200)})
            }
        });
    } else {
        res.sendStatus(401)
    }
}
module.exports.getRandom50Words = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                db_connect.get50RandomWords().then(data=>{
                    res.status(200).json(data)})
            } else {
                let login=decodedToken.login
                db_connect.get50RandomWordsForUser( login).then(data=>{
                    res.status(200).json(data)})
            }
        });
    } else {
        db_connect.get50RandomWords().then(data=>{
            res.status(200).json(data)})
    }
}
module.exports.getRandom50WordsWithAudio = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                db_connect.get50RandomWordsWithAudio().then(data=>{
                    res.status(200).json(data)})
            } else {
                let login=decodedToken.login
                db_connect.get50RandomWordsForUserWithAudio( login).then(data=>{
                    res.status(200).json(data)})
            }
        });
    } else {
        db_connect.get50RandomWordsWithAudio().then(data=>{
            res.status(200).json(data)})
    }
}



