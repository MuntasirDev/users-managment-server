const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('users server is running');
});

const users = [
    { id: 1, name: 'Muntasir', email: 'alimuntasir2001@gmail.com' },
    { id: 2, name: 'Jack', email: 'jackmarston@gmail.com' },
    { id: 3, name: 'ROSS', email: 'edgerross@gmail.com' },
    { id: 4, name: 'Dutch', email: 'vanderlinde@gmedgerross' }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
});

app.listen(port, () => {
    console.log(`Users server running on port ${port}`);
});








