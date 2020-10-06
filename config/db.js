const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
      
        console.log(`MongoDB Connect: ${conn.connection.host}`.green.bold)
    }catch(err){
        console.log(`_Error_: ${err.message}`.red)
        process.exit(1)


    }
}
module.exports= connectDB;