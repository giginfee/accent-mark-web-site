var db_connect = require('../db/db_connect');
const jwt = require("../tools/jwtTool");


module.exports.allWords = async (req, res) => {
    db_connect.getAll("Words").then(data=>{
        res.status(200).json(data)})
}

module.exports.allRules = async (req, res) => {
    db_connect.getAll("Rules").then(data=>{
        res.status(200).json(data)})
}

module.exports.wordsForRule = async (req, res) => {
    db_connect.findAllWordsForRule(+req.params.ruleId).then(data=>{
        res.status(200).json(data)})
}

module.exports.wordById = async (req, res) => {
    db_connect.getWordById(+req.params.wordId).then(data=>{
        res.status(200).json(data)})
}

module.exports.ruleForWord = async (req, res) => {
    db_connect.getRuleForWord(+req.params.wordId).then(data=>{
        res.status(200).json(data)})
}

module.exports.allWordsWithLevels = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                console.log(decodedToken);
                let login=decodedToken.login
                db_connect.getAllWordsForUserWithLevels(login).then(data=>{

                    res.status(200).json(data)})
            }
        });
    } else {
        res.sendStatus(401)
    }
}
module.exports.userProgress = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.sendStatus(401);
            } else {
                console.log(decodedToken);
                let login=decodedToken.login
                db_connect.getAllWordsForUserWithLevels(login).then(data=>{
                    let maxScore=data.length*3
                    let score=0
                    for(let word of data){
                        if("level" in word)
                            score+=word.level

                    }
                    score = +((score/maxScore*100).toFixed(2))
                    res.status(200).json({score})})
            }
        });
    } else {
        res.sendStatus(401)
    }
}