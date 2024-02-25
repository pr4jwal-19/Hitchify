import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material"

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#DEE9FF' , height: '100px', display: 'flex', flexDirection: 'row' }}>
        
            {/* First Toolbar section */}
            <Toolbar sx={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" component="div" sx={{ color: '#1364FF' , textAlign: 'left', my: 4 }}>
                    Hitchify
                </Typography>
            </Toolbar>

            {/* Second Toolbar section */}
            <Toolbar sx={{ flex: '1', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                
                <Typography variant="h6" sx={{ color: '#0D0D0D' , mx: 2}}>
                    Home
                </Typography>
                <Typography variant="h6" sx={{ color: '#0D0D0D' , mx: 2}}>
                    About
                </Typography>
                <Typography variant="h6" sx={{ color: '#0D0D0D' , mx: 2}}>
                    Services
                </Typography>
                <Typography variant="h6" sx={{ color: '#0D0D0D' , mx: 2}}>
                    Contact
                </Typography>

            </Toolbar>
        
    </AppBar>
  )
}

export default Navbar