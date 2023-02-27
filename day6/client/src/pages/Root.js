import React from "react"
import { Layout, Menu } from "antd"
import { Link, Outlet } from "react-router-dom"

const { Content, Footer, Header } = Layout

const pages = [
	{
		path: "/",
		title: "Home"
	},
	{
		path: "/create-folder",
		title: "Create new folder"
	}
]

function Root() {
	return (
		<Layout>
			<Header>
				<Menu
					mode="horizontal"
					theme="dark"
					items={pages.map((p) => ({
						key: p.path,
						label: <Link to={p.path}>{p.title}</Link>
					}))}
				/>
			</Header>
			<Content
				style={{
					height: "100vh",
					maxHeight: "calc(100vh - 128.09px)"
				}}
			>
				<Outlet />
			</Content>
			<Footer>With 💙 by Ironhackers</Footer>
		</Layout>
	)
}

export default Root
