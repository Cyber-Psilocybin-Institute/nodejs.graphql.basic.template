const User = require('./User');

module.exports = {
  Query: {
    user: (_, { id }) => User.findById(id),
    users: () => User.find() 
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
};
