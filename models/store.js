module.exports = function (sequelize, DataTypes) {
    var store = sequelize.define("Item", {
        name: DataTypes.STRING,
        addressLineOne: DataTypes.STRING,
        addressLineTwo: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.INTEGER
    });

    return store;
};