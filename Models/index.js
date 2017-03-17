var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://localhost:5432/nyctrips', {
	logging: false
})


var Place = db.define('Place', {
	address: {

		type: Sequelize.STRING,
		allowNull: false

	},
	city: {

		type: Sequelize.STRING,
		allowNull: false

	},
	state: {

		type: Sequelize.STRING(2),
		allowNull: false

	},
	phone: {

		type: Sequelize.STRING(10),
		allowNull: false

	},
	location: {

		type: Sequelize.ARRAY(Sequalize.DOUBLE),
		allowNull: false

	}




},{});
