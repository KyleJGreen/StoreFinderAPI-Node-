const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

const Artisans = require('./app/routes/Artisans.js');
const Stores = require('./app/routes/Stores.js');
const Items = require('./app/routes/Things.js');
const ItemStores = require('./app/routes/ItemStores.js');

const PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : "application/vmd.api-json"}));
app.use(express.static("app/public"));

// Initialize routes
Artisans(app, db);
Stores(app, db);
Items(app, db);
ItemStores(app, db);

console.log(PORT);

db.connection.sync().then(() => {
    app.listen(PORT, () => console.log('Listening on PORT:', PORT));
});