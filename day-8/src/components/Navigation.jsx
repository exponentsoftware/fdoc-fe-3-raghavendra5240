import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:"flex",
    justifyContent:"space-around",
   
  },
 
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  
  
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.root}>
          <div>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/albums" style={{textDecoration:"none",color:"white"}}> Albums</Link>
          </Typography>
          </div>
          <div>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/addalbums" style={{textDecoration:"none",color:"white"}}>Add Albums</Link>
          </Typography>
          </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
