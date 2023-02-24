import React from "react"

import { Menu, Layout } from "antd"
import { Link, Outlet } from "react-router-dom"
const { Content, Header, Footer } = Layout

const pages = [
	{
		path: "/",
		title: "Home"
	},
	{
		path: "/create",
		title: "New apartment"
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
					maxHeight: "calc(100vh - 128.09px)",
					overflow: "scroll"
				}}
			>
				<Outlet />
			</Content>
			<Footer>Apartments app</Footer>
		</Layout>
	)
}

export default Root
