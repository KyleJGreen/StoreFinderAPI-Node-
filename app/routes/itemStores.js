module.exports = function (app, db) {
    //CRUD API
    app.get('/api/itemStores/all', function (req, res) {
        db.Item.findAll({}).then(function (result) {
            res.json(result)
        });
    }); // read
    app.post('/api/itemStores/new', function (req, res) {
        db.Item.create({
            itemId: req.body.itemId,
            storeId: req.body.storeId
        }).then(function (result) {
            res.json(result)
        });
    });   // create
    app.put('/api/itemStores/update/:id', function (req, res) {
        db.Item.update({
            itemId: req.body.itemId,
            storeId: req.body.storeId
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    }); // update
    app.delete('/api/itemStores/delete/:id', function (req, res) {
        db.Item.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        });
    });  // delete
};