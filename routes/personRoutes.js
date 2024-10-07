const express = require('express');
const router = express.Router();
const Person = require('./../models/person')


//Defining the All the routes(such as: get,post,put,delete) in personRoutes.js file itself !!

// Here, We are CHANGING app TO router *
router.post('/', async (req,res)=>
    {
    try{ 
      const data = req.body;
  
      const newPerson = new Person(data);//Transvering  all the properties from Person() to newPerson 
                                     //and making newPeraon to follow the rules and structure of Person() in newPerson .
                                     //after entering through POST METHOD!
      const response = await newPerson.save();
      console.log("data saved!")
      res.status(200).json(response)                         
  
    }
    catch(err){
          console.log(err);
          res.status(200).json({error : 'internel server error'})
    }
  })
  

  //Implementation of the get method !!
router.get('/', async(req,res)=>{
        try{
          const data = await Person.find();
        console.log("fetched");
        res.status(200).json(data);
        }
        catch(err){
          console.log(err);
          res.status(200).json({error : 'internel server error'})
    }
  
  })

// WORK-TYPE**
  router.get('/:workType',async(req,res)=>{
    const workType = req.params.workType;
    try{
     if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){
       const response = await Person.find({work: workType});
       console.log('WORK END POINT GO FETCHED')
       res.status(200).json(response);
   
      }
      else{
       res.status(404).json({error : "invalid work type"});
 
      }
    }
    catch(err){
 
      console.log(err)
      res.status(500).json({error: "internel server error"});
 
    }
 
 })




//update method for person using the unique identifier which is "id"..
 router.put('/:id', async(req, res)=>{
  try{
    const personId = req.params.id;// This implies the GET method;
    const updatedPersonData = req.body;//post method implementation!
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation ,
                   //it checks the schema guidelines or the rule's .. As We defined in the schema.
                   //Like, name : required (or) price : required ..etc....!

    })

    if(!response){
        return res.status(404).json({error: 'person not found'})

    }


    console.log('data has been updated.')
    res.status(200).json(response);


  }


  catch(err){
    console.log(err)
    res.status(500).json({error: "internel server error"});

  }

})


//method for deletion

 router.delete('/:id', async(req, res)=>{
  try{
    const personId = req.params.id;// This implies the GET method;
    const response = await Person.findByIdAndDelete(personId)
    if(!response){
        return res.status(404).json({error: 'person not found'})

    }

    console.log('data has been deleted.')
    res.status(200).json({message : "person has been deleted sucessfully"})
  }

  catch(err){
    console.log(err)
    res.status(500).json({error: "internel server error"});

  }

});


//exporting - permissions**
 module.exports = router;