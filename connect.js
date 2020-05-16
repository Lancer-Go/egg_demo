const Sequelize = require('sequelize');
// Option 1: Passing parameters separately

const sqlConfig = {
    host:'localhost',
    user:'root',
    password:'',
    database:'seq'
};
const sequelize = new Sequelize(sqlConfig.database,sqlConfig.user,sqlConfig.password,{
    host:sqlConfig.host,
    dialect:'mysql',
    pool: {
        max:10,
        min:0,
        idle:10000
    },
    timezone: '+08:00'//东八时区
});
module.exports = sequelize;
//Option 2: Passing a connection URI
//const sequelize =new Sequelize('postgres://user:pass@example.com:5432/dbname)
sequelize
    .authenticate()
    .then(()=>{
        console.log('Connection has been established successfully');
    })
    .catch(err=>{
        console.error('Unable to connect to the database:',err);
    });
