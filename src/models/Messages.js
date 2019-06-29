const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
	body: {
		type: String,
		required: true,
	},
	chatId: {
		type: String,
		required: true,
	},
	sender: {
		type: String,
		required: true,
	},
	createdAt:{
		type: Date,
		default: Date.now,
	},
	
})

mongoose.model('Messages', MessageSchema)