module.exports = function (app, db) {
    //CRUD API
    app.get('/api/items/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result)
        });
    }); // read
    app.post('/api/items/new', function (req, res) {
        db.Item.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            artisanId: req.body.artisan_id
        }).then(function (result) {
            res.json(result)
        });
    });   // create
    app.put('/api/items/update/:id', function (req, res) {
        db.Item.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            artisanId: req.body.artisan_id
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    }); // update
    app.delete('/api/items/delete/:id', function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    });  // delete
};