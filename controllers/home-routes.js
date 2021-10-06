//gallery route (main page) includes "comments route"
const router = require("express").Router();
const sequelize = require("../config/config");
const { Artist, Comments, Post, User } = require("../models");

 // GO TO DB and get all the Posts Post.findAll()

router.get("/", (req, res) => {
    Post.findAll({
      include: [User],
    })
      .then((dbPostData) => {
        const galleryPosts = dbPostData.map((post) => post.get({ plain: true }));
  
        res.render("gallery", { galleryPosts });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

// router.get("/", (req, res) => {

//     // GO TO DB and get all the POsts Post.findAll()

//     var fakePosts = [{ title: 'First Post' }, { title: ' Second post' }]

//     res.render('gallery', { posts: fakePosts })
// })

// router.get("/login", (req, res) => {
//     res.render('login')
// })

// get single post
router.get("/gallery/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comments,
        include: [User],
      },
    ],
  })
    .then((dbPostData) => {
      if (dbPostData) {
        const galleryPosts = dbPostData.get({ plain: true });

        res.render("gallery", {galleryPosts});
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;