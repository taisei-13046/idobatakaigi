import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import {gravatarPath} from "../gravatar";
import MessageField from "./MessageField"

const useStyles = makeStyles({
	root: {
		gridRow: 2,
		margin: "26px",
	},
});

const MessageInputField = (props) => {
	const {name} = props;
	const [text, setText] = useState('');
	const classes = useStyles();
	const avatarPath = gravatarPath('aaa');
	return (
		<div className={classes.root}>
			<Grid container >
				<Grid xs={1}>
					<Avatar src={avatarPath} />
				</Grid>
				<Grid xs={10}>
					<MessageField name={name} setText={setText} text={text} />
				</Grid>
				<Grid sx={1}>
					ボタン
				</Grid>
			</Grid>
		</div>
	)
}

export default MessageInputField;
