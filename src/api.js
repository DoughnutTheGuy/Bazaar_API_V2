const express = require("express");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const cors = require("cors");

var getJSON = require('get-json');

var API_KEY = "eca6145a-32b5-43f1-99d0-6adb7bcfc690";

var url = "https://api.hypixel.net/skyblock/bazaar/product?key=" + API_KEY +"&productId=";

app.use(cors())

router.get("/products/:product_id", (req, res) => {
    getJSON(url+req.params.product_id, function(error, response){
        res.json(response);
    });
});

app.use('/.netlify/functions/api', router);

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

module.exports.handler = serverless(app);
