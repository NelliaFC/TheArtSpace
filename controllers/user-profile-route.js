//route to the user page with saved art. 
const router = require ("express").Router();
const { Model } = require("sequelize/types");
const sequalize = require("../config/config");
const { Artist, Comments, Post, User} = require("../models")

// root route
router.get ("/", (req, res) => {
    var fakePosts = [{title: "First Post"}, {titel: "Second post"}]

    res.render("gallery", { post: fakePosts})
}
);
router.get("/login", (req, res) => {
    res.render("login")
})

module.exports = routers;