const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');
const work = sequelize.define('work',{
id:{
    allowNull:false,
    autoIncrement:true,
    type:Sequelize.INTEGER,
    primaryKey:true
},

work:Sequelize.STRING,

description:Sequelize.STRING
});

module.exports = work;