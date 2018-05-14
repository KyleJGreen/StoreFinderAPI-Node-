module.exports = function (app, db) {
    //CRUD API

    app.get('/api/itemStores/all', async (req, res) => {
        try {
            const ItemStore = db.models.ItemStore;
            const itemStores = await ItemStore.findAll({});
            res.status(200).send(itemStores);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   read

    app.post('/api/itemStores/new', async (req, res) => {
        try {
            const ItemStore = db.models.ItemStore;
            ItemStore.create({
                itemId: req.body.itemId,
                storeId: req.body.storeId
            }).then(function (result) {
                res.json(result)
            });
        }
        catch (error) {
            res.status(500).send(error);
        }
    }); //   create

    app.put('/api/itemStores/update/:id', function (req, res) {
        try {
            const ItemStore = db.models.ItemStore;
            ItemStore.update({
                itemId: req.body.itemId,
                storeId: req.body.storeId
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

    app.delete('/api/itemStores/delete/:id', function (req, res) {
        try {
            const ItemStore = db.models.ItemStore;
            ItemStore.destroy({
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