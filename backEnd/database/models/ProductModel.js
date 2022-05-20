const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    slug:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
});

mongoose.model("product", ProductSchema);

// var Product = mongoose.model("product");

// new Product ({
//     name: "Camisa vermelha",
//     price: 30,
// }).save().then(()=>{
//     console.log("New product save");
// }).catch((err)=>{
//     console.log("Oops! There is an error: ", err)
// });