const express   = require('express')
const  router = express.Router();

const MenuItem = require('./../models/MenuItem');
const Person = require('./../models/person');






router.post('/', async (req,res)=> //POST METHOD FOR "MENU"
  {
  try{ 
    const data = req.body;

    const newMenu= new MenuItem(data);

    const res = await newMenu.save();//Saving! the data**
    console.log("data saved!")
   res.send("success")                        

  }
  catch(err){
        console.log(err);
       res.send("success")
  }
})

//GET METHOD  IMPLEMENTA FOR "MENU"
router.get('/',async(req,res)=>{
  try{
    const data = await MenuItem.find();
     console.log("data has been fetched");
     res.status(200).json(data)


  }
  catch(err){
         console.log(err)
         res.status(200).json({error: "internel server error"});

  }
});




router.get('/:tasteType',async(req,res)=>{
 
  const tasteType = req.params.tasteType;
  try{
   if(tasteType == 'Sweet' || workType == 'spicy' || workType == 'sour'){
     const response = await MenuItem.find({taste: tasteType});
     console.log('TASTE END POINT GO FETCHED')
     res.status(200).json(response);
 
    }
    else{
     res.status(404).json({error : "invalid taste type"});

    }
  }
  catch(err){

    console.log(err)
    res.status(500).json({error: "internel server error"});

  }
})


module.exports = router;



