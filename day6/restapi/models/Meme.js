const { Schema, model } = require("mongoose")

const MemeSchema = new Schema({
	img: {
		type: String,
		required: true
	},
	folder: {
		type: Schema.Types.ObjectId,
		ref: "MemeCollection"
	}
})

module.exports = model("Meme", MemeSchema)
