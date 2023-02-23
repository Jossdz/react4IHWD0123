import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Missing from "./pages/Missing"
import Private from "./pages/Private"
import Root from "./pages/Root"

// export default createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route>
// 			<Route path="/" element={<h1>Home</h1>} />
// 			<Route path="/login" element={<h1>Login</h1>} />
// 		</Route>
// 	)
// )

export default createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/private",
				element: <Private />
			},
			{
				path: "*",
				element: <Missing />
			}
		]
	}
])
