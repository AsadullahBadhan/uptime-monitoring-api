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

    req.on('data', (buffer) => {
        bodyData += decoder.write(buffer);
    });

    req.on('end', () => {
        bodyData += decoder.end();
        console.log(bodyData);
        // handle response
        res.end('hello world of programmers');
    });
};

module.exports = handler;
