//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comment, Post, User } = require("../models");
const { restore } = require("../models/Artist");

// Get all routes from home page
// router.get("/", async(req, res) => {
//     try {
//         const postData = await Post.findAll({});
//         const posts = postData.map((post) => post.get({ plain: true }));
//         res.render("gallery", { posts });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get("/login", (req, res) => {
    res.render('login')
})
router.get("/gallery", (req, res) => {
    res.render('gallery')
})
router.get("/homepage", (req, res) => {
    res.render('homepage')
})
module.exports = router;


// router.get("/", (req, res) => {

//     // GO TO DB and get all the POsts Post.findAll()

//     // var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]

//     res.render('gallery', { posts: fakePosts })
// })
const router = require('express').Router();
const sequelize = require('../config/config');
const { Artist, Comments, Post, User } = require('../models');

//Get all routes from home page
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('gallery', { posts });
    // res.render('newpost', { user_id: req.session.id });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});
module.exports = router;
