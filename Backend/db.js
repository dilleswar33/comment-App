const mongoose=require('mongoose')
const mongoURI="mongodb+srv://dillu:123abc456def@cluster0.f5hch.mongodb.net/MyComment?retryWrites=true&w=majority"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI)
    .then(()=>console.log("mongoDB Connected..."))
    .catch((err)=>console.log(err))
}

module.exports  = connectToMongo;