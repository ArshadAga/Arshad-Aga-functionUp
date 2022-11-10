const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const moment = require('moment')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(
    function(req,res,next){
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'),',',req.ip,',',req.path);
        next();
    }
);

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log('Express app running on port ' + (process.env.PORT || 3000 ))
})