import * as service from "../../services/services.js"


const getTeams = (req, res) => {

    const filter = req.query;

    service.getTeams(filter)
        .then(teams => res.status(200).json(teams))
        .catch(err => res.status(404).json())
}

const getTeamById = (req, res) => {
    const id = req.params.id;
    service.getTeamById(id)
        .then(team => {
            if (team) {
                res.status(200).json(team);
            } else {
                res.status(404).json();
            }
        })
}

const addTeam = (req, res) => {
    const team = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        client: req.body.client
    }

    service.createTeam(team)
        .then(newTeam => {
            res.status(201).json(newTeam);
        })
        .catch(error => res.status(500).json());
}

const replaceTeam = (req, res) => {
    const id = req.params.id;

    const team = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        client: req.body.client
    }

    service.replaceTeam(id, Team)
        .then(poryectReplaced => {
            if (poryectReplaced) {

                res.status(201).json(poryectReplaced);

            } else {

                res.status(500).json();

            }
        })
}

const editTeam = (req, res) => {
    const id = req.params.id;

    const Team = {}

    if (req.body.name) {
        Team.name = req.body.name
    } else if (req.body.description) {
        Team.description = req.body.description
    } else if (req.body.link) {
        Team.link = req.body.link
    } else if (req.body.img) {
        Team.img = req.body.img
    } else if (req.body.technologies) {
        Team.technologies = req.body.technologies
    } else if (req.body.section) {
        Team.section = req.body.section
    } else if (req.body.client) {
        Team.client = req.body.client
    }

    service.editTeam(id, Team)
        .then(newTeam => {
            if (newTeam) {

                res.status(201).json(newTeam);

            } else {

                res.status(500).json();

            }
        })
}

const deletTeam = (req, res) => {
    const id = req.params.id;
    service.deletTeam(id)
        .then(Team => res.status(202).json(Team))
        .catch((err) => res.status(204).json())

}

export {
    getTeams,
    getTeamById,
    addTeam,
    editTeam,
    replaceTeam,
    deletTeam
}