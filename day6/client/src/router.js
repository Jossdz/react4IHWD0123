import { createBrowserRouter } from "react-router-dom"

// Pages
import Root from "./pages/Root"
import AllFolders, { allFoldersLoader } from "./pages/folders/AllFolders"
import FolderDetails, {
	folderDetailsAction,
	folderDetailsLoader
} from "./pages/folders/FolderDetails"
import CreateFolder, { createFolderAction } from "./pages/folders/CreateFolder"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				// Colocar aca las carpetas de memes
				path: "/",
				loader: allFoldersLoader,
				element: <AllFolders />
			},
			{
				path: "folder/:id",
				loader: folderDetailsLoader,
				action: folderDetailsAction,
				element: <FolderDetails />
			},
			{
				path: "create-folder",
				action: createFolderAction,
				element: <CreateFolder />
			}
			// {
			//   path: 'create-meme'
			// },
			// {
			//   path: 'meme/id'
			// }
		]
	}
])

export default router
