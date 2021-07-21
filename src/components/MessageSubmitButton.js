import React from "react";
import {IconButton} from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"

import {pushMessage} from "../firebase"

const MessageSubmitButton = (props) => {
	const {name, setText, text, inputEL} = props;
	return (
		<IconButton
			disabled={text === ''}
			onClick={() => {
				pushMessage({name: "ytaisei", text});
				setText('');
				inputEL.current.focus();
			}}
		>
			<SendIcon />
		</IconButton>
	)
}

export default MessageSubmitButton;
