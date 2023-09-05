const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    CategoryName:String,
    
},{collection:'foodcategory'})

const model=mongoose.model('foodcategory',schema)

module.exports=model