// app/routes/books.js
var multer = require("multer"),
  path = require("path"),
  Book = require("../models/books");

module.exports = (router) => {
  "use strict";
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../bookDir')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })

  var upload = multer({
      storage: storage
    })
    // This will handle the url calls for /users/:user_id
  router.route("/:bookId")
    .get((req, res, next) => {
      console.log("pase");
      // Return user
      return Book.find({})
    })
    .put((req, res, next) => {
      // Update user
    })
    .patch((req, res, next) => {
      // Patch
    })
    .delete((req, res, next) => {
      // Delete record
    });

  router.route("/")
    .get((req, res, next) => {
      // Logic for GET /users routes
      console.log("call all");
      // Return user
      var values = Book.find({}, (err, books) => {
        res.send(books);
      });
    }).post(upload.single('file'), (req, res, next) => {
      // Create new usera
      console.log("post new element" + req.file);
      var book = new Book({
        title: req.file.originalname
      });
      book.save((err) => {
        if (err)
          console.log(err);
        console.log(req.file.originalname + " Agregado");
      })
      res.status(204).end();
    });
};
