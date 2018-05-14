module.exports = function (app, db) {
    //CRUD API
    app.get('/api/artisans/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result)
        });
    }); // read
    app.post('/api/artisans/new', function (req, res) {
        db.Item.create({
            name: req.body.name,
            email: req.body.email,
            website: req.body.website,
            phoneNumber: req.body.phoneNumber
        }).then(function (result) {
            res.json(result)
        });
    });   // create
    app.put('/api/artisans/update/:id', function (req, res) {
        db.Item.update({
            name: req.body.name,
            email: req.body.email,
            website: req.body.website,
            phoneNumber: req.body.phoneNumber
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    }); // update
    app.delete('/api/artisans/delete/:id', function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    });  // delete
};

module.exports = function (app, db) {
    //CRUD API

    app.get('/api/artisans/all', async (req, res) => {
        try {
            const Artisan = db.models.Artisan;
            const artisan = await Artisan.findAll({});
            res.status(200).send(artisan);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   read

    app.post('/api/artisans/new', async (req, res) => {
        try {
            const Artisan = db.models.Artisan;
            Artisan.create({
                name: req.body.name,
                email: req.body.email,
                website: req.body.website,
                phoneNumber: req.body.phoneNumber
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   create

    app.put('/api/artisans/update/:id', function (req, res) {
        try {
            const Artisan = db.models.Artisan;
            Artisan.update({
                name: req.body.name,
                email: req.body.email,
                website: req.body.website,
                phoneNumber: req.body.phoneNumber
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

    app.delete('/api/artisans/delete/:id', function (req, res) {
        try {
            const Artisan = db.models.Artisan;
            Artisan.destroy({
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