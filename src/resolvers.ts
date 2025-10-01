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