const path = require('path');
const through = require('through2');
const Potrace = require('potrace');

let defaultConfig = {
};

/**
 *
 * @param {*} config Potrace config object
 * @return undefined
 */
module.exports = function (config) {
    config = Object.assign(defaultConfig, config);
    return through.obj(function (file, encoding, callback) {
        Potrace.trace(file.contents, config, (err, svg) => {
            if (err) throw err;
            file.path = file.path.replace(/\..+$/, '.svg');
            file.contents = new Buffer(svg);
            this.push(file);
            callback();
        });
    });
};