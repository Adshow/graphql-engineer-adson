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