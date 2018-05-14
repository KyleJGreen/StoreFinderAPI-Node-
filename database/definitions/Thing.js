'use strict';

const DataTypes = require('sequelize');

module.exports = {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    artisanId: DataTypes.INTEGER
};