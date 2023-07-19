/*
 *Title: Handle Request and Response
 *Descripion:
 *Author: Asadullah Badhan
 *Date: 07/17/2023
 *
 */

// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes/routes');
const { notFoundHandler } = require('../handler/routeHandler/notFoundHandler');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // handle request
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const headerObject = req.headers;
    const queryStringObject = parsedUrl.query;
    const decoder = new StringDecoder('utf-8');

    let bodyData = '';
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        headerObject,
        queryStringObject,
    };

    const choosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        bodyData += decoder.write(buffer);
    });

    req.on('end', () => {
        bodyData += decoder.end();

        choosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the response
            res.writeHead(statusCode);
            res.end(payloadString);
        });
    });
};

module.exports = handler;
