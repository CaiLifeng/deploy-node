let appEnv = process.env.NODE_ENV;

if(typeof appEnv === 'undefined'){
    appEnv = 'development';
}

module.exports = require(`../config/${appEnv}.js`);