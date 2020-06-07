import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { Container, List, ListSubheader, Dialog, DialogTitle, TextField, Snackbar, Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from '@material-ui/icons/AddBox';
import ReorderIcon from '@material-ui/icons/Reorder';
import { unfold, sort } from "ramda";
import NumberListItem from "./numberListItem.js";


const useStyles = makeStyles({
    list: {
      width: '100%',
      maxWidth: 350,
      marginTop: 100,
      maxHeight: 400,
      margin: 'auto',
      overflow: 'auto',
      backgroundColor: '#fff',
  },
});

const AddDialog = ({onClose, errorState, errorText, addEvent, dialogOpen}) => {
  const [inputValue, setInputVal] = useState("");

  const handleClose = () => {
    onClose();
  };

  const sendInput = () => {
    addEvent(inputValue);
  };

  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
      <DialogTitle>Add a number</DialogTitle>
      <TextField label="0-9999" value={inputValue} error={errorState} helperText={errorText} onChange={(event) => (setInputVal(event.target.value === "" ||
      isNaN(event.target.value) ? (event.target.value === "" ? "" : inputValue) : parseInt(event.target.value)))}/>
      <div>
        <Button onClick={() => {setInputVal(""); handleClose();}}>Cancel</Button>
        <Button onClick={sendInput}>Confirm</Button>
      </div>
    </Dialog>
  );
};

const ListCard = () => {
  const classes = useStyles;

  const [items, alterListItems] = useState(() =>
    unfold((n) => (n > 100 ? false : [n, n + 1]), 0)
  );
  const [listOrder, setListOrder] = useState(true);
  const [deleteList, alterDeleteList] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [errorText, setErrorMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState([]);
  const [listLength, adjustLength] = useState(items.length);

  const incrementOrDecrementDeletionList = (isChecked, item) => {
    if (isChecked) {
      alterDeleteList(deleteList.concat([item]));
    }
    else {
      alterDeleteList(deleteList.filter(currItem => (currItem!==item)));
    }
  };

  const deleteItem = (item) => {
    alterListItems(items.filter(currItem => (currItem !== item)));
    alterDeleteList(deleteList.filter((currItem) => (currItem !== item)));
    adjustLength(listLength - 1);
  };

  const deleteMultipleItems = () => {
    alterListItems(items.filter((currItem) => (!deleteList.includes(currItem))));
    adjustLength(listLength - deleteList.length);
    alterDeleteList([]);
  };

  const addItem = (value) => {
    alterListItems(sort(listOrder ? ((a, b) => (a - b)) : ((a, b) => ((a - b) * -1)), items.concat([value])));
    adjustLength(listLength + 1);
    setSnackbarMessage("Number ".concat(value).concat(" successfully added"));
    setSnackbarOpen(true);
  };

  const validateAndAdd = (value) => {
    if (value === "" || isNaN(value) || value > 9999 || value < 0) {

      setErrorMessage("Value must be 0-9999");
      setErrorState(true);
    }
    else {
      if (items.includes(value)) {
        setErrorMessage("Value already in list");
        setErrorState(true);
      }
      else {
        setErrorMessage("");
        setErrorState(false);
        addItem(value);
        setDialogOpen(false);
      }
    }
  };

  const reorder = () => {
    alterListItems(sort(!listOrder ? ((a, b) => (a - b)) : ((a, b) => ((a - b) * -1)), items));
    setListOrder(!listOrder);
  };

  return (
    <div>
      <Container maxWidth={'xs'} fixed={'true'} className={classes.list}>
        <List>
          <ListSubheader>
              My Numbers ({listLength})
              <IconButton onClick={reorder}>
                <ReorderIcon/>
              </IconButton>
              <IconButton onClick={deleteMultipleItems}>
                <DeleteIcon/>
              </IconButton>
              <IconButton onClick={() => (setDialogOpen(true))}>
                <AddBoxIcon/>
              </IconButton>
            {items.map((item) => (
              <NumberListItem
                item={item}
                checkEvent={incrementOrDecrementDeletionList}
                closeEvent={deleteItem}
                isChecked={deleteList.includes(item)}
              />
            ))}
          </ListSubheader>
        </List>
      </Container>
      <AddDialog
        onClose={() => {setDialogOpen(false); setErrorMessage(""); setErrorState(false);}}
        errorState={errorState}
        errorText={errorText}
        addEvent={validateAndAdd}
        dialogOpen={dialogOpen}
      />
      <Snackbar open={snackbarOpen} message={snackbarMessage} onClose={() =>(setSnackbarOpen(false))}/>
    </div>
  );
};

export default ListCard;
