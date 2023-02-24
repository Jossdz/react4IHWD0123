import { createBrowserRouter } from "react-router-dom"

// Pages
import ApartmentDetails, {
	apartmentDetailsLoader
} from "./pages/ApartmentDetails"
import Apartments, { apartmentsLoader } from "./pages/Apartments"
// import NewApartment from "./pages/NewApartment"
import NewApartmentOP, { newApartmentAction } from "./pages/NewApartmentOP"
import Root from "./pages/Root"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root style={{ height: "100%" }} />,
		children: [
			{
				path: "/",
				loader: apartmentsLoader,
				element: <Apartments />
			},
			{
				path: "create",
				action: newApartmentAction,
				element: <NewApartmentOP />
			},
			{
				path: "/:id",
				loader: apartmentDetailsLoader,
				element: <ApartmentDetails />
			}
		]
	}
])

export default router
