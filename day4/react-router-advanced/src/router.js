import { createBrowserRouter } from "react-router-dom"

// Pages
import Root from "./pages/Root"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostDetails from "./pages/PostDetails"
import SearchPost from "./pages/SearchPost"

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
				path: "/search-post",
				element: <SearchPost />
			},
			{
				path: "posts",
				element: <Posts />,
				children: [
					{
						path: ":id",
						element: <PostDetails />
					}
				]
			}
		]
	}
])
