var nconf = require("nconf");
var async = require("async");
var logger = require("winston");
var fork = require("child_process");
var server = require("./config/initializers/server");

require("dotenv").load();

// run mongo server
fork.exec("mongod");

// Set up configs
nconf.use("memory");
// First load command line arguments
nconf.argv();
// Load environment variables
nconf.env();

// Load config file for the environment
require("./config/enviroments/" + nconf.get("NODE_ENV"));

logger.info("[APP] Starting server initialization");

// Initialize Modules
async.series([
  function initializeDBConnection(callback) {
    require("./config/initializers/database")(callback);
  },
  function startServer(callback) {
    server(callback);
  }
], function(err) {
  if (err) {
    logger.error("[APP] initialization failed", err);
  } else {
    logger.info("[APP] initialized SUCCESSFULLY");
  }
});
