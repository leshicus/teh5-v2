const { makeExecutableSchema } = require('graphql-tools')
const axios = require('axios')
const { Mongo } = require('./../mongo')
const { ObjectId } = require('mongodb')

const mongo = new Mongo()

const sortById = (a, b) => {
  if (a.id > b.id) {
    return 1
  }

  if (a.id < b.id) return -1
  return 0
}

const textblockSchema = makeExecutableSchema({
  typeDefs: `
    type Textblock {
      _id: ID!
      id: ID!
      description: String
      lessons: [Lesson]
    }

    type Lesson {
      id: ID!
      description: String
      texts: [Text]
    }

    type Text {
      id: ID!
      title: Title
    }

    type Title {
      rus: String
    }

    type Query {
      textblocks: [Textblock]
      getTextblockById(id: ID!): Textblock
    }
  `,
  resolvers: {
    Query: {
      getTextblockById: async (parent, { id }, context, info) => {
        console.log('Query.getTextblockById', id)
        return await mongo.textblock.findOne(ObjectId(id))
      },
      textblocks: async (parent, { id }, context, info) => {
        console.log('Query.textblock')

        let textblocks = await mongo.textblock.find({}).toArray()

        textblocks.sort(sortById)

        textblocks = textblocks.map(textblock => {
          if (textblock.lessons) textblock.lessons.sort(sortById)

          textblock.lessons = textblock.lessons.map(lesson => {
            if (lesson.texts) lesson.texts.sort(sortById)
            return lesson
          })

          return textblock
        })

        return textblocks
      },
    },
  },
})

module.exports = {
  textblockSchema,
}
