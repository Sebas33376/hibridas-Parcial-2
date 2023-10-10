import * as service from "../../services/proyectsClients.services.js"


const getProyectsByClient = (req, res) => {

    const client = req.query;

    service.updateClientProyects(client)
        .then(proyects => res.status(201).json(proyects))
        .catch(err => res.status(404).json())

    service.getProyectsByClient(client)
        .then(proyects => res.status(200).json(proyects))
        .catch(err => res.status(404).json())
}

export {
    getProyectsByClient
}