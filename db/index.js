const {Sequelize, DataTypes} = require('sequelize')
const {Questions} = require("./models/Questions");
const {Users} = require("./models/Users");
const {CurrentQuestion} = require("./models/CurrentQuestion");
const {db} = require('./db')




module.exports = {
    db, Questions, Users, CurrentQuestion
  };