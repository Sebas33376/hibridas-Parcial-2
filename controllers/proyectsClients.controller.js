import * as service from "../services/proyectsClients.services.js"
import * as views from "../views/views.js"


const getProyectsByClient = (req, res) => {

    const client = req.query;

    service.updateClientProyects(client)
        .then(client => res.status(201).json(client))

    service.getProyectsByClient(client)
        .then(client => res.send(views.createClientProyects(client)))
        .catch(err => res.status(404).json())
}

export {
    getProyectsByClient
}