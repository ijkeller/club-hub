import Nav from "./Nav";
import headerStyles from "../styles/Header.module.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Login from "./Login";
// import SearchBar from './SearchBar';
import { FaFortAwesome } from "react-icons/fa";

const Header = () => {

  return (
    <>
      <header sx={{ flexGrow: 1, position: 'relative' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FaFortAwesome />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Typography variant='h3'>Social Media</Typography>
            </Typography>
            {/* <SearchBar /> */}
            <Nav />
            <Login />
          </Toolbar>
        </AppBar>
      </header>

    </>
  )

}

export default Header;