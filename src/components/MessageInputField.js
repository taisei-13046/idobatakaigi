import React, {useState, useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import {gravatarPath} from "../gravatar";
import MessageField from "./MessageField"
import MessageSubmitButton from "./MessageSubmitButton"

const useStyles = makeStyles({
	root: {
		gridRow: 2,
		margin: "26px",
	},
});

const MessageInputField = (props) => {
	const inputEL = useRef(null)
	const {name} = props;
	const [text, setText] = useState('');
	const classes = useStyles();
	const avatarPath = gravatarPath(name);
	return (
		<div className={classes.root}>
			<Grid container >
				<Grid item xs={1}>
					<Avatar src={avatarPath} />
				</Grid>
				<Grid item xs={10}>
					<MessageField
						name={name}
						setText={setText}
						text={text}
						inputEL={inputEL}
					/>
				</Grid>
				<Grid item xs={1}>
					<MessageSubmitButton inputEL={inputEL} name={name} setText={setText} text={text} />
				</Grid>
			</Grid>
		</div>
	)
}

export default MessageInputField;
