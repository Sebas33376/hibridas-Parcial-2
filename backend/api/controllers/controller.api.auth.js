import * as service from "../../services/auth.services.js"

const addAccount = async (req, res) => {
  return service.addAccount(req.body)
  .then(() => res.status(201).json({msg: "Cuenta creada"}))
  .catch((err) => res.status(401).json({error: { msg: err.message }}))
}

const login = async (req, res) => {
    return service.login(req.body)
    .then((account) => res.status(201).json({msg: "Cuenta encontrada", account}))
    .catch((err) => res.status(401).json({error: { msg: err.message }}))
}

export {
    addAccount,
    login
}