var db_connect = require('../db/db_connect');
let hashPassword = require('../tools/hashPassword');
let jwt = require('../tools/jwtTool');

let db


async function checkConnection(){
    if (!db){
        db = await db_connect.connectToDatabase()
    }

}
module.exports.signup = async (req, res) => {
    await checkConnection()

    let {login,password}= req.body
    password = await hashPassword.hash(password)
    db_connect.addNewUser(login,password, db).then(created=>{
        if(created){
            const TOKEN = jwt.createToken(login)

            // console.log(TOKEN)
            res.cookie('jwt', TOKEN, { maxAge: jwt.MAXAGE * 1000 });
            res.setHeader('jwt', TOKEN);
            res.status(201).send(`User ${login} created`)
        }else{
            res.cookie('jwt', "",{maxAge: 0 });
            res.status(409).send("User not created")

        }
    })
}

module.exports.login = async (req, res) => {
    await checkConnection()

    let {login,password}= req.body
    db_connect.getUserByLogin(login, db).then(user=>{
        if(user){
            hashPassword.compare(password, user.password).then(auth=>{
                if(auth) {
                    const TOKEN = jwt.createToken(login)
                    res.cookie('jwt', TOKEN, {  maxAge: jwt.MAXAGE * 1000 });
                    res.setHeader('jwt', TOKEN);
                    res.status(200).send(`User ${login} was found`)
                }else {
                    res.cookie('jwt', "",{  maxAge: 0 });
                    res.status(404).send("User not found")
                }
            })
        }else{
            res.cookie('jwt', "",{  maxAge: 0 });
            res.status(404).send("User not found")

        }

    })
}

module.exports.logout = async (req, res) => {
         res.cookie('jwt', "",{ maxAge: 0 });
         res.sendStatus(200)
}