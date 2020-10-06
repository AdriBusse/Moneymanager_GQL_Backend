const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

  const TransactionSchema = new Schema({
      describtion : String,
      amount : Number,
      createdAt : { type: Date, default: Date.now },
      depotId : String //which part of depot


  })

  module.exports = mongoose.model('Transaction', TransactionSchema);