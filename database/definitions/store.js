'use strict';

const DataTypes = require('sequelize');

module.exports = {
    name: DataTypes.STRING,
    addressLineOne: DataTypes.STRING,
    addressLineTwo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER
};
