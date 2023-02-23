import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"

function Root() {
	return (
		<div>
			<Navbar />
			{/* Este componente es como el prop Children pero para las rutas anidadas */}
			<Outlet />
		</div>
	)
}

export default Root
