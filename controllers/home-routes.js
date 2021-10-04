//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comment, Post, User } = require("../models");

//Get all routes from home page

router.get("/", (req, res) => {
    res.render('gallery')
})

module.exports = router;