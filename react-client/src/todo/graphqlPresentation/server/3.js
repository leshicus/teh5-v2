// compicated mutation

var { buildSchema } = require("graphql");
var { runApp, fakeDB } = require("./helpers");

var schema = buildSchema(`
  input MessageInput{
    content: String
  }
  type MessageReturn{
    id: ID
    content: String
    timestamp: Int
  }

  type Mutation{
    createMessage(param: MessageInput): MessageReturn
    getMessage: MessageReturn
  }

  type Query{
    getIp: String
  }
`);

var root = {
  createMessage: ({ param }, request) => {
    var id = Math.floor(Math.random() * 10000);
    var timestamp = new Date().getTime();
    fakeDB[id] = { ...param, timestamp };

    return {
      id: id,
      ...fakeDB[id]
    };
  },
  getMessage: () => {
    return {
      id: Object.keys(fakeDB)[Object.keys(fakeDB).length - 1]
    };
  },
  getIp: (args, request) => request.ip
};

runApp(schema, root);
