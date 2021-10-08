//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comments, Post, User } = require("../models");

//Get all routes from home page

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      // include: [User]
    
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('gallery', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get("/", (req, res) => {

// router.get("/", (req, res) => {


//     // GO TO DB and get all the POsts Post.findAll()

//     var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]


//     res.render('gallery', { posts: fakePosts })
//     res.render('newpost' , {user_id : req.session.id })
//     //res.render('gallery', { posts: fakePosts })

// })

//     //var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]
//   var fakePosts = Post.findAll()
//     res.render('gallery', { posts: fakePosts })
// })




router.get("/", (req, res) => {

    // GO TO DB and get all the POsts Post.findAll()

    var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]

    res.render('gallery', { posts: fakePosts })
})

router.get("/login", (req, res) => {
    res.render('login')
})
module.exports = router;