require("dotenv").config();
const express = require("express");
const router = express.Router();
const Food = require('../models').Food;
const User = require('../models').User;
const DineTable = require("../models").DineTable;
const Order = require("../models").Order;

//INDEX
router.get('/', function(req, res) {
    DineTable.findAll().then((allTables) => {
        res.render('index.ejs', {
            allTables: allTables
        }); 
    })
});   

//NEW
router.get('/new', (req,res) => {
    User.findAll().then((allUsers) => {
        res.render('new.ejs', {
            users: allUsers,
        });
    })
})
//POST add new dine table 
router.post("/", (req,res)=>{
    // console.log("Add dine table request: ", req.body);
    DineTable.create(req.body).then((newDineTable) => {
        res.redirect('/dinetable');
    })
})

//EDIT
router.get('/:id/edit', (req, res)=> {
    DineTable.findByPk(req.params.id, {
        include: [{ model: User}, {model: Food}],
    }).then((foundDineTable) => {
        User.findAll().then((allUsers) => {         
            res.render('edit.ejs', { 
                thisTable: foundDineTable,
                users: allUsers,
            });
        })
    })    
})
//PUT update dine table
router.put('/:id', (req, res) => { console.log('Hello!', req.body); 
    DineTable.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    }).then((foundDineTable) => {
        res.redirect("/dinetable");
    });
});

//SHOW
router.get('/:id', function(req, res) {
    let id = req.params.id;
    DineTable.findByPk(id, {
        include: [{ model: User}, {model: Food}],
    }).then((foundDineTable) => {
        res.render('show.ejs', {
            thisTable: foundDineTable,
        })
    });
});

//delete
router.delete("/:id", (req, res) => {
    DineTable.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/dinetable");
    });
});

module.exports = router;