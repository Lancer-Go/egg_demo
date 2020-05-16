const Sequelize = require('sequelize');
const sequelize = require('../../connect.js');
const Grade = sequelize.define('grade',{
    Sno:{
        type:Sequelize.CHAR(7),
        allowNull:false
    },
    Cno:{
        type:Sequelize.CHAR(1),
        allowNull:false
    },
    Gmark:{
        type:Sequelize.DECIMAL(4,1)
    }
},{
    timestamps: false,
    tableName:'grade'
});
module.exports = Grade;
