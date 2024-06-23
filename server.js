console.log("Web server start");
const express = require("express");
const app = express();
const http = require('http');

// 1: KIRISH KODLARI (enter code)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Sessionlarga bogliq bulgan mlumot.


// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing code
app.get("/hello", function(req,res) {
    res.end(`<h1>HELLO WORLD by John</h1>`);
});
app.get("/book", function(req,res) {
    res.end(`<h1>siz kitoblar sahifasidasiz</h1>`);
});



const server = http.createServer(app);
let PORT  = 4000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`);
});
