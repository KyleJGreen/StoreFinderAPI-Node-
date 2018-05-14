module.exports = function (sequelize, DataTypes) {
    var artisan = sequelize.define("Item", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        website: DataTypes.STRING,
        phoneNumber: DataTypes.INTEGER
    });

    return artisan;
};