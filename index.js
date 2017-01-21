const express = require("express");
const bodyParser = require("body-parser");
const Promise = require('promise');
const fetch = require('node-fetch');

const port = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));

app.get('/hello/world', (req, res) => {
  res.send({
    message: "Hello 🌏!",
    whoami: "buster"
  })
});

// ...

app.listen(port);
console.log(`🌍 Web Application is started - listening on ${port}`);
