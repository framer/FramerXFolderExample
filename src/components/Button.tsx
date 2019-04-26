import * as React from "react"

type Props = {
	text: string
	onClick?: any
}

export const Button: React.FC<Props> = props => {
	return (
		<button
			style={{ fontSize: 16, height: 64, width: 200, padding: "12px 24px" }}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	)
}
