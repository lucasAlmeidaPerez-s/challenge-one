const mongoose = require('mongoose')

const BotSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	createdAt:{
		type: Date,
		default: Date.now,
	}
})

mongoose.model('Bots', BotSchema)