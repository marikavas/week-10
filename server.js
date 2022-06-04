const { default: axios } = require('axios');
const express = require('express');
const { get } = require('http');

const app = express();

app.set('view, engine', 'ejs');

app.get('/', (req, res) => {
    res.send =('Index');

});

app.listen(process.env.PORT || 3000, () => {
    console.log('server is running');
});