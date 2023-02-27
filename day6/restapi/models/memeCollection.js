const { Schema, model } = require("mongoose")

const MemeCollectionSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
})

module.exports = model("MemeCollection", MemeCollectionSchema)
