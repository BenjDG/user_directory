import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchForm ({handleInputChange, handleFormSubmit, value}) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="search" value={value} onChange={handleInputChange} name="searchInput" label="Search" variant="outlined" />
      <button type="submit" onClick={handleFormSubmit} className="btn btn-success">Search</button>
    </form>
  )
}
