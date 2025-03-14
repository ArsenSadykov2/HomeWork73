const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;
const password = 'apple';


app.get('/', (req, res) => {
    return res.send('Hello!');
});

app.get('/get/:id', (req, res) => {
    return res.send(`${req.params.id}`);
});

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encode = Vigenere.Cipher(password).crypt(text);
    return res.send(encode);
});

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decode = Vigenere.Decipher(password).crypt(text);
    return res.send(decode);
});

app.get('*', (req, res) => {
    return res.status(404).send('Not Found');
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
