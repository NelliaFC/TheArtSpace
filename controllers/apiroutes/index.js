//consolidated api routes only from api routes AND add part of the 
const router = require('express').Router();

const userRoute = require('./user-auth');
const galleryRoute = require('./gallery-route');
const commentRoute = require('./comments-route');
const artistRoute = require('./artist-route');

router.use('/user', userRoute);
router.use('/gallery', galleryRoute);
router.use('/comments', commentRoute);
router.use('/artist', artistRoute);

module.exports = router;