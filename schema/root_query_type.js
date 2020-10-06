const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require('mongoose')
const DepotType = require('./DepotType')
const TransactionType =require('./TransactionType')
const Depot = require('../models/DepotModel')
const Transaction = require('../models/TransactionModel')



const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      //add all fields in your schema
      /*
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    }*/
    
    depots:{ 
      type: new GraphQLList(DepotType),
      resolve(){
        return Depot.find({});
      }
    },
    depot:{ 
      type: DepotType,
      args:{
        id:{
          type: new GraphQLNonNull(GraphQLID)
        }},
      resolve(parentValue,{id}){
        return Depot.findById(id);
      }

    },
    transaction:{
      type: TransactionType,
      args:{
        id:{
          type: new GraphQLNonNull(GraphQLID)
      }},
      resolve(parentValue,{id}){
        return Transaction.findById(id);
      }
    
    }
  })
});

module.exports = RootQuery;
