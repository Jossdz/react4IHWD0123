const router = require("express").Router()
const {
	getMemeCollections,
	getMemeCollectionByID,
	createMemeCollection,
	updateMemeCollections,
	deleteMemeCollections
} = require("../controllers/memeCollection")

router.get("/meme-collections", getMemeCollections)
router.get("/meme-collections/:id", getMemeCollectionByID)
router.post("/meme-collections", createMemeCollection)
router.put("/meme-collections/:id", updateMemeCollections)
router.delete("/meme-collections/:id", deleteMemeCollections)

module.exports = router
