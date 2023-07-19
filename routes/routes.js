/*
 *Title: Routes
 *Descripion:Application routes
 *Author: Asadullah Badhan
 *Date: 07/17/2023
 *
 */

// Dependencies
const { sampleHandler } = require('../handler/routeHandler/sampleHandler');

// Module - scaffolding
const routes = {
    sample: sampleHandler,
};

module.exports = routes;
