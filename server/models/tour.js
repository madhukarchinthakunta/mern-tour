import mongoose from "mongoose";

const tourSchema =mongoose.Schema({
    titel: String,
    description : String,
    name :String,
    creator:String,
    tags:[String],
    imageFile:String,
    createdAt:{
        tyepe:Date,
        default:new Date(),
    },
    likeCount :{
        type:Number,
        default:0
    }
})

const TourModel=mongoose.model("Tour",tourSchema)

export default TourModel;