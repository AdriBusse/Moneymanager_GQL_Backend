const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const DepotModel = new Schema({
    name: String,
    short: String
})

module.exports = mongoose.model('Depot', DepotModel);