const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Questions = db.define('Questions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    options: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
            let optionStr = this.getDataValue('options');
            return optionStr.split(",");
          },
        set(value) {
        this.setDataValue('options', value.toString());
        }
    },
});

module.exports = {Questions}