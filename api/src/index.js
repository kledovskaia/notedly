require('dotenv').config();
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const db = require('./db');

const { DB_HOST } = process.env;
const port = process.env.PORT || 4000;

let notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' },
];

const typeDefs = gql`
  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
  }
`;

const resolvers = {
  Query: {
    notes: () => notes,
    note: (_, { id }) => notes.find(note => note.id === id),
  },
  Mutation: {
    newNote: (_, { content }) => {
      const note = {
        content,
        id: notes.length + 1,
        author: 'Maddison Matthews',
      };
      notes.push(note);
      return note;
    },
  },
};

const app = express();

db.connect(DB_HOST);

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => {
  console.log(
    `GraphQL Server is running at http://localhost:${port}${server.graphqlPath}`
  );
});
