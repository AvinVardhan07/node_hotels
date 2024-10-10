const express = require("express");
 // For CommonJS
const app = express();
const db = require('./db');
require('dotenv').config();
//importing authentication related statements..
const passport = require('./auth');




//Body parser is only required when we are using the POST METHOD );
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = process.env.PORT || 3006;
// using DOTENV);
//const PORT = 3006;

const logRequest = (req, res, next) =>{
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
        next();
    }
    app.use(logRequest);


//WRITING THE "VERIFICATION FUNCTION" ..
      
      //-------------

    
//initializing the passport framework..
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session : false});//Compulsory statement..

//general
app.get('/',function (req,res) {
    res.send("This is general page");
    
})


//importing the router files 
// *****FOR -> PERSON*****
const personRoutes = require('./routes/personRoutes');
app.use('/person',localAuthMiddleware, personRoutes)


// **** FOR -> MENU******
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',localAuthMiddleware, menuItemRoutes)

//Specifying the port number
app.listen(port, (req,res)=>{

    console.log("The server is sucessfully running!")
})

