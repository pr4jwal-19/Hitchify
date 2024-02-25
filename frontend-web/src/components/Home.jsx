import React from 'react'
import Navbar from './Navbar'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import rightSideImage from '../images/rightSideImage.png'

const Home = () => {
  return (
    <div style={{ backgroundColor: '#DEE9FF', marginTop: 0, padding: 0 }}>
        <Navbar />
        <Container sx={{ marginTop: 0 , backgroundColor: 'inherit', padding: 0 , maxWidth: '150vw'}}>
            <Grid container sx={{ margin: 0, padding: 0 }}>

                <Grid item xs={6} style={{ height: '600px', width: '50vw' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 0, padding: 0 }}>

                    <Typography variant='h6' gutterBottom>
                        Your Travel Companion
                    </Typography>
                    <Typography variant='h2' gutterBottom></Typography>
                    <Typography variant='h2' gutterBottom></Typography>
                    <Typography variant='h2' gutterBottom></Typography>
                    <Typography variant="h3">
                        We value your
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        Time and Money
                    </Typography>
                    <Typography variant='h2' gutterBottom></Typography>
                    <Typography variant='h5'>
                        We help our customers to travel 
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        to places at Shared Cost and Shared Space
                    </Typography>
                    
                </Grid>

                <Grid item xs={6} style={{ height: '600px', width: '50vw' , display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 0, padding: 0 }}>

                    <img src={rightSideImage} alt="" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />

                </Grid>

            </Grid>
        </Container>
    </div>
  )
}

export default Home