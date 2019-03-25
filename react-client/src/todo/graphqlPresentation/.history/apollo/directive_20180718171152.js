const { ApolloServer, gql, PubSub, withFilter } = require("apollo-server");

const pubsub = new PubSub();

const typeDefs = gql`
  type Subscription {
    postAdded(author: String): Post
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    addPost(author: String, comment: String): Post
  }
  type Post {
    author: String
    comment: String
  }
`;

const POST_ADDED = "POST_ADDED";

function Post() {
  const db = [];

  this.addPost = (post) => {
    db.push(post);
  };

  this.posts = () => {
    return db;
  };
}

const postController = new Post();

const resolvers = {
  Subscription: {
    postAdded: {
      // Additional event labels can be passed to asyncIterator creation
      subscribe: withFilter(
        () => pubsub.asyncIterator([POST_ADDED]),
        (payload, variables) => {
          return payload.postAdded.author === variables.author;
        }
      )
    }
  },
  Query: {
    posts(root, args, context) {
      return postController.posts();
    }
  },
  Mutation: {
    addPost(root, args, context) {
      pubsub.publish(POST_ADDED, { postAdded: args });
      return postController.addPost(args);
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
