const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

var PORT = process.env.PORT || 3000;

// Set up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type : "application/vmd.api-json"}));
app.use(express.static("app/public"));

// how to use models:
app.get('/artisans/:id', async (req, res) => {
    try {
        const Artisan = db.models.Artisan;
        const artisan = await Artisan.findOne({id: req.params.id});
        res.status(200).send(artisan);
    }
    catch (error) {
        res.status(500).send(error);
    }
});


db.connection.sync().then(() => {
    app.listen(PORT, () => console.log('Listening on PORT:', PORT));
});