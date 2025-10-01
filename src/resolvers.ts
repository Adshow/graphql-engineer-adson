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
age: Int 

Implement resolvers with in-memory data (an array of users).
Ensure the getUser query returns the user by ID or null if not found.
The listUsers query returns a list of users, limited by the optional limit argument.

Automated Testing:
Write automated tests using a testing framework (e.g., Jest) in TypeScript.

Tests should cover:
Valid queries returning expected data.
Handling of invalid queries or missing users.
Basic performance test: measure and assert that a query resolves within 100ms.
Security test: ensure that querying a non-existent field returns an error.


Constraints:
Use TypeScript and Node.js.
Use any open-source GraphQL server library (e.g., apollo-server, graphql-yoga).
Use Jest or any other popular testing framework.
No external database is required; use in-memory data.
The entire challenge should be solvable within 30 minutes.
No cloud deployment is required for this challenge, but containerization is mandatory.
Deliverables:
GraphQL API server code (TypeScript).
Automated test suite code.

*/

const users = [
    { id: "1", name: "João", email: "joao@example.com", age: 22 },
    { id: "2", name: "Maria", email: "maria@example.com", age: 57 },
    { id: "3", name: "Pedro", email: "pedro@example.com", age: 18 },
]

export const resolvers = {
    Query: {
        getUser: (_parent: any, args: { id: string }) => users.find(u => u.id === args.id) || null,
        listUsers: (_parent: any, args: { limit?: number}) => args.limit ? users.slice(0, args.limit) : users
    }
}