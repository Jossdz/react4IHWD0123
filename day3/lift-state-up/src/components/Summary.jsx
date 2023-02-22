import { Badge, Space, Avatar } from "antd"

function Summary({ tasks }) {
	// let done = 0

	// tasks.forEach((element) => {
	// 	if (element.done) done++
	// })

	// const done = tasks.reduce((prev, current) => {
	// 	if (current.done) {
	// 		return prev + 1
	// 	} else {
	// 		return prev
	// 	}
	// }, 0)

	const done = tasks.reduce(
		(prev, current) => (current.done ? prev + 1 : prev),
		0
	)

	console.log(done)

	return (
		<div>
			<Space size="middle" style={{ marginRight: "20px" }}>
				<Badge count={tasks.length}>
					<Avatar shape="square" size="large">
						Total
					</Avatar>
				</Badge>
			</Space>
			<Space size="middle">
				<Badge count={done}>
					<Avatar
						style={{
							backgroundColor: "green",
							color: "white"
						}}
						shape="square"
						size="large"
					>
						<span style={{ color: "white" }}>✓</span>
					</Avatar>
				</Badge>
			</Space>
		</div>
	)
}

export default Summary
