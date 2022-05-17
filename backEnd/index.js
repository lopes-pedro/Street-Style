const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

//A linha acima funciona como um modo de permissão da CORS

app.get("/", (req,res)=>{
    return res
        .header('Access-Control-Allow-Origin', "*")
        .status(200)
        .json([
            {
                "productName":"Camisa roxa comum",
            }
        ]);
})

app.get("/t/", (req,res)=>{
    console.log("hmm");
    next();
})

app.listen(3000, ()=>{
    console.log("Server open!");
});