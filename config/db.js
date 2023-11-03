const mongoose =require("mongoose")

const connect=async()=>{
   try {
    await mongoose.connect("mongodb+srv://chiranjsutariya372:chiranj@cluster0.vzywpba.mongodb.net/?retryWrites=true&w=majority")
    console.log("conncet to mongodb");
   } catch (error) {
    console.log(error);
   }
}

module.exports=connect