var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var artisans = require('./app/routes/artisans.js');
var stores = require('./app/routes/stores.js');
var items = require('./app/routes/items.js');
var itemsStores = require('./app/routes/itemStores.js');

var PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : "application/vmd.api-json"}));

// Static directory
app.use(express.static("app/public"));

artisans(app, db);
stores(app, db);
items(app, db);
itemsStores(app, db);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('Listening on PORT ' + PORT);
    });
});
