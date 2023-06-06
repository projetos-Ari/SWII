const express = require("express");
const app = express();
//video #09
//app.get("/", function (req, res) {
//    res.send("Hello!");
//});
//video #10
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/", function (req, res) {
    res.send("Seja bem-vindo ao meu app!");
});

app.get("/", function (req, res) {
    res.send("Minha pagina sobre");
})

app.get("/", function (req, res) {
    res.send("Bem vindo ao meu blog!");
})

app.get('/ola/:cargo/:nome/:cor', function(req,res){
    res.send("<h1>Ola" +req.params.name+"</h1>"+ "<h2>Seu cargo é" +req.params.cargo+"</h2>"+ "<h3>Sua cor favorita é:" +req.params.cor+"</h3>");
})

app.listen(8081, function () { console.log("Servidor rodando!");
    
})

