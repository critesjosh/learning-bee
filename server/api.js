const express       = require('express');
const cors       = require('cors');
const bodyParser    = require('body-parser');
const appPublic     = express();

// Create our helpers class instance
const helpers = new (require("./common/helpers/helpers.js"))();

// Load our environment file
const config        = require('./config.js');
process.lb_server_env = config;

// Load our custom logger
const Logger = require('./common/logger.js');
global.publicLoggerSystem = new Logger({fileDirectory: __dirname + "/appPublic/logs"});

//Initialize our models class
const models = new (require("./appPublic/models"))(helpers);

// Create our middlewares class instance
const middlewares = new (require('./common/middlewares/middlewares.js'))(helpers);

// Use bodyParser to allow Express to parse post bodys
appPublic.use(bodyParser.urlencoded({ extended: true }));
// Use bodyParser to allow Express to parse application/json
appPublic.use(bodyParser.json());

appPublic.use(cors());

appPublic.use(express.static(__dirname + '/appPublic/docs'));

// Initialize our internal handler class instance
const publicHandlers = new (require('./appPublic/handlers'))(helpers, models);

// Add our public routes
require('./appPublic/routes')(appPublic, middlewares, publicHandlers);
appPublic.listen(process.lb_server_env.express.port, () => {
  console.log('Public ' + process.lb_server_env.serviceName + ' api live on ' + process.lb_server_env.express.port);
});