import React from "react"
import { useLoaderData } from "react-router-dom"
import FolderCard from "../../components/FolderCard"
import { getAllFolders } from "../../services"

export const allFoldersLoader = async () => {
	const { data: folders } = await getAllFolders()
	return { folders }
}

function AllFolders() {
	const { folders } = useLoaderData()

	return (
		<>
			{folders.map((folder) => (
				<FolderCard key={folder._id} {...folder} />
			))}
		</>
	)
}

export default AllFolders
