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
const environment = require('./helpers/environment');

// App object
const app = {};

// Configuration
app.config = {};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`Listening to http://localhost:${environment.port}`);
    });
};

// Handle request and response
app.handleReqRes = handleReqRes;

app.createServer();
