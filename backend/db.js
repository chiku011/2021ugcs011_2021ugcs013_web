const mongoose = require('mongoose');
const foodcategory=require('../backend/models/foodcategory')
const food_items=require('../backend/models/fooditems')

const mongoURI='mongodb+srv://chintukumar0460:chiku1234@cluster0.ltn8vrw.mongodb.net/foodexpress?retryWrites=true&w=majority'
const mongoDB=async()=>{
    const x=await mongoose.connect(mongoURI);
//   mongoose.connection.once('open',async ()=>{
//       console.log("connected");
//       const fetched_data= await mongoose.connection.db.collection("foodcategory");
//       console.log(fetched_data)
//       const d=await fetched_data.find({})
//       console.log(d)
    //   d.toArray(function(err,data){
    //       if(err) console.log(err);
    //       else console.log("data= ",data);
    //       console.log("sdfgj")
    //   })
//   })
   

    let d2=await food_items.find({}).exec();
    let d3=await foodcategory.find({}).exec();
    //  console.log(d3)
       global.food_items=d2;
     global.foodcategory=d3;
     
    // d2.toArray(function(err,data){
    //           if(err) console.log(err);
    //           else console.log("data= ",data);
              
    //       })

    
}




mongoDB(); // Call the function to start the process


module.exports=mongoDB;


