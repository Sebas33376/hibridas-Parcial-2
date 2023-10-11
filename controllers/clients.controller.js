import * as service from "../services/client.services.js"
import * as views from "../views/views.js";
import * as utils from "../pages/utils.js"

const getClients = (req, res) => {

    service.getClients()
        .then(clients => res.send(views.createClientsList(clients)))
        .catch(err => res.status(404).json())
}

const getClientById = (req, res) => {
    const id = req.params.id;
    service.getClientById(id)
        .then(client => res.send(views.createClientById(client)))
    // .catch(err => res.send(views.createError("404")))


}

const addClientForm = (req, res) => {
    res.send(views.createClientForm());
}

const addClient = (req, res) => {

    const client = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
    }

    service.createClient(client)
        .then(() => res.send(utils.createPageClients(`${client.name}/ID:${client._id}`,
            `<p class="text-success text-center">El cliente se creo con exito</p>`)))
    // .catch(err => res.send(views.createError("404")))

}

const editClient = (req, res) => {

    const id = req.params.id;

    const client = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
    }

    service.editClient(id, client)
        .then(() => res.send(utils.createPageClients(`${client.name}/ID:${id}`,
            `<p class="text-success text-center">El cliente se creo con exito</p>`)))
    // .catch(err => res.send(views.createError("404")))

}

const editClientForm = (req, res) => {
    const id = req.params.id;

    service.getClientById(id)
        .then(client => res.send(views.editClientForm(client)))

}

const deleteClientForm = (req,res) => {
    const id = req.params.id;

    service.getClientById(id)
        .then(client => res.send(views.deletClientForm(client)))
}

const deleteClient = (req, res) => {
    const id = req.params.id;
    service.deletClient(id)
    .then(() => res.send(utils.createPageClients(`ID:${id}`, 
    `<p class="text-success text-center">El proyecto se elimino con exito</p>`)))
    // .catch(err => res.send(views.createError("404")))

}

export {
    getClients,
    getClientById,
    addClient,
    addClientForm,
    editClient,
    editClientForm,
    deleteClient,
    deleteClientForm
}