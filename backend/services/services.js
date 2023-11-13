import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

async function getTeams(filters) {

    const filter = { deleted: { $ne: true } };

    if (filters.section) {
        filter.section = filters.section
    }

    return db.collection("teams").find(filter).toArray();
}

async function getTeamById(id) {
    return db.collection("teams").findOne({ _id: new ObjectId(id) });
}

async function createTeam(team) {
    const newTeam = await db.collection("teams").insertOne(team);
    return newTeam;
}

async function replaceTeam(id, team) {
    const replaced = await db.collection("teams").replaceOne({ _id: new ObjectId(id) }, team);
    return replaced;
}

async function editTeam(id, team) {
    const edited = await db.collection("teams").updateOne({ _id: new ObjectId(id) }, { $set: team });
    return edited;
}

async function deletTeam(id) {
    const deleted = await db.collection("teams").updateOne({ _id: new ObjectId(id) }, { $set: { deleted: true } });
    return deleted;
}

export {
    getTeams,
    getTeamById,
    createTeam,
    replaceTeam,
    editTeam,
    deletTeam
}