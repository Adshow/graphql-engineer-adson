/*
Requirements:
GraphQL API Implementation:
Create a simple GraphQL API with the following schema:

Query type with:
getUser(id: ID!): User
listUsers(limit: Int): [User!]!

User type with fields:
id: ID!
name: String!
email: String!
age: Int */

import dist = require("apollo-server");

export const typeDefs = dist.gql `
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Query {
        getUser(id: ID!): User
        listUsers(limit: Int): [User!]!
    }


`