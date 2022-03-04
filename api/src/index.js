const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

const db = require('./db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

const { DB_HOST } = process.env;
const port = process.env.PORT || 4000;

const app = express();

db.connect(DB_HOST);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ models }),
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(
    `GraphQL Server is running at http://localhost:${port}${server.graphqlPath}`
  );
});
