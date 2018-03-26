var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/angular', ctrlLocations.angular);
router.get('/login', ctrlLocations.login);
router.get('/Watchlist', ctrlLocations.watchlist);
router.get('/Watchlist/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;