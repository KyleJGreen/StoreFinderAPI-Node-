module.exports = function (app, db) {
    //CRUD API

    app.get('/api/stores/all', async (req, res) => {
        try {
            const Store = db.models.Store;
            const store = await ItemStore.findAll({});
            res.status(200).send(store);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   read

    app.post('/api/stores/new', async (req, res) => {
        try {
            const Store = db.models.Store;
            Store.create({
                name: req.body.name,
                addressLineOne: req.body.addressLineOne,
                addressLineTwo: req.body.addressLineTwo,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   create

    app.put('/api/stores/update/:id', function (req, res) {
        try {
            const Store = db.models.Store;
            Store.update({
                name: req.body.name,
                addressLineOne: req.body.addressLineOne,
                addressLineTwo: req.body.addressLineTwo,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
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

    app.delete('/api/stores/delete/:id', function (req, res) {
        try {
            const Store = db.models.Store;
            Store.destroy({
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