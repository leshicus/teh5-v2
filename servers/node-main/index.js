const { makeExecutableSchema } = require('graphql-tools')
const { ApolloServer } = require('apollo-server')
const axios = require('axios')

// Construct a schema, using GraphQL schema language
const typeDefs = `
  scalar JSON

  type Query {
    responses: JSON
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    responses: async () => {
      const resp = {
        graphql_api: 'Hello From GraphQL',
      }
      try {
        const { data } = await axios.get('http://node-api:3000')
        resp.node_api = data
      } catch (e) {
        console.log(e)
      }

      try {
        const { data } = await axios.get('http://python-api')
        resp.python_api = data
      } catch (e) {
        console.log(e)
      }

      return resp
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
