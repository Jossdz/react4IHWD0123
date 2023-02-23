import React from "react"
import { Link, NavLink } from "react-router-dom"

function Navbar() {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink
				className={({ isActive }) => isActive && "link-active"}
				to="/login"
			>
				Login
			</NavLink>
			<NavLink
				className={({ isActive }) => isActive && "link-active"}
				to="/private"
			>
				private
			</NavLink>
		</div>
	)
}

export default Navbar
