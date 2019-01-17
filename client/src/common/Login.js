import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Input } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";



function DialogLogin (props) {
 
  
    return (
      <div>
       <Dialog
              open={props.open}
              onClose={props.handleClose}
              maxWidth = "sm"
              fullWidth
              aria-labelledby="form-dialog-title"
            >
          <DialogTitle id="max-width-dialog-title">Admin Dashboard</DialogTitle>
       <DialogContent>
            <DialogContentText>
              Login into the Admin Dashboard
            </DialogContentText>
              <Input
                key="pw1"
                fullWidth
                id="password"
                type={props.showPassword ? 'text' : 'password'}
                value={props.password}
                onChange={props.handleInputChange}
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
                      onClick={props.handleClickShowPassword}
                    >
                        {props.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      </InputAdornment>
                    }
                  />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleSubmit} color="primary">
             <Link to="/admin"> Login </Link>
            </Button>
            <Link to="/">
            
            
           
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            </Link>
            
          </DialogActions>
        </Dialog>

      </div>
    );
  }


export default DialogLogin;