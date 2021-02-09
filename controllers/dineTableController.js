require("dotenv").config();
const express = require("express");
const router = express.Router();
const Food = require('../models').Food;
const User = require('../models').User;
const DineTable = require("../models").DineTable;
const Order = require("../models").Order;

//index
router.get('/', function(req, res) {
    DineTable.findAll().then((allTables) => {
        res.render('index.ejs', {
            allTables: allTables
        }); console.log('hello!', allTables);
    })
});   



module.exports = router;