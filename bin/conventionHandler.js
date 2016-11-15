#!/usr/bin/env node

module.exports = function(dependencies) {

    'use strict';
    var fs = dependencies.fs,
        conventionFile = dependencies.conventionFile; 

    return {
        getConventionFor: function(key) {
            console.log('pasa por aca');
            return JSON.parse(
                fs.readFileSync(conventionFile, 'utf8')
            );
        }

    };

};
