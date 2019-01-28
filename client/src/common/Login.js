import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input, Typography } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";



class DialogLogin extends React.Component {
// function DialogLogin (props) {
  // let { from } = this.props.location.state || { from: { pathname: "/" } };
  // console.log({from})

cancelClick = () => {
  this.props.history.goBack(false)
}
render(){
  
    return (
      <div style={{height: 1500}}>
       <Dialog 
              open={this.props.open}
              onClose={this.props.handleClose}
              maxWidth = "sm"
              fullWidth
              aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="max-width-dialog-title">Admin Dashboard Login</DialogTitle>
       <DialogContent>
            <DialogContentText>
              Login into the Admin Dashboard
            </DialogContentText>
              <Input
                key="pw1"
                error={this.props.error}
                fullWidth
                id="password"
                type={this.props.showPassword ? 'text' : 'password'}
                value={this.props.password}
                onChange={this.props.handleInputChange}
                name="password"
                style={{
                    underline:{ '&:after': {
                    borderBottomColor: "#000000",
                    }},
                  }}
                    endAdornment={
                      <InputAdornment position="end">
                      <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.props.handleClickShowPassword}
                    >
                        {this.props.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      </InputAdornment>
                    }
                  />
              <DialogContentText>
              <Typography color="#FF0000">  {this.props.incorrectMessage}   </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
         
            <Button href="/admin" onClick={this.props.handleSubmit} color="secondary" style={{textDecoration:"none"}}>
              Login 
            </Button>
          
         
            
            
           
            <Button href="/" onClick={this.cancelClick} color="secondary">
              Cancel
            </Button>
        
            
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}


export default DialogLogin;