require("dotenv").config();
const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const DineTableModel = require("../models").DineTable;

// SIGN OUT ROUTE
router.get("/logout", (req, res) => {
  // res.clearCookie("jwt");
  res.redirect("/");
});

// Signup
router.get('/signup', (req,res) => {
  res.render('users/signup.ejs');   
})
// SIGNUP POST
router.post("/profile", (req,res)=>{
  // console.log('hello!', req.body);  
  UserModel.create(req.body).then((thisUser)=>{
      res.redirect('/users/profile/'+thisUser.id);
  })
})

// login
router.get('/login', (req,res) => {
  res.render('users/login.ejs');
})
// LOGIN POST
router.post('/login', (req, res)=>{
  UserModel.findOne({    
      where: {
      username: req.body.username, 
      password: req.body.password
      }        
  }).then((thisUser) => {           
      res.redirect('/users/profile/'+thisUser.id);
  });
})

// Edit: GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  // console.log("Hello!", req.params);
  UserModel.findByPk(req.params.id, {
    include: [{ model: DineTableModel}],
  }).then((userProfile) => {
    DineTableModel.findAll({
      where: {userId: userProfile.id}
    }).then((foundDineTables) => {
      res.render("users/profile.ejs", {
        user: userProfile,
        dineTables: foundDineTables
      })
    });
  });
});
//EDIT PUT
router.put('/profile/:index', (req, res) => { 
  // console.log('hello!', req.body, req.params.index);
  UserModel.update(req.body, {
      where: {id: req.params.index },
      // returnin: true
  }).then((thisUser) => {
      res.redirect('/users/profile/'+req.params.index);
  }); 
});

// Delete
router.delete('/:id', (req, res)=>{
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/"); 
  });
})

module.exports = router;
