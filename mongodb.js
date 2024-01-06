const { MongoClient } = require('mongodb');

const url = "mongodb+srv://akshayakumaras:CykgOqzgM57YQVXv@cluster0.ukmau3c.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
const databaseName = "users";
const collectionName = "usersName";

async function dbConnect() {
    try {
        await client.connect();
        return client.db(databaseName).collection(collectionName);
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
}

module.exports = dbConnect;
