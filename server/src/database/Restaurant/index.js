import mongoose from "mongoose";
const RestaurantSchema =new mongoose.Schema(
    {
       name:{type:String,required:true},
       city:{type:String,required:true},
       address:{type:String,required:true},
       maplocation:{type:String,required:true},
       cuisines:[String],
       timing:String,
       contactno:{type:Number},
       website:String,
       populardishes:[String],
       avgCost:Number,
       amenties:[String],
       menuImages:{type:mongoose.Types.ObjectId,
    ref:"images"},
    menu:{
        type:mongoose.Types.ObjectId,
    ref:"images"
    }

    },
    {
        timestamps:true
    }

);
export const RestaurantModal=mongoose.model("restaurant",RestaurantSchema);