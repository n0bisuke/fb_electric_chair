'use strict';

const express = require('express');
const app = express();
const axios = require(`axios`);
const FBURL = `https://www.facebook.com/burghamburgburg/`;
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    axios.get(FBURL)
    .then((response) => {
        const html = response.data;
        const like = html.match(/#xff01;(.*?)&#x4ef6;/)[1];
        console.log(like);
        res.send(`${FBURL}のいいね数は${like}です。`);
    })
    .catch((error) => {
        console.log(error);
    });

});
 
app.listen(PORT);
