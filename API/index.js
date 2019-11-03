var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/returns", (req, res, next) => {
 res.json(0.34);
});
