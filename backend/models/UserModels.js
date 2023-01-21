const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    resetPassword:{
        data:String,
        default:""
    },
    tokenAktivasi:{
        type:String,
    },
    isVerified:{
        type:Boolean
    }
})
module.exports = mongoose.model("UserSchema", UserSchema);