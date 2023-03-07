const express = require('express')
const router = express.Router()
const Person = require('../Models/PersonSchema')





   router.post("/addNewPerson" , (req,res)=>{
    
    //Create and Save a Record of a Model

    let newPerson=new Person(req.body)
    newPerson.save( (err,data)=>{
    err? console.log(err) : res.send('person was added')
    })

   })
   //Create Many Records with model.create()
   const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['tacos', 'burritos'] },
  { name: 'Bob', age: 40, favoriteFoods: ['steak', 'potatoes'] },
  { name: 'Charlie', age: 18, favoriteFoods: ['ice cream', 'cake'] }
];

Person.create(arrayOfPeople, function(err, people) {
  if (err) return console.error(err);
  console.log('People saved to database:', people);
});
 //model.find() to Search Your Database
router.get("/getcontact", (req, res) => {
    contact.find()
        .then((data) => res.json(data))
        .catch((err) => console.log(err))
})
//Use model.findOne() to Return a Single Matching Document from Your Database
  router.get("/getOne",(req,res)=>{
    contact.findOne({"favoriteFoods":["Chips", "spaghetti"]})
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  })
  //Use model.findById() to Search Your Database By _id
  router.get("/getbyid/:id",(req,res)=>{
    contact.find({_id:req.params.id})
    .then((data) => res.json(data))
    .catch((err) => console.log(err))

  })
  //Perform Classic Updates by Running Find, Edit, then Save
  router.put("/update/:id",(req,res)=>{
    contact.findByIdAndUpdate({_id:req.params.id},{...req.body},)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  })
  //Perform New Updates on a Document Using model.findOneAndUpdate()
  router.put("/findNameAndSetAge/:name", (req, res) => {
    contact.findOneAndUpdate(
      { name: req.params.name },
      { ...req.body },
      (err, data) => {
        if (err) throw err;
        else {
          res.json(req.body);
        }
      }
    );
  });
  //Delete One Document Using model.findByIdAndRemove
  router.delete("/deleteOne/:id",(req, res)=>{
    contact.findOneAndRemove({_id:req.params.id},{...req.body},)
    .then((data) => res.json(data))
    .catch((err) => console.log(err))
  })

router.delete("/findAndDeleteMany", (req, res) => {
  contact.remove({ name: "aicha" }, (err, data) => {
    if (err) throw err;
    else {
      res.json({ msg: "deleted document", data });
    }
  });
});



  router.get('/allUser' , (req,res)=>{
    contact.find({ favoriteFoods : "pizza"}).select("name").limit(2)

    .then((data)=> res.status(200).json(data))
    .catch((err)=> res.json(err))
  })

module.exports = router