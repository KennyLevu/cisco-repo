import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './header.module.css'
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


export default function Header(){
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.bar}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Sextant
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}