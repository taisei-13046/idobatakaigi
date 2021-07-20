import React, {useState} from "react";
import {TextField} from "@material-ui/core"

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
					console.log('firebase');
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
