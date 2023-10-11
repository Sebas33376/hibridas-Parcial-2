import * as service from "../../services/client.services.js"
import * as proyectService from "../../services/services.js"

const getClients = (req, res) => {

    service.getClients()
        .then(clients => res.status(200).json(clients))
        .catch(err => res.status(404).json())
}

const getClientById = (req, res) => {

    const id = req.params.id;

    service.getClientById(id)
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

const editClient = (req, res) => {
    const id = req.params.id;

    const client = {}

    if (req.body.name) {
        client.name = req.body.name
    } else if (req.body.img) {
        client.img = req.body.img
    } else if (req.body.description) {
        client.description = req.body.description
    }
    service.editClient(id, client)
        .then(editedClient => {
            if (editedClient) {

                res.status(201).json(editedClient);

            } else {

                res.status(500).json();

            }
        })
}

const deletClient = (req, res) => {
    const id = req.params.id;
    service.deletClient(id)
        .then(client => res.status(202).json(client))
        .catch((err) => res.status(204).json())

}

export {
    getClients,
    createClient,
    getClientById,
    editClient,
    deletClient
}