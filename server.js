const express = require("express");
 // For CommonJS
const app = express();
const db = require('./db');
require('dotenv').config();




//Body parser is only required when we are using the POST METHOD );
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = process.env.PORT || 3006;
// using DOTENV);
//const PORT = 3006;




//importing the router files 
// *****FOR -> PERSON*****
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)



// **** FOR -> MENU******
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes)






app.listen(port, (req,res)=>{

    console.log("The server is sucessfully running!")
})