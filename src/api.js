const express = require("express");
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

var getJSON = require('get-json');

var API_KEY = "eca6145a-32b5-43f1-99d0-6adb7bcfc690";

var url = "https://api.hypixel.net/skyblock/bazaar/product?key=" + API_KEY +"&productId=";

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


router.get("/products/:product_id", (req, res) => {
    getJSON(url+req.params.product_id, function(error, response){
        res.json(response);
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
