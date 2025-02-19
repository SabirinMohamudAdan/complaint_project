const mongoose =require("mongoose")

const complShema =mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("CompTable",complShema)