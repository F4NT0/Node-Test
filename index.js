/**
 * TESTE DE FUNÇÕES DO EXPRESS
 * Explicação de Como funciona: https://github.com/F4NT0/estudos-node/tree/master/entendendo-express
 */

// Importando e Instanciando o Express.js
var express = require("express");
var app = express();

//Definindo Diretório de leitura
app.use(express.static("arquivos"));

//Módulo Path (para pegar o __dirname)
var path = require("path");

// Função get pega um arquivo html e apresenta na rota definida("/" é a Home)
app.get("/",function(req,res){
   res.sendFile(__dirname + "/arquivos/html/index.html"); 
});

/*
* OUTRAS ROTAS
*/

app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/arquivos/html/sobre.html");
});

app.get("/contato",function(req,res){
    res.sendFile(__dirname + "/arquivos/html/contato.html");
});

/**
 * INICIANDO SERVIDOR
 */

app.listen(8080,function(){
    console.log("Servidor Iniciado!\nAcesse http://localhost:8080/");
});
