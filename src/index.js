const express = require("express");
const {PORT}= require('./config/serverConfig');
const SetupAndStartServer= async ()=>{
    //create a express object
    const app=express();
   
    app.listen(PORT, () =>{
        console.log("Server Started at PORT",PORT);
        
    })
}
SetupAndStartServer();
