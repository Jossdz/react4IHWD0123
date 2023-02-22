function Task({ name, id, done, toggleTask }) {
	return (
		<li>
			<b>{id}</b>
			<p
				style={{
					textDecoration: done ? "line-through" : "none"
				}}
			>
				{name}
			</p>

			<button onClick={() => toggleTask(id)}>toggle</button>
		</li>
	)
}

export default Task
