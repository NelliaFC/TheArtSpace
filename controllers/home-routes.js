//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comments, Post, User } = require("../models");

//Get all routes from home page

router.get('/', async(req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]

        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('gallery', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/homepage", (req, res) => {
    res.render('homepage')
})
router.get("/login", (req, res) => {
    res.render('login')
})
router.get("/signup", (req, res) => {
    res.render('signup')
})

router.get("/homepage", (req, res) => {
    res.render('logout')
})
router.get("/comments.js", (req, res) => {
    res.render('comment')
})
router.get("/add-art.js", (req, res) => {
    res.render('addart')
})
module.exports = router;