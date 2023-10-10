import * as service from "../../services/client.services.js"
import * as proyectService from "../../services/services.js"

const getClients = (req, res) => {
   
    service.getClients()
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(404).json())
}

const createClient = (req, res) => {
    const client = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        proyects: req.body.proyects,
    }

    service.createClient(client)
        .then(newClient => {
            res.status(201).json(newClient);
        })
        .catch(error => res.status(500).json());
}

const getClientProyects = (req, res) => {
    const clientName = req.param.clientName;

    proyectService.getProyects(clientName)
    .then(proyect => res.status(200).json(clients))
    .catch(err => res.status(404).json())

}

export {
    getClients,
    createClient
}