module.exports = function (app, db) {
    //CRUD API
    app.get('/api/stores/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result)
        });
    }); // read
    app.post('/api/stores/new', function (req, res) {
        db.Item.create({
            name: req.body.name,
            addressLineOne: req.body.addressLineOne,
            addressLineTwo: req.body.addressLineTwo,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        }).then(function (result) {
            res.json(result)
        });
    });   // create
    app.put('/api/stores/update/:id', function (req, res) {
        db.Item.update({
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
    }); // update
    app.delete('/api/stores/delete/:id', function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    });  // delete
};