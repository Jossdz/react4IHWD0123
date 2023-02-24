import { createBrowserRouter } from "react-router-dom"

// Pages
import Root from "./pages/Root"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostDetails from "./pages/PostDetails"
import SearchPost, { searchPostLoader } from "./pages/SearchPost"

// Loaders
import { loader as postsLoader } from "./pages/Posts"
import { postDetailsLoader } from "./pages/PostDetails"

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
				loader: searchPostLoader,
				element: <SearchPost />
			},
			{
				path: "posts",
				element: <Posts />,
				loader: postsLoader,
				children: [
					{
						path: ":id",
						loader: postDetailsLoader,
						element: <PostDetails />
					}
				]
			}
		]
	}
])
