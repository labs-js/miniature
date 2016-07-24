// app/routes/books.js

module.exports = function(router) {
  "use strict";
  // This will handle the url calls for /users/:user_id
  router.route("/:bookId")
    .get(function(req, res, next) {
      console.log("pase");
      // Return user
      return {
        name: "test"
      };
    })
    .put(function(req, res, next) {
      // Update user
    })
    .patch(function(req, res, next) {
      // Patch
    })
    .delete(function(req, res, next) {
      // Delete record
    });

  router.route("/")
    .get(function(req, res, next) {
      // Logic for GET /users routes
      console.log("call all");
      // Return user
      res.json({
        message: "hooray! welcome to our api!"
      });
    }).post(function(req, res, next) {
      // Create new user
    });
};
