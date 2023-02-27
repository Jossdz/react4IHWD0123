const router = require("express").Router()
const {
	getMemes,
	getMemeByID,
	createMeme,
	updateMeme,
	deleteMeme
} = require("../controllers/memes")

router.get("/memes", getMemes)
router.get("/memes/:id", getMemeByID)
router.post("/memes", createMeme)
router.put("/memes/:id", updateMeme)
router.delete("/memes/:id", deleteMeme)

module.exports = router
