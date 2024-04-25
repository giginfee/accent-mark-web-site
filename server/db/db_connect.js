const MongoClient = require('mongodb').MongoClient;





const DBNAME="AccentMark"
async function connectToDatabase() {
    const client = new MongoClient("mongodb://127.0.0.1:27017/");
    await client.connect();
    return client.db(DBNAME);
}

decreaseLevel(3, "adm").then()
async function getShowDate(idWord, login){
    try {

        const db = await  connectToDatabase()
        const collection = db.collection("WordsLevelForUser");
        const cursor = await collection.find({ login, idWord }).toArray();
        if(cursor.length===0)
            return new Date()
        return cursor[0].nextShowDate
    }catch(err) {
        return err;
    } finally {

    }
}

async function getLevel(idWord, login){
    try {

        const db =  await  connectToDatabase()
        const collection = db.collection("WordsLevelForUser");
        const cursor = await collection.find({ login, idWord }).toArray();
        if(cursor.length===0)
            return 0
        return cursor[0].level
    }catch(err) {
        return err;
    } finally {

    }
}



async function increaseLevel(idWord, login){
    let nextShowDate =new Date()
    let nextLevel=await getLevel(idWord, login)+1
    nextLevel=nextLevel===4?3:nextLevel
    let dateDiff=0
    switch (nextLevel){
        case 1:
            dateDiff = 2
            break
        case 2: dateDiff=7
            break
        case 3: dateDiff=15
            break
    }
    nextShowDate.setDate((new Date()).getDate()+dateDiff)

    try {

        const db =  await  connectToDatabase()
        let collection = db.collection("WordsLevelForUser");
        if(nextLevel===1){
            await collection.insertOne({idWord, login, nextShowDate, level:nextLevel})
        }
        else{
            await collection.updateOne({idWord, login}, { $set: {  nextShowDate,level:nextLevel }        })
        }


    }catch(err) {
        return err;
    } finally {

    }

}
async function decreaseLevel(idWord, login){
    let nextShowDate =new Date()
    let nextLevel=await getLevel(idWord, login)-1
    nextLevel=nextLevel===-1?0:nextLevel


    try {

        const db = await  connectToDatabase()
        let collection = db.collection("WordsLevelForUser");
        if(nextLevel===0){
            await collection.deleteOne({idWord, login})
        }else{
            await collection.updateOne({idWord, login}, { $set: {  level:nextLevel }        })
        }


    }catch(err) {
        return err;
    } finally {

    }

}




async function getAll(collName) {
    try {

        const db =  await  connectToDatabase()
        const collection = db.collection(collName);
        const cursor = collection.find();
        return await cursor.toArray();
    }catch(err) {
        return err;
    } finally {

    }
}
async function getUserByLogin(login) {
    try {

        const db =  await  connectToDatabase()
        const collection = db.collection("Users");
        const cursor = collection.find({ login: login });
        let res= await cursor.toArray();
        if(res.length!==0)
            return res[0]
        return null
    }catch(err) {
        return err;
    } finally {

    }
}
async function getWordById(id) {
    try {

        const db = await  connectToDatabase()
        const collection = db.collection("Words");
        const cursor = collection.find({ id });
        let res= await cursor.toArray();
        if(res.length!==0)
            return res[0]
        return null
    }catch(err) {
        return err;
    } finally {

    }
}

async function addNewUser(login, password) {
    let user = await getUserByLogin(login)
    try {

        const db = await  connectToDatabase()
        const collection = db.collection("Users");
        console.log("user")
        console.log(user)
        if(!user) {
            await collection.insertOne({login, password});
            return true
        }
        return false

    }catch(err) {
        return err;
    } finally {

    }
}


const NUMBER=10
async function get50RandomWords() {
    let words = await getAll("Words")
    if (words.length<=NUMBER)
        return words
    const randomWords = getNRandomFromArray(words,NUMBER);

    return randomWords
}


async function get50RandomWordsForUser(login) {
    let words = await getAllWordsForUserToShow(login)
    if (words.length<=NUMBER)
        return words
    const randomWords = getNRandomFromArray(words,NUMBER);

    return randomWords
}



function getNRandomFromArray(array,n){
    const randomArray= [];
    const indices = new Set();

    while (indices.size < n) {
        const index = Math.floor(Math.random() * array.length);
        if (!indices.has(index)) {
            indices.add(index);
            randomArray.push(array[index]);
        }
    }
    return randomArray
}


async function getAllWordsForUserToShow(login) {
    try {

        const db =  await  connectToDatabase()
        const collection1 = db.collection("Words");
        const collection2 = db.collection("WordsLevelForUser");

        let pipeline = [
            {
                $match: {
                    login: { $eq: login },
                    nextShowDate:{$gte: new Date() }
                }
            }
        ];
        let result = await collection2.aggregate(pipeline).toArray();
        let indexesOfThoseToNotShow = result.map(obj=>obj.idWord);
        pipeline = [
            {
                $match: {
                    id: { $nin: indexesOfThoseToNotShow }
                }
            },
            {
                $project: {
                    '_id':0
                }
            }
        ];
         result = await collection1.aggregate(pipeline).toArray();
        return result
    } finally {
        await  connectToDatabase()
    }
}

async function getAllWordsForUserWithLevels(login) {
    try {

        const db = await  connectToDatabase()
        const collection1 = db.collection("Words");
        const collection2 = db.collection("WordsLevelForUser");



        let pipeline = [
            {
                $lookup: {
                    from: 'Words',
                    localField: 'idWord',
                    foreignField: 'id',
                    as: 'word'
                }
            },{
                $match: {
                    login: { $eq: login }
                }
            },
            {
                $project: {
                    'word.id': 1,
                    'word.word':1,
                    'word.answerInd':1,
                    'word.options': 1,
                    '_id':0,
                    level:1
                }
            }
        ];
        let result = await collection2.aggregate(pipeline).toArray();
        result = result.map(obj=> {
            let objNew= obj.word[0]
            objNew.level=obj.level
            return objNew});
        let indexesOfThoseWithLevels = result.map(obj=>obj.id);

        pipeline = [
            {
                $match: {
                    id: { $nin: indexesOfThoseWithLevels }
                }
            },
            {
                $project: {
                    '_id':0
                }
            }
        ];
        let result2 = await collection1.aggregate(pipeline).toArray();
        return result.concat(result2)
    } finally {

    }
}

async function findAllWordsWithoutRule(){
    let words = await getAll("Words")
    let wordsAndRules = await getAll("WordsAndRules")
    const uniqueIds = new Set(wordsAndRules.map(obj => obj.idWord));
    return words.filter(obj => !uniqueIds.has(obj.id));
}


//return template
// [
//   {
//     id: 135,
//     word: 'одинАдцять',
//     answerInd: 1,
//     options: [ 'Другий', 'Третій', 'Другий або третій' ]
//   },...
// ]
async function findAllWordsForRule(ruleId){
    try {

        const db =   await  connectToDatabase()
        const collection2 = db.collection("WordsAndRules");

        const pipeline = [
            {
                $lookup: {
                    from: 'Words',
                    localField: 'idWord',
                    foreignField: 'id',
                    as: 'word'
                }
            },{
                $match: {
                    idRule: { $eq: ruleId }
                }
            },
            {
                $project: {
                    'word.id': 1,
                    'word.word':1,
                    'word.answerInd':1,
                    'word.options': 1,
                    '_id':0

                }
            }
        ];
        const result = await collection2.aggregate(pipeline).toArray();
        return result.map(obj=>obj.word[0]);
    }catch(err) {
        return err;
    } finally {

    }

}




// unlikely to use
// return template
//  [{
//     word: 'піддАний (іменник, істота)',
//     answerInd: 1,
//     options: [ 'Перший', 'Другий', 'Третій' ],
//     rule: {
//       id: 12,
//       text: 'У деяких словах наголос змінюється залежно від значення.'
//     }
//   },..]
async function getAllWordsWithRules() {
    try {

        const db =  await  connectToDatabase()
        const collection1 = db.collection("Words");
        const collection2 = db.collection("WordsAndRules");
        const collection3 = db.collection("Rules");

        const pipeline = [
            {
                $lookup: {
                    from: 'Words',
                    localField: 'idWord',
                    foreignField: 'id',
                    as: 'word'
                }
            },{
                $lookup: {
                    from: 'Rules',
                    localField: 'idRule',
                    foreignField: 'id',
                    as: 'rule'
                }
            },
            {
                $project: {
                    'rule.id': 1,
                    'rule.text': 1,
                    'word.word':1,
                    'word.answerInd':1,
                    'word.options': 1,
                    '_id':0
                }
            }
        ];

        const result = await collection2.aggregate(pipeline).toArray();
        return result.map(obj=>{
            let objNew= obj.word[0]
            objNew.rule=obj.rule[0]
            return objNew});

    } finally {

    }
}


// return template
// {
//   id: 16,
//   text: 'У прикметників (особливо коротких) зазвичай наголос падає на останній склад -Ий.'
// }
async function getRuleForWord(wordId) {
    try {
        const db =  await  connectToDatabase()
        const collection2 = db.collection("WordsAndRules");
        const collection3 = db.collection("Rules");

        const pipeline = [
            {
                $lookup: {
                    from: 'Words',
                    localField: 'idWord',
                    foreignField: 'id',
                    as: 'word'
                }
            },{
                $lookup: {
                    from: 'Rules',
                    localField: 'idRule',
                    foreignField: 'id',
                    as: 'rule'
                }
            },{
                $match: {
                    idWord: { $eq: wordId }
                }
            },
            {
                $project: {
                    'rule.id': 1,
                    'rule.text': 1,
                    '_id':0
                }
            }
        ];

        const result = await collection2.aggregate(pipeline).toArray();
        if(result.length===0)
            return {
                      id: '',
                      text: "Для цього слова правила немає, його треба запам'ятати."
                    }
        return result[0].rule[0]

    } finally {

    }



}



module.exports = {
    //- all words
    // - all rules
    getAll: getAll,

    // - words for rule
    findAllWordsForRule:findAllWordsForRule,

    // - word by id
    getWordById:getWordById,

    // - rule for word
    getRuleForWord:getRuleForWord,

    // - random 50 words
    get50RandomWordsForUser:get50RandomWordsForUser,
    get50RandomWords:get50RandomWords,

    // - user by login
    getUserByLogin:getUserByLogin,

    // - create user
    addNewUser:addNewUser,

    // - increase level
    increaseLevel:increaseLevel,

    // - decrease level
    decreaseLevel:decreaseLevel,

    // - all words with levels for user
    getAllWordsForUserWithLevels:getAllWordsForUserWithLevels
}