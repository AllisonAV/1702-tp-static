
var express = require('express');
var router = express.Router();
var db = require('../models/_db')
var Sequelize = require('sequelize');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');


var Promise = require('bluebird');



router.get('/', function(req, res, next){
	var allHotels = Hotel.findAll({});
	var allRestaurants = Restaurant.findAll({});
	var allActivities = Activity.findAll({});

	Promise.all([allActivities, allHotels, allRestaurants])
	.then(([activities, hotels, restaurants]) => {
		res.render('index', {activities, hotels, restaurants});
	})
	.catch(next);

})

module.exports = router;