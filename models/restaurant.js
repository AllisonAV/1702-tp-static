var Sequelize = require('sequelize');
var db = require("./_db");

var Restaurant = db.define('Restaurant', {
	name: {

		type: Sequelize.STRING

	},
	cuisine: Sequelize.STRING,
	price: {

		type: Sequelize.INTEGER,
		validate: {min: 1, max: 5}

	}

},{});

module.exports = Restaurant