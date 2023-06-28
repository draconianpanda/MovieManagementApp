import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import TheatersIcon from '@mui/icons-material/Theaters';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import InfoIcon from '@mui/icons-material/Info';

const Navbar = () => {
  return (
    <div>
        <AppBar className='nav' style={{color:'Menu'}}>
            <Toolbar>
                <Typography variant='h5'>Movie Management App</Typography>&nbsp;
                <Button variant='contained'>
                    <Link to={'/'}  style={{textDecoration:'none',color:'white'}}><TheatersIcon/></Link>
                </Button>
                <Button variant='contained'>
                    <Link to={'/add'} style={{textDecoration:'none',color:'white'}}><AddToQueueIcon/></Link>
                </Button>
                <Button variant='contained'>
                    <Link to={'/about'} style={{textDecoration:'none',color:'white'}}><InfoIcon/></Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar