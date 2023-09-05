const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    CategoryName:String,
    name:String,
    img:String,
    options:Array,
    description:String
},{collection:'food_items'})

const model=mongoose.model('food_items',schema)

module.exports=model