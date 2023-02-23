import { useState } from "react"
import Characters from "./components/Characters"
import Pepito from "./components/Pepito"
import Timer from "./components/Timer"

// import './App.css';

function App() {
	const [show, setShow] = useState(false)
	const [candy, setCandy] = useState(0)

	return (
		<div className="App">
			{show && <Timer />}
			<button onClick={() => setShow(!show)}>Toggle</button>
			<button onClick={() => setCandy((c) => c + 1)}>+candy</button>
			{show && <Pepito candy={candy} />}

			<Characters />
		</div>
	)
}

export default App
