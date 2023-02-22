import Counter from "./components/Counter"
import TodoList from "./components/TodoList"

function App() {
	return (
		<div>
			<Counter />
			<TodoList title="Cosas que aun debemos aprender de React" />
			<TodoList title="Cosas que aun debemos aprender del backend" />
		</div>
	)
}

export default App
