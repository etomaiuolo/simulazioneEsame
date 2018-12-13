const express = require('express');
const app = express();
const func = require("./function.js");

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    console.log("Entrato");
    res.status(200).send("Welcome in square!");
});

app.get("/square", (req, res) => {
    if (req && req.query && req.query.string)
        res.status(200).send(func.string_square(req.query.string));
    else    
        res.status(400).send("Invalid request");
});

//app.listen(PORT, () => console.log('App listening on port '+ PORT))

module.exports = {
    app: app
}