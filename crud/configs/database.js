const {default:mongoose} = require('mongoose')

const connectMongoDB = async()=>{
    try{
        const connectDB = await mongoose.connect(process.env.MONGO_DB)
        if(connectDB.connection.readyState === 1){
            console.log("Connect Database Success")
        }else{
            console.log("Connect Fail")
        }

    }catch(err){
        console.log(err)
    }
}
module.exports = connectMongoDB