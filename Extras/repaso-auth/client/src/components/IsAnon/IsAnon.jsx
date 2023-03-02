import { Navigate, useOutletContext } from "react-router-dom"
import Loading from "../Loading/Loading"

function IsAnon({ children }) {
	const { isLoggedIn, isLoading } = useOutletContext()

	// If the authentication is still loading ⏳
	if (isLoading) {
		return <Loading />
	}

	if (isLoggedIn) {
		// If the user is logged in, navigate to home page ❌
		return <Navigate to="/" />
	}

	// If the user is not logged in, allow to see the page ✅
	return children
}

export default IsAnon
