//route to the user page with saved art. 
const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");



const { any } = require("sequelize/types/lib/operators");
const {User, Post, Comments} = require("../models/user");
const router = require("./home-routes");

router.get("/", (req, res)=> {
    User.findAll({
        attribute: {excluder:["password"]}
    })
    .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    });
router.get("/:id", (req, res) => {
    User.findOne({"userID": any})
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


