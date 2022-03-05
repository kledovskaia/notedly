const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');

const { DB_HOST, JWT_SECRET, PORT } = process.env;
const port = PORT || 4000;

const app = express();
app.use(helmet());
app.use(cors());

db.connect(DB_HOST);

const getUser = token => {
  if (token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (err) {
      console.error(err);
      throw new Error('Session invalid');
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    const user = getUser(token);
    return { models, user };
  },
});

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(
    `GraphQL Server is running at http://localhost:${port}${server.graphqlPath}`
  );
});
