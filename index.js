const express = require('express');
const app = express();
const func = require("./function.js");

app.get("/square", (req, res) => {
    res.send(func.string_square(req.query.string));
});
