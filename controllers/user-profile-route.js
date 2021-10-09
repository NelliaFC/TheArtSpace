//route to the user page with saved art. 
const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");



const router = require ("express").Router();
const sequalize = require("../config/config");
const { Artist, Comments, Post, User} = require("../models")


