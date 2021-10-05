//Combines all the page routes to later connect to Public JS and then to Handlebars.
const router = require('express').Router();

// list out controller route
const apiRoutes = require('./apiroutes/');
const homeRoutes = require('./home-routes.js');
const artistpageRoute = require('./artistpage-route');
const userprofileRoute = require('./user-profile-routes.js');


router.use('/', homeRoutes);
router.use('/artistpage', artistpageRoute);
router.use('/apiroutes', apiRoutes);
router.use('/user', userprofileRoute);

module.exports = router;
