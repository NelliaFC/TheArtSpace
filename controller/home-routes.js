//gallery route (main page) includes "comments route"
const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");