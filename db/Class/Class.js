const Sequelize = require('sequelize');
const sequelize = require('../../connect.js');
const Class = sequelize.define('class',{
    Clno:{
        type:Sequelize.CHAR(5),
        allowNull:false
    },
    Speciality:{
        type:Sequelize.STRING(20),
        allowNull:false
    },
    Inyear:{
        type:Sequelize.CHAR(4),
        allowNull:false
    },
    Number: {
        type:Sequelize.INTEGER
    },
    Monitor:{
        type:Sequelize.CHAR(7)
    }
},{
    timestamps: false,
    tableName:'class'
});
module.exports = Class;
