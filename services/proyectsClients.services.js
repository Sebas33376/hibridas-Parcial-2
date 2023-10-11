import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://Sebas33376:Loria43314475@parciales.4qte1wq.mongodb.net");

const db = client.db("AH20232CP1")

async function updateClientProyects(filters) {

    const filter = {};

    filter.clientName = filters.client;

    const clientProyects = await db.collection("proyects_clients").find(filter).project().toArray()

    let proyects;

    if (clientProyects[0].proyects.length == 0) {

        proyects = db.collection("proyects").find(filters).toArray()
            .then(proyects => {

                for (const proyect of proyects) {

                    db.collection("proyects_clients").updateOne({ clientName: filter.clientName },
                        { $push: { proyects: proyect } })

                }
            })

    } else {

        for (let index = 0; index < clientProyects[0].proyects.length; index++) {
            proyects = db.collection("proyects").find(filters).toArray()
                .then(proyects => {
                    for (const proyect of proyects) {

                        db.collection("proyects_clients").updateOne({ _id: proyect._id },
                            { $addToSet: { proyects: proyect } })

                    }
                })

        }
    }


    return proyects;
}

async function getProyectsByClient(filters) {

    const filter = {};

    filter.clientName = filters.client;

    return db.collection("proyects_clients").find(filter).toArray()

}


export {
    updateClientProyects,
    getProyectsByClient
}