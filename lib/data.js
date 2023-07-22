// Dependencies
const fs = require('fs');
const path = require('path');

// Module - scaffolding
const lib = {};

// Base directory of data folder
lib.basedir = path.join(__dirname, '/../.data/');

// Write data to file
lib.create = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            // Convert data to string
            const stringData = JSON.stringify(data);
            // Write data to file and close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    // Close the file
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            // if file close successfully callback return false
                            callback(false);
                        } else {
                            callback('Error closing new file');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            });
        } else {
            callback('Could not create file, it may be exists');
        }
    });
};

lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

lib.update = (dir, file, data, callback) => {
    fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringifyData = JSON.stringify(data);

            // truncate data
            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    fs.writeFile(fileDescriptor, stringifyData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) callback(false);
                                else callback('Error closing file');
                            });
                        } else {
                            callback('Error writting to file');
                        }
                    });
                } else {
                    callback('Error truncating file');
                }
            });
        } else {
            callback('Error updating file, File may not exist');
        }
    });
};

lib.delete = (dir, file, callback) => {
    fs.unlink(`${lib.basedir + dir}/${file}.json`, (err) => {
        if (!err) callback(false);
        else callback('Error deleting file');
    });
};

module.exports = lib;
