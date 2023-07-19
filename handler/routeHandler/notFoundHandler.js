/*
 *Title: Not Found Handler
 *Descripion: 404 Not Found Hanlder
 *Author: Asadullah Badhan
 *Date: 07/17/2023
 *
 */

// module scaffolding
const hanlder = {};

hanlder.notFoundHandler = (requestProperties, callBack) => {
    console.log(requestProperties);

    callBack(404, {
        message: 'Not Found',
    });
};

module.exports = hanlder;
