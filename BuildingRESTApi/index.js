const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const app = express()
const PORT = 8000


// Middleware --> send the data to object body into server.
app.use(express.urlencoded({ extended: false }))

// Middleware --> it will not send the request forward.
// app.use((req, res, next) => { })

// Middleware --> it shows the messsage but dont get the code.
// app.use((req, res, next) => {
//     console.log('Hello from middleware');
// })

// Now the next function tells the go to the route and get the data.
app.use((req, res, next) => {
    fs.appendFile('./log.txt', `${Date.now()}, \n ${req.method}, ${req.path} `, (req, data) => { })
    console.log('Hello from middleware');
    req.myName = 'dont do it kiddo!'
    next()
})


app.get('/api/users', (req, res) => {
    res.setHeader('hello', 'Hammad')

    console.log(req.myName);
    return res.status(200).json(users)

})

// SSR --> render HTML Page
app.get('/users', (req, res) => {
    const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`)}</ul>`
    return res.send(html)
})

app.post('/api/users', (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: 'success', id: users.length })
    })
})
app.route('/api/users/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (user)
        {
            return res.json(user);
        } else
        {
            return res.status(404).json({ error: 'User not found' });
        }
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex !== -1)
        {
            // Mock patch: Updating only the user's first_name as an example
            users[userIndex].first_name = req.body.first_name || users[userIndex].first_name;
            return res.json({ status: 'success', updatedUser: users[userIndex] });
        } else
        {
            return res.status(404).json({ error: 'User not found' });
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex !== -1)
        {
            // Delete the user
            const deletedUser = users.splice(userIndex, 1); // Remove user from array
            return res.json({ status: 'success', deletedUser });
        } else
        {
            return res.status(404).json({ error: 'User not found' });
        }
    });

app.listen(PORT, () => {
    console.log('Server is running on 8000 :)');
})