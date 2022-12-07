const express = require("express");
const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    port:"3306",
    database: "db_ctmart",
});

app.get("/", (req, res)=>{
    res.send("App is running but not connected to database...");

    const sqlInsert = "INSERT INTO db_ctmart.account (username, password, firstname, lastname, type) VALUES ('mjat','markovian','mark','taboada','C');"
    db.que 
})

app.listen(3001, () =>{
    console.log("running 3001");
})