import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

async function getClients() {

    const filter = { deleted: { $ne: true } };

    return db.collection("clients").find(filter).toArray();

}

async function getClientById(id) {
    return db.collection("clients").findOne({ _id: new ObjectId(id) });
}

async function createClient(client) {
    const newClient = await db.collection("clients").insertOne(client);
    return newClient;
}

async function editClient(id, client) {
    const edited = await db.collection("clients").updateOne({ _id: new ObjectId(id) }, { $set: client });
    return edited;
}

async function deletClient(id) {
    const deleted = await db.collection("clients").updateOne({ _id: new ObjectId(id) }, { $set: { deleted: true } });
    return deleted;
}

export {
    getClients,
    createClient,
    getClientById,
    editClient,
    deletClient
}