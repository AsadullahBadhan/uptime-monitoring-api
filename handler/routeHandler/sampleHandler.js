/*
 *Title: Route Handler
 *Descripion: Hanlder function for routes
 *Author: Asadullah Badhan
 *Date: 07/17/2023
 *
 */

// module scaffolding
const hanlder = {};

hanlder.sampleHandler = (requestProperties, callBack) => {
    console.log(requestProperties);

    callBack(200, {
        message: 'This is a sample url',
    });
};

module.exports = hanlder;
