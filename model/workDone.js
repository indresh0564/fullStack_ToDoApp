const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');
const workDone = sequelize.define('workDone',{
id:{
    allowNull:false,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true
},

work:Sequelize.STRING,

description:Sequelize.STRING
});

module.exports = workDone;