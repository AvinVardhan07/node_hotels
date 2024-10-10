
const mongoose = require('mongoose'); //STEP : 01
require('dotenv').config(); 
                          //Requiring DOTENV in both server.js file and in db.js also 
                            // because we are  letting the db.js to know about the DOTENV !! becoz to process the 
                            // thing called : "process.env.MONGDB_URL";

//defining mongoDB URL
 /* --- STEP : 02 */
 const mongoURL = process.env.MONGODB_URL_LOCAL;  
                                             //Note ://here : '/hotel' is the name of the our database and  //it(link) will be available in mongoDB compass!
                                                    
 //const mongoURL = process.env.MONGODB_URL;
  

//establishing connection with the function call 'connect' which is a in built function of mongoose ODM-library!
// STEP : 03 
mongoose.connect(mongoURL)



// STEP : 04 _Creating a variable or obj which containes whole node-mongodb connection which results easy usage of connection in multiple files!
 const db = mongoose.connection; // db is an obj ...it manages the entire db connection  process and gennerally 
                                // its like mom in house ..maintains everything and knows everything going in home #EVERYTHING !!




// db.on() its an .on() -function/method to attach a event listenrs!..takes 2 parameters !! One is event listener and another is callback function!
// which specifes status of connection in the console !!
//STEP : 05 _For managing the DB-connection Status!
db.on('connected',()=>{
   console.log("database connection DONE..");
})
 

db.on('error',()=>{
   console.log("database connection ERROR..NOT AN ISSUE!");
})


db.on('disconnected',()=>{
   console.log("database connection DISCONNECTED..");
})

//STEP : 06 _Its like a permission for the file-db.js consisting the complete connection process/details...
//permission to use it any other files in this folder EX : IN REACT _ EXPORTING FILES AT LAST SPECIFTYING Export.default = filename !!
module.exports = db;