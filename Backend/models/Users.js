const mongoose=require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    secretCode:{
        type: String,
        required:true
    },
    comment:[{
        type:String
    }]
});

module.exports=mongoose.model('user',UserSchema)