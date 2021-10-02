//Combines all the page routes to later connect to PUblic JS and then to Handlebars.

const router = require('express').Router();

//const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
//const artistpageRoutes = require('./artistpage-route.js');
//const userprofileRoutes = require('./user-profile-routes.js');

router.use('/', homeRoutes);
//router.use('/artistpage', artistpageRoutes);
//router.use('/api', apiRoutes);
//router.use('/user', userprofileRoutes);

module.exports = router;
