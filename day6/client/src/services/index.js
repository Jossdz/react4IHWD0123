import axios from "axios"

const baseURL = "http://localhost:5005/api"
const folderUrl = baseURL + "/meme-collections"
const memesUrl = baseURL + "/memes"

const folderService = axios.create({ baseURL: folderUrl })
const memesService = axios.create({ baseURL: memesUrl })

// Folder
export const getAllFolders = async () => await folderService.get()

export const getFolderDetailsByID = async (id) =>
	await folderService.get(`/${id}`)

export const createFolder = async (folderData) =>
	await folderService.post("/", folderData)

// Memes
export const createMeme = async (memeData) =>
	await memesService.post("/", memeData)

export const deleteMeme = async (memeID) =>
	await memesService.delete(`/${memeID}`)

export const updateMeme = async (memeID, img) =>
	await memesService.put(`/${memeID}`, { img })
