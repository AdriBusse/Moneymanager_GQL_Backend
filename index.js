const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const colors = require('colors');
const cors = require('cors')

const app = express();
app.use(cors())
dotenv.config({path: './config/config.env'})

connectDB();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(4000,()=>{
    console.log("Listen on port 4000...".blue);
}) 