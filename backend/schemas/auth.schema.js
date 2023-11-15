import yup from "yup"

const account = yup.object({
    userName: yup.string().trim().required().min(6).max(8),
    password: yup.string().required().min(6).max(10)
})

export {
    account
}