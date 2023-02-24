import React from "react"
import { Link, Outlet } from "react-router-dom"

import { Menu, Layout } from "antd"
const { Header, Content, Footer } = Layout

const pages = [
	{ name: "Home", path: "/" },
	{ name: "Posts", path: "/posts" },
	{ name: "Search", path: "/search-post" }
]

function Root() {
	return (
		<Layout>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					items={pages.map((page, index) => {
						const key = index + 1
						return {
							key,
							label: (
								<Link key={key} to={page.path}>
									{page.name}
								</Link>
							)
						}
					})}
				/>
			</Header>
			<Content
				style={{
					height: "100vh",
					maxHeight: "calc(100vh - 128.09px)",
					padding: "1em 2em"
				}}
			>
				<Outlet />
			</Content>

			<Footer>Hecho con 💙 por los Ironhackers</Footer>
		</Layout>
	)
}

export default Root
