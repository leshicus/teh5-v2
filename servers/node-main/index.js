const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')
const axios = require('axios')

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    dogs: [Dog]
  }

	type Dog @cacheControl(maxAge: 1000) {
		id: String!
	}
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    dogs: async () => {
      const dogs = [
        {
          id: '1',
        },
        {
          id: '2',
        },
      ]
      return dogs
    },
  },
}

// Required: Export the GraphQL.js schema object as "schema"
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
  schema,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
