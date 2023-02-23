import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Private() {
	const auth = false
	const navigate = useNavigate()

	useEffect(() => {
		if (!auth) {
			navigate("/login")
		}
	}, [auth, navigate])

	return <h1>Private</h1>
}

export default Private
