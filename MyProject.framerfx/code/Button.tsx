import * as React from "react"
import { ControlType, addPropertyControls } from "framer"
import { Button as _Button } from "../../src/components/Button"

export const Button = (props: any) => <_Button {...props} />

Button.defaultProps = {
	height: 64,
	width: 200,
}

addPropertyControls(Button, {
	text: {
		type: ControlType.String,
		defaultValue: "Hello world",
	},
})
