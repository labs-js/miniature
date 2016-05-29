var express = require("express"),
    morgan = require("morgan"),
    bodyParser = require("body-parser");

var app = express();

app.listen(3000, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening port 3000");
    }
});
