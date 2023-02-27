const MemeCollection = require("../models/memeCollection")
const Meme = require("../models/Meme")

//1. obtener todas las colecciones
exports.getMemeCollections = async (req, res) => {
	const memeCollections = await MemeCollection.find()
	res.json(memeCollections)
}
//2. Obtener 1 coleccion
exports.getMemeCollectionByID = async (req, res) => {
	const { id } = req.params
	const collection = await MemeCollection.findById(id)
	const memes = await Meme.find({ folder: id })
	res.json({ collection, memes })
}

//3. crear una coleccion
exports.createMemeCollection = async (req, res) => {
	const { title, description } = req.body
	const collection = await MemeCollection.create({ title, description })
	res.json(collection)
}

//4. actualizar 1 coleccion
exports.updateMemeCollections = async (req, res) => {
	const { id } = req.params
	const { title, description } = req.body
	const collection = await MemeCollection.findByIdAndUpdate(
		id,
		{
			title,
			description
		},
		{ new: true }
	)
	res.json(collection)
}

//5. borrar una coleccion
exports.deleteMemeCollections = async (req, res) => {
	const { id } = req.params
	await MemeCollection.findByIdAndDelete(id)
	res.json({ message: "deleted" })
}
