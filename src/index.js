const express = require("express");
const bodyParser= require("body-parser");

const {PORT}= require('./config/serverConfig');
const ApiRoutes =require('./routes/index');

// const{Airplane}=require('./models/index');

const SetupAndStartServer= async ()=>{
    //create a express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT, async () =>{
        console.log("Server Started at PORT",PORT);
        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter:true});
        }
        
        
    });


}
SetupAndStartServer();
