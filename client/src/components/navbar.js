// Navbar.js
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/system';
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Work', 'Portfolio', 'Contact'];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: darkTheme.palette.mode === 'dark' ? '#333' : '#fff', }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        Ganesh's Portfolio
      </Typography> */}
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1,color:"orange",fontFamily:'Aclonica',fontSize:"30px", minWidth: '180px' }} // Set minimum width for the name
          >
            Ganesh Bora
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, minWidth: '200px' ,minHeight:"80px" }}> 
              <Button sx={{ fontSize: "23px" ,color: 'orange',marginLeft:"0px", minWidth: '100px' , minHeight:"70px" }}>Resume</Button>    
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', display: { xs: 'block', sm: 'none' }, minWidth: '48px' }} // Set minimum width for the menu icon
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
