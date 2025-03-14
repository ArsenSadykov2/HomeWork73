const express = require('express');

const app = express();
const port = 8000;


app.get('/', (req, res) => {
    return res.send('Hello!');
});

app.get('/get/:id', (req, res) => {
    return res.send(`${req.params.id}`);
});

app.get('*', (req, res) => {
    return res.status(404).send('Not Found');
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});