import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
 import mongoose from "mongoose";
import route from "./routes/index";

const app= express();

app.use(bodyParser.json());
app.use("/",route);
//database configration
const database = process.env.DATABASE;
mongoose
 .connect(database, { useNewURLParser:true, useUnifiedTopology:true,
})
 .then(()=>{console.log("Database is well connected");
});
    
    

//server configuration
const port = process.env.PORT ||4040;
app.listen(port,() => {
    console.log(`server is running on  port ${port}`);
});


export default app;