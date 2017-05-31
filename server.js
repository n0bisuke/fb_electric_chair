'use strict';

'use strict'

const HTTP = require('http');
const PORT = process.env.PORT || 3001;

HTTP.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js!!!!!!\n');
}).listen(PORT);

// const express = require('express');
// const app = express();
// const axios = require(`axios`);
// const FBURL = `https://www.facebook.com/burghamburgburg/`;
// const PORT = process.env.PORT || 3000;

// let prevLike = 0;
// let flag = 0;

// app.get('/', (req, res) => {

//     axios.get(FBURL)
//     .then((response) => {
//         const html = response.data;
//         const like = html.match(/#xff01;(.*?)&#x4ef6;/)[1];
//         const likeNum = parseInt(like.replace(/,/g,'')); //文字列 -> 数値に変換
//         const mes = {};
//         mes.diff = `前回アクセス時のいいね数: ${prevLike}, 今回のいいね数${likeNum}`;
//         mes.log = `${FBURL}のいいね数は${like}です。`;

//         if((prevLike !== 0) && (prevLike < likeNum)){
//             flag = 1;
//             mes.status = `いいねあり`;
//         }else{
//             flag = 0;
//             mes.status = `変化なし`;
//         }

//         const result = {
//             new: flag,
//             like: likeNum,
//             mes: mes
//         };
//         res.contentType('application/json');
//         res.send(result);
//         prevLike = likeNum;
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// });

// app.listen(PORT);
// console.log(`server listen at ${PORT}`);