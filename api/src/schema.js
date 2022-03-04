const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
  }
`;
