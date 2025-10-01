import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

describe('GraphQL API', () => {
    it('should return a user by id', async () => {
        const response = await server.executeOperation({
            query: `
            query {
                getUser(id: "1") {
                    id
                    name
                    email
                    age
                
                }
            }
            `
        })

        expect(response.errors).toBeUndefined()
        expect(response.data?.getUser).toEqual({
            id: "1",
            name: "João",
            email: "joao@example.com",
            age: 22,
        })
    })

    it('should return all users', async () => {
        const response = await server.executeOperation({
            query: `
            query {
                listUsers {
                    id
                    name
                    email
                    age
                }
            }
            `
        })
        expect(response.errors).toBeUndefined()
        expect(response.data?.listUsers.length).toBeGreaterThan(0)
    })

    it('should return an error when querying a non-existent field', async () => {
        const response = await server.executeOperation({
            query: `
        query {
            getUser(id: "1") {
                id
                nickname
            }
        }
        `
        })

        expect(response.errors).toBeDefined()
        expect(response.errors?.[0]?.message || '').toContain('Cannot query field')
    })
    it('should resolve query within 100ms', async () => {
        const start = Date.now()

        const response = await server.executeOperation({
            query: `
            query {
                listUsers {
                    id
                    name
                }
            }
            `
        })

        const duration = Date.now() - start
        expect(response.errors).toBeUndefined()
        expect(duration).toBeLessThan(100)
    })
})