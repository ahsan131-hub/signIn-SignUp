import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
const MainPage = () => {
    const history = useHistory();
    const classes=useStyles();
    const logout=()=>{
            // alert("fucl");
            fetch("https://signin-131.herokuapp.com/logoutUser", {
              method: "GET",
            })
              .then((res) => {
                if (res.status === 200) {
                  alert("logout success");
                  history.push('/')
                } else {
                  alert("logout failed try again ");
                }
                console.log(res);
              })
        
              .catch((er) => {
                console.log(er);
              });
        
    }
    return (<div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    News
                  </Typography>
                  <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
              </AppBar>
            </div>
        
    )}

export default MainPage
