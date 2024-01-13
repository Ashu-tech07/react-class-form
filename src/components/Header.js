import React, { Component } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Toolbar, Typography, Button} from '@mui/material'
import Modalform from './Modalform';
export class Header extends Component {
    constructor(){
        
        this.state={
            open:false,
        }

        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
    }

    handleOpen=()=>{
        this.setState({open:true});
    }
    handleClose=(event, reason)=>{
        if (reason !== 'backdropClick') {
            this.setState({open:false});
        }
    }

  render() {
    return (
      <>
         <AppBar className='header' position='static' sx={{ bgcolor: 'purple' }}>
                <Toolbar>
                    <Typography variant='h6' flexGrow={1}> CodeRiser</Typography>
                    <Button variant="text" color='inherit'>Feature</Button>
                    <Button variant="text" color='inherit'>Enterprise</Button>
                    <Button variant="text" color='inherit'>Support</Button>
                    <Button variant="contained" color='secondary' startIcon={<LoginIcon />} onClick={this.handleOpen}>Registration</Button>
                    <Modalform status={this.state.open} handleClose={this.handleClose} />
                </Toolbar>
            </AppBar>
      </>
    )
  }
}

export default Header
