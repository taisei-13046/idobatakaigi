import React, {useRef, useEffect} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {gravatarPath} from "../gravatar";

const useStyles = makeStyles({
	inline: {
		display: "inline",
	},
});

const MessageItem = (props) => {
	const { name, text, isLastItem } = props;
	const ref = useRef(null);
	const classes = useStyles();
	const avatarPath = gravatarPath(name);
	useEffect(() => {
		if (isLastItem)
			ref.current.scrollIntoView({behavior: 'smooth'});
	}, [isLastItem])
	return (
	<ListItem divider={true} ref={ref} >
        <ListItemAvatar>
          <Avatar src={avatarPath} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
				{text}
              </Typography>
          }
        />
      </ListItem>
	)
}

export default MessageItem;
