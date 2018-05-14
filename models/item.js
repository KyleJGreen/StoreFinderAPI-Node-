module.exports = function (sequelize, DataTypes) {
    var item = sequelize.define("Item", {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        category: DataTypes.STRING,
        artisanId: DataTypes.INTEGER
    });

    return item;
};