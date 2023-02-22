import { useState } from "react"
import Summary from "./Summary"
import Task from "./Task"

const TodoList = ({ title }) => {
	const [tasks, setTasks] = useState([
		{
			name: "Aprender a hacer llamadas a una api desde react",
			id: "1",
			done: false
		},
		{
			name: "Aprender a hacer llamadas a una api desde react",
			id: "2",
			done: true
		}
	])

	const toggleTask = (id) => {
		const listTodos = tasks.map((task) => {
			if (task.id === id) {
				task.done = !task.done
			}

			return task
		})
		setTasks(listTodos)
	}

	return (
		<div>
			<h1>{title}</h1>

			<Summary tasks={tasks} />

			{tasks.map((task) => (
				<Task key={task.id} {...task} toggleTask={toggleTask} />
			))}
		</div>
	)
}

export default TodoList
