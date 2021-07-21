import React, {useState} from "react";
import {TextField} from "@material-ui/core"

import {pushMessage} from "../firebase"

const MessageField = (props) => {
	const {name, setText, text} = props;
	const [isComposed, setIsComposed] = useState(false)
	console.log(text)
	return (
		<TextField
			fullWidth={true}
			onChange={(e) => {
				setText(e.target.value);
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" && e.target.value !== '')
				{
					pushMessage({ name: "ytaisei", text });
					e.preventDefault();
					setText('')
				}
			  }}
			onCompositionStart={() => setIsComposed(true)}
			onCompositionEnd={() => setIsComposed(false)}
			value={text}
		/>
	)
}

export default MessageField;
