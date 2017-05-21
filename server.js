'use strict';

const axios = require(`axios`);
const FBURL = `https://www.facebook.com/burghamburgburg/`;

axios.get(FBURL)
  .then((response) => {
    const html = response.data;
    const like = html.match(/#xff01;(.*?)&#x4ef6;/)[1];
    console.log(like);
  })
  .catch((error) => {
    console.log(error);
  });
