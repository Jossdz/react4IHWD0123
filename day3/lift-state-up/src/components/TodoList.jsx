import { Divider, List } from "antd"
import { useState } from "react"

import CreateListElement from "./CreateListElement"
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

	const createNewElement = ({ inputName, inputId, inputIsComplete }) => {
		const newElement = {
			name: inputName,
			id: inputId,
			done: inputIsComplete
		}

		setTasks([...tasks, newElement])
	}

	return (
		<div>
			<Divider orientation="left">{title}</Divider>

			<Summary tasks={tasks} />

			<CreateListElement createNewElement={createNewElement} />

			<List
				style={{ marginTop: "1rem" }}
				size="small"
				bordered
				dataSource={tasks}
				renderItem={(item) => (
					<Task key={item.id} {...item} toggleTask={toggleTask} />
				)}
			/>

			{/* {tasks.map((task) => (
				<Task key={task.id} {...task} toggleTask={toggleTask} />
			))} */}
		</div>
	)
}

export default TodoList
