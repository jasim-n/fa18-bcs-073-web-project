import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
//import {AddShoppingCartIcon } from "@material-ui";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { positions } from '@material-ui/system';
import userService from "../services/UserService";
import "../styling.css";
const useStyles = makeStyles((theme) => ({
  link: {
    color: "#3f51b5",
    paddingRight: "2rem",


  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar id="navbar" position="fixed" style={{backgroundColor:"white"}}>
      <Toolbar position="right">
      <Typography variant="h6" type="title" color="inherit" style={{ flex: 1 }}>
          <Link to="/" className={classes.link}>
           <div id="navLogo">NSR</div>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link to="/products" className={classes.link}>
            Products
          </Link>
        </Typography>

        <Typography variant="h6">
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
        </Typography>
        {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name}
          </Button>
        )}
        <Typography variant="h6" position="left">
        <Link to="/cart" className={classes.link}>
           
         <IconButton color="purple" aria-label="add to shopping cart">
                   <AddShoppingCartIcon onClick={console.log("click")} />
</IconButton>

          </Link>
        </Typography>
       
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
