var mongoose = require("mongoose");

module.exports = function(cb) {
  // Handle mongo database stuff
  // TODO: change this string for future versions
  mongoose.connect("mongodb://localhost/books");

  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", ()=> {
    // we"re connected!
    console.log("Connected to Mongoose");
  });

  if (cb)
    return cb();
};
