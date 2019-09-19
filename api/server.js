const express = require('express');
const configureMiddleware = require('./middleware');

const server = express();

configureMiddleware(server);

// sanity check
server.get('/', (req, res) => {
	res.status(200).json({ api: 'up'});
});

module.exports = server;
