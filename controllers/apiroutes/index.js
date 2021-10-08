//consolidated api routes only from api routes AND add part of the 
const router = require('express').Router();


const favoriteRoutes = require('./favorites-route');
router.use('/favorites', favoriteRoutes)

const userRoute = require('./user-auth');
const galleryRoute = require('./gallery-route');
const commentRoute = require('./comments-route');
const artistRoute = require('./artist-route');
const favoritesRoute = require('./favorites-route');

router.use('/user', userRoute);
router.use('/gallery', galleryRoute);
router.use('/comments', commentRoute);
router.use('/artist', artistRoute);
router.use('/favorites', favoritesRoute);

module.exports = router;




//consolidated api routes only from api routes AND add part of the endpoints (Guillermo's part)
// const router = require('express').Router();

// const favoriteRoutes = require('./favorites-route');

// router.use('/favorites', favoriteRoutes)

// module.exports = router