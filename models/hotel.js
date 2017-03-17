var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = db.define('Hotel', {
	name: {

		type: Sequelize.STRING

	},
	num_stars: {

		type: Sequelize.FLOAT,
		validate: {min: 1, max: 5}

	},
	amenities: {

		type: Sequelize.STRING

	},

},{});

module.exports = Hotel;