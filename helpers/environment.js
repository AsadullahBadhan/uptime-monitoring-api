/*
 *Title: Environment of App
 *Descripion:
 *Author: Asadullah Badhan
 *Date: 07/19/2023
 *
 */

const environment = {};

environment.staging = {
    name: 'staging',
    port: 3000,
};

environment.production = {
    name: 'production',
    port: 5000,
};

const currentEnvironment = process.env.NODE_ENV || 'staging';

const environmentToExport = environment[currentEnvironment] || environment.staging;

module.exports = environmentToExport;
