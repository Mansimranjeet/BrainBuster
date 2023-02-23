const { db } = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

const Users = db.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    score: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    },
});


Users.addScore = async function(phoneNumber) {
    
    let user = await Users.findOne({where: {phoneNumber}})
   return await Users.update({score: ++user.score}, {where:{phoneNumber}}).score
    
  }


module.exports = {Users}