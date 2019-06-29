const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);
const Message =  mongoose.model('Messages')

module.exports={
	//Recover all messages that are in a specific chat
	async retrieveMessagesByChatId(req,res){
		const messages = await Message.find({chatId:req.params.id})

		return res.json(messages)
	},
	//Recover all messages independently of the chat
	async allMessages(req,res){
		const messages = await Message.find()

		return res.json(messages)
	},
	//Recover a specific message using the message ID
	async retrieveMessage(req,res){
		const messages = await Message.findById(req.params.id,req.body)
		return res.json(messages)
	},
	//Create a message (the chatId will be inserted here)
	async createMessage(req,res){
		const messages = await Message.create(req.body)

		return res.json(messages)
	},
	//delete a Message using the given ID
	async deleteMessage(req,res){
		await Message.findByIdAndRemove(req.params.id)

		return res.send()
	},
}