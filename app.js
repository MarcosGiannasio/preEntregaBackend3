const cluster          = require("node:cluster")
const { cpus }         = require("node:os")
const { startServer }  = require("./src/server.js");
const { logger }       = require("./src/utils/logger.js");
const numeroDeCpu      = cpus().length


startServer()
