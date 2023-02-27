const Meme = require("../models/Meme")

exports.getMemes = async (req, res) => {
	const memes = await Meme.find().populate("folder")
	res.json({ memes })
}

exports.getMemeByID = async (req, res) => {
	const { id } = req.params
	const meme = await Meme.findById(id).populate("folder")
	res.json({ meme })
}

exports.createMeme = async (req, res) => {
	const { img, collection } = req.body
	const meme = await Meme.create({ img, folder: collection })
	res.json({ meme })
}

exports.updateMeme = async (req, res) => {
	const { id } = req.params
	const { img, collection } = req.body

	const meme = await Meme.findByIdAndUpdate(
		id,
		{ img, folder: collection },
		{ new: true }
	)
	res.json({ meme })
}

exports.deleteMeme = async (req, res) => {
	const { id } = req.params
	await Meme.findByIdAndDelete(id)
	res.json({
		message: "deleted"
	})
}
