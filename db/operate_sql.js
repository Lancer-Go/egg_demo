const Course = require('./Course/Course.js');
let opt = 1;
function choose_opt(opt){
    if(opt===1){
        Course.create({
            Cno:'1',
            Cname:'数学',
            Credit: 4
        }).then(function (p){
            console.log('create. ' + JSON.stringify(p))//将p转化成字符串
        }).catch(function (err) {
            console.log('failed: ' + err);
        });
    }
    if(opt===2){
        Course.findAll().then(info =>{
            console.log("All info：",JSON.stringify(info,null,4))
        });
    }
    if(opt===3){
        Course.destroy({
            where:{
                Cname:'数学'
            }
        }).then(()=>{
            console.log("Done")
        })
    }
    if(opt===4){
        Course.update({Cno:'2'},{
            where:{Cno:'1'}
        }).then(()=>{
            console.log("Done")
        })
    }
}
choose_opt(opt);
