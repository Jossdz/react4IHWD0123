import "./LoginPage.css"

import {
	Form,
	Link,
	useActionData,
	useNavigate,
	useOutletContext
} from "react-router-dom"

import authService from "../../services/auth.service"

export const loginPageAction = async ({ request }) => {
	const formData = await request.formData()
	const email = formData.get("email")
	const password = formData.get("password")

	try {
		const { data } = await authService.login({ email, password })
		// Evite el requerir las funciones del contexto haciendo la llamada a la api
		// y devolviendo el Token del context al componente, el componente lo pide del useActionData
		// Y como el componente tiene acceso a los metodos del contexto, somos capaces de mantener la funcionalidad que ya existia.
		return {
			authToken: data.authToken,
			error: null
		}
	} catch (error) {
		const {
			request: { response }
		} = error
		const { message } = JSON.parse(response)
		return { error: message, authToken: null }
	}
}

function LoginPage(a) {
	const navigate = useNavigate()
	const actionData = useActionData()
	// Aqui extraemos las funciones del contexto que son necesarias para reflejar la autenticacion exitosa en la app
	const { storeToken, authenticateUser } = useOutletContext()

	// Como action data puede no traer informacion inicialmente, no podemos destructurar, pero creamos estas variables que pueden o no tener ese dato.
	// Cuando el dato exista y se vuelva a pintar el componente mostraremos el error o ejecutamos la funcionalidad que refleja la sesion en caso de traer el token.
	const authToken = actionData?.authToken
	const error = actionData?.error
	console.log(authToken)

	if (authToken) {
		storeToken(authToken)
		authenticateUser()
		navigate("/")
	}

	return (
		<div className="LoginPage">
			<h1>Login</h1>

			<Form action="/login" method="POST">
				<label>Email:</label>
				<input type="email" name="email" />

				<label>Password:</label>
				<input type="password" name="password" />

				<button type="submit">Login</button>
			</Form>
			{error && <p className="error-message">{error}</p>}

			<p>Don't have an account yet?</p>
			<Link to={"/signup"}> Sign Up</Link>
		</div>
	)
}

export default LoginPage
