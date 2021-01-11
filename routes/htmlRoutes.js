// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const router = require("express").Router();

// Routes
// =============================================================
// module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // blog route loads blog.html
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  module.exports = router;

// };
