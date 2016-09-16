var changeCase = require("change-case");
var express = require("express");
var routes = require("require-dir")();
var multer = require("multer");

module.exports = (app) => {
  "use strict";

  // Initialize all routes
  Object.keys(routes).forEach((routeName) => {
    var router = express.Router();
    console.log(routeName);
    // You can add some middleware here
    // router.use(multer);

    // Initialize the route to add its functionality to router
    require("./" + routeName)(router);

    // Add router to the speficied route name in the app
    console.log("/api/" + changeCase.paramCase(routeName));
    app.use("/api/" + changeCase.paramCase(routeName), router);
  });
};
