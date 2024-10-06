const express = require('express')
const app = express()
const db = require('./db');



//Body parser is only required when we are using the POST METHOD );
const bodyParser = require('body-parser');
app.use(bodyParser.json());



//importing the router files 
// *****FOR -> PERSON*****
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes)



// **** FOR -> MENU******
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes)





app.listen(3009 , (req,res)=>{

    console.log("The server is sucessfully running!")
})