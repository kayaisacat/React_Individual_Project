const userResolvers = require('./users');
const uploadResolvers = require('./upload')

// maybe not the right syntax. check here
module.exports = {
    Mutation: {
        ...userResolvers.Mutation, ...uploadResolvers.Mutation
    }
};
