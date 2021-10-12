//route to the user page with saved art. 
const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");



const router = require("express").Router();
const sequalize = require("../config/config");
const { Artist, Comments, Post, User } = require("../models")

router.get("/", (req, res) => {
    User.findAll({
            attribute: { excluder: ["password"] }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get("/:id", (req, res) => {
    User.findOne({ "userID": any })
        .exec()
        .then(doc => {
            res.render("user.hbs", {
                name: doc.name,
                nick: doc.nickname
            });
        })
        .catch(err => {
            console.log(err);
        });
});
module.export = router;