const mongoose = require('mongoose');

const personSchema =  new mongoose.Schema({
    name : {type : String , required : true },
    age : {type : Number },
    work : {

           type : String ,
           enum :['chef','waiter','manager'],
           required : true
           
           },

    mobile :{
     type : String,
     required : true,
     unique : true
        
    },

    email : {
        type : String,
        required : true,
        unique : true
    },
   
    address : {
        type : String,

    },
     salary : {
        type : Number,
        required : true

     }

});

//creating Person model 

const Person = mongoose.model('Person', personSchema);//its generally an api ,which consists some set rules in accepting the data
                                                      //as we mentioned in the schema of person !! and to use all of these we created an model ..(which is indirectly an api**)
                                                      
module.exports = Person;
