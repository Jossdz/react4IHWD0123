import { Button, List, Typography } from "antd"

function Task({ name, id, done, toggleTask }) {
	return (
		<List.Item>
			<b>{id}</b>
			<Typography.Text
				style={{
					textDecoration: done ? "line-through" : "none"
				}}
			>
				{name}
			</Typography.Text>

			<Button size="small" type="primary" onClick={() => toggleTask(id)}>
				toggle
			</Button>
		</List.Item>
	)
}

export default Task
