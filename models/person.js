const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

     },
     username : {
        required : true,
        type : String
     },
     password : {
        required : true,
        type : String
     }

});


//defining a pre mongoose method/function for hashing and salting..
personSchema.pre('save',async function(next) {
   const person = this;
  // hash the password only if it is modified or (if it is new)..
  if(!person.isModified('password'))  return next();//checks the password is modified (or) newOne then move on to next() function ! and 
                                                    //if it not modified "(!modified)" (or) not newOne keep it as it is..****
   try {
      //  firstly generating the hash code (or) password ..
       const salt = await bcrypt.genSalt(10);
      // secondly adding the hash code (or) salt to the regular password..
      const hashedPassword = await bcrypt.hash(person.password , salt);

      //thirdly assigning / replacing hashed password with the person.password;
      person.password = hashedPassword;
      next();

      
   } catch (err) {
      return next(err);

   }
})


personSchema.methods.comparePassword = async function (candidatePassword){
   try{

     const isMatch = await bcrypt.compare(candidatePassword,this.password);
     return isMatch;


   }
   catch(err){
      throw err;

   }
}


















//creating Person model 
const Person = mongoose.model('Person', personSchema);//its generally an api ,which consists some set rules in accepting the data
                                                      //as we mentioned in the schema of person !! and to use all of these we created an model ..(which is indirectly an api**)
                                                      
module.exports = Person;
