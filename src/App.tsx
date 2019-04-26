import React, { useState } from "react"
import { Button } from "./components/Button"

const App: React.FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<h1>{count}</h1>
			<Button text="Click here!" onClick={() => setCount(count + 1)} />
		</div>
	)
}

export default App
