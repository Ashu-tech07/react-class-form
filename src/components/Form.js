import React, { Component } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Card, CardContent, CardActions, TextField, Typography, Stack, Button, Avatar, Checkbox, Grid, Box } from '@mui/material'

export class Form extends Component {
  render() {
    return (
        <Box sx={{ justifyContent:'center', display: 'flex', minHeight: '70vh', height :'80vh'}}>
        <Card variant='outlined' sx={{width:'40%',justifyContent:'center', display:'flex'}}>
            <CardContent>
                <Stack>
                    <Avatar sx={{ bgcolor: 'red',alignSelf: 'center'}}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography variant='h5' sx={{textAlign:'center', mt:2,mb:2}} >Sign in</Typography>
                    <TextField id="email" name='email' label="Email Address" variant="outlined"  sx={{mb:2}} required/>
                    <TextField id="password" name='password' label="Password" variant="outlined" required />
                    <Grid 
                    container
                    direction="row">
                        <Grid item >
                        <Checkbox color='secondary' sx={{ml:-1}}/>    
                        <Typography variant='body'> Remember Me </Typography>
                        </Grid>  
                    </Grid>
                   <Button variant='contained' color='secondary'>SIGN IN</Button> 
                   <Grid 
                    container
                    direction="row"
                    >
                        <Grid item xs={6}>
                        <Button color='secondary'>Forgot password?</Button> 
                        </Grid>
                        <Grid item xs={6} justifyContent='right' alignContent='right'>   
                        <Button color='secondary'>Doesn't have an account? Sign Up</Button>
                        </Grid>  
                    </Grid>   
                </Stack>
            </CardContent>
        </Card>
    </Box>
    )
  }
}

export default Form
