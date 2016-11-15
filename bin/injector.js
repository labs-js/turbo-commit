module.exports = function(dependencies) {

    var result = {};


    var mapping = {
        inquirer: require('inquirer'),
        conventionFile: require('./convention.json'),
        conventionHandler: require('./conventionHandler'),
        init: require('../lib/commands/init')
    }

    for (var i = 0; i < dependencies.length; i++) {
        var dependency = dependencies[i];
        result[dependency] = mapping[dependency];
    }

    return result;

}
