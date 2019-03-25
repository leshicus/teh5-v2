const { ApolloServer, gql, SchemaDirectiveVisitor } = require("apollo-server");
const formatDate = require("dateformat");
const { defaultFieldResolver, GraphQLString } = require("graphql");

const typeDefs = gql`
directive @date(
  defaultFormat: String = "mmmm d, yyyy"
) on FIELD_DEFINITION

scalar Date

type Query {
  today: Date @date
}`;

class FormattableDateDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { defaultFormat } = this.args;

    field.args.push({
      name: 'format',
      type: GraphQLString
    });

    field.resolve = async function (
      source,
      { format, ...otherArgs },
      context,
      info,
    ) {
      const date = await resolve.call(this, source, otherArgs, context, info);
      // If a format argument was not provided, default to the optional
      // defaultFormat argument taken by the @date directive:
      return formatDate(date, format || defaultFormat);
    };

    field.type = GraphQLString;
  }
}

module.exports = {
  typeDefs,
  FormattableDateDirective
};