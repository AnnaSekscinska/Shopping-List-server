const express = require("express");
let mysql = require('mysql2');
const cors = require("cors");

let con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "ania",
    port: 3306,
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
})



const app = express();
app.use(cors());
app.use(express.json());

let zakupy =[];
app.get("/api/products", async (req, res) =>{

    res.json(zakupy);
})

app.put("/api/products", (req, res) => {
    console.log(req.body);
    zakupy.push(req.body);
    res.json(zakupy);
})

app.listen(6767, () => {
    console.log("67676767")
})




