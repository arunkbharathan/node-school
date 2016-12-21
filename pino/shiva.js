var fs=require("fs");

var bodyparser = require("body-parser");

var app=require("express")();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/shiva',function(req,res){
    //req_body=JSON.stringify(req.body);
    user_id = req.body.user_id
    log = req.body.log
    console.log(user_id)
    fs.open(user_id+".log",'a+',function(err,data){
        if(err){
            console.log(err);
            return res.json({ status : 'error'})
        }
        //console.log(JSON.stringify(req_body));
        fs.writeFile(user_id+".log",log,function(err,data){
            if(err){
                console.log(err);
                return res.json({ status : 'error'})
            }
            else{
                console.log("file written");
                return res.json({ status : 'saved into the file'})
            }
        });
    });
    
});

app.listen(3000);

console.log("server running successfully");


//else{
//            var writeStream = fs.writeFile('text.txt',readStream,'a+',function(err,data){
//                console.log(writeStream);
//            });
//        }