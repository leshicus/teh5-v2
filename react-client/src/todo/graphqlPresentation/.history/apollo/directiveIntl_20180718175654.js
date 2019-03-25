const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");
const { defaultFieldResolver, GraphQLString } = require("graphql");

const typeDefs = gql`
  directive @intl on FIELD_DEFINITION

  type Query {
    greeting: String @intl
  }
`;

const translate = (defaultText, path, locale) => {
  console.log(defaultText, path, locale);
  return "new " + defaultText;
};

class IntlDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field, details) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const context = args[2];
      const defaultText = await resolve.apply(this, args);
      // In this example, path would be ["Query", "greeting"]:
      const path = [details.objectType.name, field.name];
      return translate(defaultText, path, context.locale);
    };
  }
}

module.exports = {
  typeDefs,
  IntlDirective
};
