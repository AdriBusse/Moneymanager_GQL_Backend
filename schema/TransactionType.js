const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLFloat,
} = graphql;
const Depot = require("../models/DepotModel");
const { GraphQLDateTime } = require("graphql-iso-date");

const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: { type: GraphQLID },
    describtion: { type: GraphQLString },
    amount: { type: GraphQLFloat },
    createdAt: { type: GraphQLDateTime },
    depot: {
      type: require("./DepotType"),
      resolve(parentValue, args) {
        return Depot.findById({ DepotId });
      },
    },
  }),
});

module.exports = TransactionType;
