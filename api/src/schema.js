const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar DateTime
  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
    me: User
    users: [User]!
    user(id: ID, username: String): User
  }
  type Mutation {
    newNote(content: String!): Note!
    updateNote(id: ID!, content: String!): Note!
    deleteNote(id: ID!): Boolean!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String, password: String!): String!
  }
  type Note {
    id: ID!
    content: String!
    author: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
  }
`;
