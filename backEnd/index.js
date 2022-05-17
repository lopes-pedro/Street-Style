const express = require('express');
const app = express();

app.use({urlencoded:true})

app.get("/", (req,res)=>{
    return res
        .status(200)
        .json({"ok":"ok"});
})

app.get("/t/", (req,res)=>{
    console.log("hmm");
    next();
})

app.listen(3000, ()=>{
    console.log("Server open!");
});