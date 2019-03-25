const { ApolloServer } = require('apollo-server')
const { mergeSchemas } = require('graphql-tools')
const { textblockSchema } = require('./schemas/textblockSchema')

// Construct a schema, using GraphQL schema language
// const typeDefs = `
//   scalar JSON

// `

const schema = mergeSchemas({
  schemas: [ textblockSchema ],
  resolvers: {},
})

const server = new ApolloServer({
  schema,
  // context: ({ context, event }) => {
  //   // context.callbackWaitsForEmptyEventLoop = false
  //   console.log('disconnect')
  // },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
