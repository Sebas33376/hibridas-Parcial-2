import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

async function getProyects(filters) {

    const filter = { deleted: { $ne: true } };

    if (filters.section) {
        filter.section = filters.section
    }

    return db.collection("proyects").find(filter).toArray();
}

async function getProyectById(id) {
    return db.collection("proyects").findOne({ _id: new ObjectId(id) });
}

async function createProyect(proyect) {
    const newProyect = await db.collection("proyects").insertOne(proyect);
    return newProyect;
}

async function replaceProyect(id, proyect) {
    const replaced = await db.collection("proyects").replaceOne({ _id: new ObjectId(id) }, proyect);
    return replaced;
}

async function editProyect(id, proyect) {
    const edited = await db.collection("proyects").updateOne({ _id: new ObjectId(id) }, { $set: proyect });
    return edited;
}

async function deletProyect(id) {
    const deleted = await db.collection("proyects").updateOne({ _id: new ObjectId(id) }, { $set: { deleted: true } });
    return deleted;
}

export {
    getProyects,
    getProyectById,
    createProyect,
    replaceProyect,
    editProyect,
    deletProyect
}