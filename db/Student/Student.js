const Sequelize = require('sequelize');
const sequelize = require('../../connect.js');
const Student = sequelize.define('student',{
    Sno:{
        type:Sequelize.CHAR(7),
        allowNULL:false
    },
    Sname:{
        type:Sequelize.STRING(20),
        allowNULL: false
    },
    Ssex:{
        type:Sequelize.CHAR(2),
        allowNULL:false
    },
    Sage:{
        type:Sequelize.SMALLINT,
        allowNULL:true
    },
    Clno:{
        type:Sequelize.CHAR(5),
        allowNULL:false
    }
},{
    timestamps: false,
    tableName:'student'
});

module.exports = Student;
