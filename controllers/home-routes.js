//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comments, Post, User } = require("../models");

//Get all routes from home page

router.get("/", (req, res) => {

    // GO TO DB and get all the POsts Post.findAll()

    var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]

    res.render('gallery', { posts: fakePosts })
})

router.get("/login", (req, res) => {
    res.render('login')
})
module.exports = router;