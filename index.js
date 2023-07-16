/*
 *Title: Uptime Monitoring API
 *Descripion: A Restful API to monitor up and down time to user defined links
 *Author: Asadullah Badhan
 *Date: 07/16/2023
 *
 */

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

// App object
const app = {};

// Configuration
app.config = {
    port: 3000,
};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to http://localhost:${app.config.port}`);
    });
};

// Handle request and response
app.handleReqRes = handleReqRes;

app.createServer();
