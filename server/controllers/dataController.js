var db_connect = require('../db/db_connect');
const jwt = require("../tools/jwtTool");
const audioCompare = require("../tools/compareAudio");
const fs = require('fs');

let db


async function checkConnection(){
    if (!db){
        db = await db_connect.connectToDatabase()
    }

}
module.exports.allWords = async (req, res) => {
    await checkConnection()

    db_connect.getAll("Words", db).then(data=>{
        res.status(200).json(data)})
}

module.exports.allRules = async (req, res) => {
    await checkConnection()

    db_connect.getAll("Rules", db).then(data=>{
        res.status(200).json(data)})
}

module.exports.wordsForRule = async (req, res) => {
    await checkConnection()

    db_connect.findAllWordsForRule(+req.params.ruleId, db).then(data=>{
        res.status(200).json(data)})
}

module.exports.wordById = async (req, res) => {
    await checkConnection()

    db_connect.getWordById(+req.params.wordId, db).then(data=>{
        res.status(200).json(data)})
}

module.exports.ruleForWord = async (req, res) => {
    await checkConnection()

    db_connect.getRuleForWord(+req.params.wordId, db).then(data=>{
        res.status(200).json(data)})
}

module.exports.createAudio = async (req, res) => {
    await checkConnection()

    try {
        if (!req.body) {
            return res.status(400).send('Відсутнє тіло запиту.');
        }
        let wordId=req.body.id

        fs.writeFileSync('file.webm', Buffer.from(req.body.audio.replace('data:audio/webm;codecs=opus;base64,', ''), 'base64'));
        audioCompare.convertToWav('file').then(async()=>
        {

            let answerId= await audioCompare.getAnswerId("file.wav",wordId)

            res.status(200).json({answerId, cost3:0, result:0<=1000});
        })



    } catch (error) {
        console.error('CreateAudio error:', error);
        res.status(500).send();
    }
}





module.exports.allWordsWithLevels = async (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, (err, decodedToken) => {
            if (err) {
                // console.log(err.message);
                res.sendStatus(401);
            } else {
                // console.log(decodedToken);
                let login=decodedToken.login
                db_connect.getAllWordsForUserWithLevels(login, db).then(data=>{

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
                // console.log(err.message);
                res.sendStatus(401);
            } else {
                // console.log(decodedToken);
                let login=decodedToken.login
                db_connect.getAllWordsForUserWithLevels(login, db).then(data=>{
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