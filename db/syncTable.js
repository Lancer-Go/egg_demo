const Course = require('./Course/Course.js');
const Student = require('./Student/Student.js');
const Class = require('./Class/Class.js');
const Grade = require('./Grade/Grade.js');

// 同步表结构
function syncTable (){
        Course.sync({
            force: true  // 强制同步，先删除表，然后新建
        });
        Student.sync({force:true});
        Class.sync({force:true});
        Grade.sync({force:true});
}
syncTable();
module.exports = syncTable;
