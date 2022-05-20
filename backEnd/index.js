//Import data
    const cors = require('cors');
    const express = require('express');
    const app = express();
    const mongoose = require('mongoose');

    const main = require('./routes/main');

// Config
    // Mongoose
    mongoose.Promise = global.Promise;

        async function connect(){
            try{
                await mongoose.connect("mongodb://localhost/StreetStyle", {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useMongoClient:true
                });
                console.log("Database on!");
            }
            catch(err){
                console.log("Error in open database: ", err);
            }
        }
        connect();
        
//Cors permission
    app.use(cors())

//Routes
    app.use("/", main);

//Server localhost:3000
    const PORT = 3000;
    app.listen(PORT, ()=>{
        console.log("Server open!");
    });