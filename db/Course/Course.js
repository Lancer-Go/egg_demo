const Sequelize = require('sequelize');
const sequelize = require('../../connect.js');
const Course = sequelize.define('course',{
    //attributes
    Cno:{
        type:Sequelize.CHAR(1),
        allowNULL:false
    },
    Cname:{
        type:Sequelize.STRING(20),
        allowNULL:false
    },
    Credit:{
        type:Sequelize.SMALLINT
    }
},{
    //options
    timestamp:false,
    tableName:'course'
});
module.exports = Course;
//这是定义表的另外一种方法
