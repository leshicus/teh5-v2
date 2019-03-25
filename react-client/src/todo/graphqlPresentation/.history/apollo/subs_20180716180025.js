//@flow
const { ApolloServer, gql, PubSub } = require("apollo-server");

const pubsub = new PubSub();

const typeDefs = gql`
  type Subscription {
    postAdded: Post
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
  const db = {};

  this.addPost = (post) => {
    db[post.id] = post;
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
      subscribe: () => pubsub.asyncIterator([POST_ADDED])
    }
  },
  Query: {
    posts(root: any, args: any, context: any) {
      return postController.posts();
    }
  },
  Mutation: {
    addPost(root: any, args: any, context: any) {
      pubsub.publish(POST_ADDED, { postAdded: args });
      return postController.addPost(args);
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
