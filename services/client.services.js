import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

async function getClients() {

    return db.collection("clients").find().toArray();
}

async function createClient(client) {
    const newClient = await db.collection("clients").insertOne(client);
    return newClient;
}

export {
    getClients,
    createClient
}