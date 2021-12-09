// Bring in the knex library
const knex = require('knex');

// Bring in the knex config files
const configs = require('../knexfile');

// to create a connection to the db, need to know what environment we're in
const currentEnv = process.env.NODE_ENV || 'development'

// Will be dev, test, or prod
const configToUse = configs[currentEnv]

// So the connection is...
const connection = knex(configToUse)

module.exports = connection