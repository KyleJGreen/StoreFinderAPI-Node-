module.exports = function (app, db) {
    //CRUD API

    app.get('/api/things/all', async (req, res) => {
        try {
            const Thing = db.models.Thing;
            const thing = await Thing.findAll({});
            res.status(200).send(thing);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   read

    app.get('/api/things/:name', async (req, res) => {
        try {
            const Thing = db.models.Thing;
            const thing = await Thing.findAll({
                where: {
                    name: req.params.name
                }
            });
            res.status(200).send(thing);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   read

    app.post('/api/things/new', async (req, res) => {
        try {
            const Thing = db.models.Thing;
            Thing.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                artisanId: req.body.artisanId
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   create

    app.put('/api/things/update/:id', function (req, res) {
        try {
            const Thing = db.models.Thing;
            Thing.update({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                artisanId: req.body.artisanId
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   update

    app.delete('/api/things/delete/:id', function (req, res) {
        try {
            const Thing = db.models.Thing;
            Thing.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    });  // delete

};