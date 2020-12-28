import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '3em',
    width: '100%',
    maxWidth: '25em',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Search() {
  const classes = useStyles();

  return (
      <>
    <form className={classes.root} noValidate autoComplete="off">
    <div style={{marginLeft: '2em'}}>
        <TextField id="standard-basic" label="Start" />
        <TextField id="standard-basic" label="End" />
    </div>
    </form>

    <List className={classes.root}>
      <ListItem alignItems="flex-start">
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            <LocalTaxiIcon />
          </IconButton>
          <IconButton aria-label="play/pause">
            <AssignmentIndIcon />
          </IconButton>
          <IconButton aria-label="next">
            <DoneOutlineIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    </>
  );
}
