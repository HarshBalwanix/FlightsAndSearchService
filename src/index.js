const express = require("express");
const bodyParser= require("body-parser");

const {PORT}= require('./config/serverConfig');
const CityRepository =require('./repository/city-repository');
const SetupAndStartServer= async ()=>{
    //create a express object
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, async () =>{
        console.log("Server Started at PORT",PORT);
        const repo=new CityRepository();
        repo.createCity({name:"New Delhi"});
    })
}
SetupAndStartServer();
