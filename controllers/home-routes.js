//gallery route (main page) includes "comments route"
const router = require("express").Router();
const { Artist, Comment, Post, User } = require("../models");

//Get all rounts from home page

router.get("/", (req, res) => {
    res.render('homepage')
})

module.exports = router;