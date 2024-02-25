import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (

    <div>
        <Container sx={{ marginTop: '60px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
        
            <Typography variant="h4" gutterBottom>
              Left Side Content
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* Content for the right side */}
            <Typography variant="h4" gutterBottom>
              Right Side Content
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </Typography>
          </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default About