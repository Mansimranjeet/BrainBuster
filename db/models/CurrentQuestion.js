const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const CurrentQuestion = db.define('CurrentQuestion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    value: {
        type: DataTypes.INTEGER
    }
});


module.exports = {CurrentQuestion}