const express = require('express');
let app = express();
let port = process.env.PORT;

app.get('/', function(req, res){
    res.send("request received");
});

if(port == null || port == "")
{
    port = 3000;
}

app.listen(port);
