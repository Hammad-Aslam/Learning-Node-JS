const User = require('../models/user')
async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    // const html = `<ul>${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join(" ")}</ul>`
    // return res.send(html)
    return res.json(allDbUsers)
}


async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "user not found" })
    return res.json(user)
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return res.json({ status: "Success" })

}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: 'Success' })

}

async function handleCreateNewUser(req, res) {
    const body = req.body

    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
    { return res.status(400).json({ msg: 'All Fields Required!' }) }

    await User.create({
        firstName: body.first_name,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })
    return res.status(201).json({ msg: 'success' })
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}