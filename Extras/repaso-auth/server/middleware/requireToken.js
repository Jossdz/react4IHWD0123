module.exports = function (req, res, next) {
	if (req.headers?.authorization) return next()

	res.status(401).send("forbiden")
}
