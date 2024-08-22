const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path:  '../config.env'});

const uri = process.env.MONGO_URL.replace(
    '<password>',
    process.env.MONGO_PASSWORD)

const newDbName = 'AccentMark'; // Replace with your new database name
const importDir = path.join(__dirname, 'exported_data');

async function importCollections() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(newDbName);
        const files = fs.readdirSync(importDir);

        for (const file of files) {
            const collectionName = path.basename(file, '.json');
            const filePath = path.join(importDir, file);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            if (data.length > 0) {
                await db.collection(collectionName).insertMany(data);
                console.log(`Imported collection: ${collectionName}`);
            }
        }

        console.log('All collections have been imported.');
    } finally {
        await client.close();
    }
}

importCollections().catch(console.error);
