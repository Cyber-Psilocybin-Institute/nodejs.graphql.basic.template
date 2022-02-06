require('dotenv').config();

const path = require('path');
const mongoose = require('mongoose');
const { GraphQLServer } = require('graphql-yoga');

const resolvers = require('./resolvers');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers: resolvers
});

server.start();
