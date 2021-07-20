import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import {gravatarPath} from "../gravatar";

const useStyles = makeStyles({
	root: {
		gridRow: 2,
		margin: "26px",
	},
});

const MessageInputField = (props) => {
	const {name} = props;
	const classes = useStyles();
	const avatarPath = gravatarPath(name);
	return (
		<div className={classes.root}>
			<Grid container >
				<Grid xs={1}>
					<Avatar src={avatarPath} />
				</Grid>
				<Grid xs={10}>
					入力
				</Grid>
				<Grid sx={1}>
					ボタン
				</Grid>
			</Grid>
		</div>
	)
}

export default MessageInputField;
