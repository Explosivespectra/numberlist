import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { ListItem, ListItemIcon, ListItemSecondaryAction } from "@material-ui/core";
import { Checkbox, IconButton } from "@material-ui/core";
import  CloseIcon  from "@material-ui/icons/Close";

const useStyles = makeStyles({
  listItem: {
    "&:hover + $closeIcon": {
      display: "block"
    }
  },
  closeIcon: {
    display: "none",
    "&:hover": {
      display: "block"
    }
  },
});

const NumberListItem = ({item, checkEvent, closeEvent}) => {
 const classes = useStyles();
  const sendDeleteItem = () => {
    closeEvent(item);
  };

  return (
        <ListItem key={item} divider={true} className={classes.listItem}>
          <ListItemIcon>
            <Checkbox onChange={event => checkEvent(event.target.checked, item)}/>
          </ListItemIcon>
          Number {item}
          <ListItemSecondaryAction className={classes.closeIcon}>
            <IconButton onClick={sendDeleteItem}>
              <CloseIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
  );
};

export default NumberListItem;