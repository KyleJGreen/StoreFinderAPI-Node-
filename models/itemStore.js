module.exports = function (sequelize, DataTypes) {
    var itemStore = sequelize.define("Item", {
        itemId: DataTypes.INTEGER,
        storeId: DataTypes.INTEGER
    });

    return itemStore;
};