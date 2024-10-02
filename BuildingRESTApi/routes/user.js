const express = require('express')
const { handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser } = require('../controllers/user')

const router = express.Router()

router.route('/').get(handleGetAllUsers).post(handleCreateNewUser)

router
    .route('/:id')
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)



// router.get('/:id', async (req, res) => {
//     try
//     {
//         const user = await User.findById(req.params.id);
//         if (user)
//         {
//             return res.json(user);  // If user is found, return it
//         } else
//         {
//             return res.status(404).json({ error: 'User not found' });  // If user not found, return 404
//         }
//     } catch (error)
//     {
//         return res.status(500).json({ error: 'Server error' });  // Handle other potential errors
//     }
// })

// router.patch('/:id', async (req, res) => {
//     await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
//     return res.json({ status: "Success" })
// })

// router.delete('/:id', async (req, res) => {
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({ status: 'update' })
// })


module.exports = router