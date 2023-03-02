import "./App.css"
import { Route, Outlet } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import SignupPage, { signupPageAction } from "./pages/SignupPage/SignupPage"
import LoginPage, { loginPageAction } from "./pages/LoginPage/LoginPage"

import Navbar from "./components/Navbar/Navbar"
import IsPrivate from "./components/IsPrivate/IsPrivate"
import IsAnon from "./components/IsAnon/IsAnon"

import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider
} from "react-router-dom"
import Root from "./pages/Root/Root"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<Root />}>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<HomePage />
					</>
				}
			/>

			<Route
				path="/profile"
				element={
					<IsPrivate>
						<Navbar />
						<ProfilePage />
					</IsPrivate>
				}
			/>

			<Route
				path="/signup"
				action={signupPageAction}
				element={
					<IsAnon>
						<Navbar />
						<SignupPage />
					</IsAnon>
				}
			/>
			<Route
				path="/login"
				action={loginPageAction}
				element={
					<IsAnon>
						<Navbar />
						<LoginPage />
					</IsAnon>
				}
			/>
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
