/*
 *Title: User Handler
 *Descripion: Handler for user related operation
 *Author: Asadullah Badhan
 *Date: 07/21/2023
 *
 */

// dependencies
const { hash } = require('../../helpers/utilities');
const data = require('../../lib/data');

// module scaffolding
const hanlder = {};

hanlder.userHandler = (requestProperties, callBack) => {
    const acceptedMethod = ['get', 'post', 'put', 'delete'];

    if (acceptedMethod.indexOf(requestProperties.method) > -1) {
        hanlder._user[requestProperties.method](requestProperties, callBack);
    } else {
        callBack(405);
    }
};

hanlder._user = {};

hanlder._user.get = (requestProperties, callBack) => {
    callBack(200);
};
hanlder._user.post = (requestProperties, callBack) => {
    const firstName =
        typeof requestProperties.body.firstName === 'string' &&
        requestProperties.body.firstName.trim().length > 0
            ? requestProperties.body.firstName
            : false;

    const lastName =
        typeof requestProperties.body.lastName === 'string' &&
        requestProperties.body.lastName.trim().length > 0
            ? requestProperties.body.lastName
            : false;

    const phone =
        typeof requestProperties.body.phone === 'string' &&
        requestProperties.body.phone.trim().length === 11
            ? requestProperties.body.phone
            : false;

    const password =
        typeof requestProperties.body.password === 'string' &&
        requestProperties.body.password.trim().length > 0
            ? requestProperties.body.password
            : false;

    const tosAgreement =
        typeof requestProperties.body.tosAgreement === 'boolean' &&
        requestProperties.body.tosAgreement
            ? requestProperties.body.tosAgreement
            : false;

    if (firstName && lastName && phone && password && tosAgreement) {
        // make sure user doesn't exist
        data.read('users', phone, (err) => {
            if (err) {
                const userObject = {
                    firstName,
                    lastName,
                    phone,
                    password: hash(password),
                    tosAgreement,
                };
                // now creat user
                data.create('users', phone, userObject, (err2) => {
                    if (!err2) {
                        callBack(200, {
                            message: 'User created successfully',
                        });
                    } else {
                        callBack(500, {
                            error: 'Could not create user',
                        });
                    }
                });
            } else {
                callBack(500, {
                    error: 'There is a problem in server, may be user already exist',
                });
            }
        });
    } else {
        callBack(400, {
            error: 'There is a problem in your request',
        });
    }
};
hanlder._user.put = (requestProperties, callBack) => {};
hanlder._user.delete = (requestProperties, callBack) => {};

module.exports = hanlder;
