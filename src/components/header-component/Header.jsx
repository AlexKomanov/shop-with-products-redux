import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = () => {

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

      const classes = useStyles();
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
             
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
              <Link to="/" >
                <HomeIcon fontSize="large" style={{color: "white"}}/>
                </Link>
              </IconButton>
             
              <Typography variant="h5" className={classes.title}>
                Alex Shop
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="basket">
                  <ShoppingBasketIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
      );
};

export default Header;