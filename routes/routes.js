/*
 *Title: Routes
 *Descripion:Application routes
 *Author: Asadullah Badhan
 *Date: 07/17/2023
 *
 */

// Dependencies
const { sampleHandler } = require('../handler/routeHandler/sampleHandler');
const { userHandler } = require('../handler/routeHandler/userHandler');

// Module - scaffolding
const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
