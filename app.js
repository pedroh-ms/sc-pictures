const fs = require("fs");
const express = require("express");
const app = express();

const port = 8080;

let fls = fs.readdirSync("./pictures/")

app.set("view engine", "ejs");

app.use( express.static( "pictures" ) );
app.use( express.static( "public" ) );

app.get("/", function(req, res){
    res.render("../views/index", {fls: fls});
});

app.listen(port, function(){
    console.log("Servidor rodando em http://localhost:" + port)
});
