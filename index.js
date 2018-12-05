const express = require('express');
const app = express();
const func = require("./function.js");
const url = require("url");
const PORT = process.env.PORT || 3000


app.get("/square", (req, res) => {
    res.send(func.string_square(req.query.string));
});

app.listen(PORT, () => console.log('App listening on port '+ PORT))
