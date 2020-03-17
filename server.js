const express = require('express');
const helmet = require('helmet');

const routes = require("./data/routers");

const server = express();

server.use(helmet());
server.use(express.json());

server.use(routes);

module.exports = server;
