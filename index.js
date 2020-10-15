/**
 * TESTE DE FUNÇÕES DO EXPRESS
 * Explicação de Como funciona: https://github.com/F4NT0/estudos-node/tree/master/entendendo-express
 */
var express = require("express");
var app = express();

//Módulo Path (para pegar o __dirname)

// Função get
app.get("/",function(req,res){
   res.sendFile(__dirname + "/app.component.html");
});

app.listen(8080,function(){
    console.log("Servidor Iniciado!\nAcesse http://localhost:8080/");
});
