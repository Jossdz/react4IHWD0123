import Counter from "./components/Counter"
import TodoList from "./components/TodoList"

import { Layout, Menu } from "antd"
const { Content, Header, Footer } = Layout

const menuItems = [
	{ key: 1, label: "Home" },
	{ key: 2, label: "Tasks" }
]

function App() {
	return (
		<Layout>
			<Header>
				<Menu theme="dark" mode="horizontal" items={menuItems} />
			</Header>

			<Content
				style={{
					padding: "0 3rem",
					height: "calc(100vh - 128.09px)"
				}}
			>
				<Counter />
				<TodoList title="Cosas que aun debemos aprender de React" />
				<TodoList title="Cosas que aun debemos aprender del backend" />
			</Content>

			<Footer>Ironhackers ©2023 Created by Joss 🤘</Footer>
		</Layout>
	)
}

export default App
