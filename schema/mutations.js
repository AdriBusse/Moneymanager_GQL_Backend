const graphql = require('graphql');
const mongoose = require('mongoose')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat, GraphQLNonNull } = graphql;
const DepotType = require('./DepotType')
const Depot = mongoose.model('Depot')
const TransactionType = require('./TransactionType')
const Transaction = mongoose.model('Transaction')


const mutation = new GraphQLObjectType({

  name: 'Mutations',
  fields: {
    addDepot:{ 
      type: DepotType,
      args:{ 
        name: {type: GraphQLString},
        short: {type: GraphQLString}
      },
      resolve(parentValue,{name, short}){
          return (new Depot({name,short})).save()
      }
    },

    addTransaction:{ 
      type: TransactionType,
      args:{
        describtion:{type: GraphQLString},
        amount:{type: GraphQLFloat},
        depotId:{type: GraphQLID}
        
      },
      resolve(parentValue, {describtion, amount, depotId}){
        return (new Transaction({describtion, amount, depotId})).save()
      }
    },
  deleteDepot:{
    type: DepotType,
    args: {
      id: {type: GraphQLString}
    },
    resolve(parentValue,{id}){
      //TODO delet also all Transactions belong to it
      return Depot.deleteOne({_id: id})
    }
  },
  deleteTransaction:{
    type:TransactionType,
    args: {id: {type: GraphQLID}},
    resolve(parentValue,{id}){
      return Transaction.deleteOne({_id: id})
    }
  },
  editTransaction:{
    type:TransactionType,
    args: {id: {type: new GraphQLNonNull(GraphQLString)},
           describtion:{type: new GraphQLNonNull(GraphQLString)},
           amount:{type: new GraphQLNonNull(GraphQLFloat)}
  },
    resolve(parentValue,{id, describtion, amount}){
      const filter = id;
      const update = {describtion, amount};
      return Transaction.findOneAndUpdate(filter, update)
      

    }
  }
  }
});

module.exports = mutation;
