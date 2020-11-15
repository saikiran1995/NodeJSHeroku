const express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send("request received");
});

app.listen(3000);
