//consolidated api routes only from api routes AND add part of the endpoints
const router = require('express').Router();

const favoriteRoutes = require('./favorites-route');

router.use('/favorites', favoriteRoutes)

module.exports = router