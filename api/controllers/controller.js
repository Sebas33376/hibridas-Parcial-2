import * as service from "../../services/services.js"

const getProyects = (req, res) => {
    service.getProyects({ eliminated: true })
        .then(proyects => {
            res.status(200).json(proyects)
        })
}

const getProyectById = (req, res) => {
    const id = req.params.id;
    service.getProyectById(id)
        .then(proyect => {
            if (proyect) {
                res.status(200).json(proyect);
            } else {
                res.status(404).json();
            }
        })
}

const addProyect = (req, res) => {
    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    service.crateProyect(proyect)
        .then(newProyect => {
            res.status(201).json(newProyect);
        })
        .catch(error => res.status(500).json());
}

const replaceProyect = (req, res) => {
    const id = req.params.id;

    const proyect = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    service.replaceProyect(id, proyect)
        .then(poryectReplaced => {
            if (poryectReplaced) {

                res.status(201).json(poryectReplaced);

            } else {

                res.status(500).json();

            }
        })
}

const editProyect = (req, res) => {
    const id = req.params.id;

    const proyect = {}

    if (req.body.name) {
        proyect.name = req.body.name
    } else if (req.body.description) {
        proyect.description = req.body.description
    } else if (req.body.link) {
        proyect.link = req.body.link
    } else if (req.body.img) {
        proyect.img = req.body.img
    } else if (req.body.section) {
        proyect.section = req.body.section
    }

    service.editProyect(id, proyect)
        .then(newProyect => {
            if (newProyect) {

                res.status(201).json(newProyect);

            } else {

                res.status(500).json();

            }
        })
}

const deletProyect = (req, res) => {
    const id = req.params.id;
    service.deletProyect(id)
        .then(() => res.status(202).json())
        .catch((err) => res.status(204).json())

}

export {
    getProyects,
    getProyectById,
    addProyect,
    editProyect,
    replaceProyect,
    deletProyect
}