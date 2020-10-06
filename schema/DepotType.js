const graphql = require('graphql');

const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = graphql;
const Transaction = require('../models/TransactionModel')

const DepotType = new GraphQLObjectType({
    name: 'Depot', 
    fields:()=>({
        id:{ type: GraphQLID},
        name:{type: GraphQLString},
        short:{ type: GraphQLString},
        trans: {type: new GraphQLList(require('./TransactionType')),
                resolve(parentValue, args){
                    return Transaction.find({depotId: parentValue.id})
                }
        }
    })
})

module.exports = DepotType;