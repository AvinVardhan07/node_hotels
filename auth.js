
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person')




passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    try{
      // console.log('Received credentials:',USERNAME,password);
       const user = await Person.findOne({username : USERNAME});
       if(!user)
        return done(null , false ,{message : "# incorrect username.."}); //incorrect username case by the order:`
                                                                          //: "1.username, 2.password, 3.done" !
       
       //const isPasswordMatch = user.password === password ? true : false; //correct password also !! case by the order:`
                                                                          //: "1.username, 2.password, 3.done" !
        const isPasswordMatch =  await user.comparePassword(password);
       if(isPasswordMatch){
        return done(null, user);  //
       }

       else{
        return done(null ,false,{message : "# incorrect password"});
       }

    }
    catch(err){
          return done(err);  //error case
    }
}));


module.exports = passport;
