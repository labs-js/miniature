// app/routes/books.js

module.exports = function(router) {
  'use strict';
  // This will handle the url calls for /users/:user_id
  router.route('/books')
    .get(function(req, res, next) {
      // Return user
      return '0001';
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

  router.route('/')
    .get(function(req, res, next) {
      // Logic for GET /users routes
    }).post(function(req, res, next) {
      // Create new user
    });
};
