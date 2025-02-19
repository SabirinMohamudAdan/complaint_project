
const express=require("express")
const mongoose=require("mongoose")
const modelSchema=require("./model/modelSchema")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())

// connection database

mongoose.connect("mongodb://localhost:27017/compdb").then(()=>{
    console.log("database has been connected")
}).catch((err)=> console.log(err))

// create data


app.post("/create/comp",async(req,res)=>{
    const newData=modelSchema(req.body)
    const saveDta=await newData.save()
    if(saveDta){
        res.send(saveDta)
    }
})
// -------get 

app.get("/read/comp",async(req,res)=>{
    const getData= await modelSchema.find()
    
    if(getData){
        res.send(getData)
    }
})

// ----update data----------------
app.put("/update/comp/:id",async(req,res)=>{
    const updatedata=await modelSchema .updateOne(
        {_id:req.params.id},
        {$set:req.body}
    )
    if(updatedata){
        res.send("success update")
    }
})

// ------------delete data----------------
app.delete("/delete/comp/:id",async(req,res)=>{
    const deletedata=await modelSchema.deleteOne({_id:req.params.id})
    if(deletedata){
        res.send(" success delete data")
    }

})


app.listen(7000,()=> console.log("server is running "))