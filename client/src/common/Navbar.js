import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";
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



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Higher Achievement
          </Typography>
          <div>
          
            <Button> <Link to="/"> Home</Link></Button>
            
          
            <Tooltip 
              title="Admin Dashboard"
            >   
               
              <IconButton
                onClick={props.handleAdminAccess}
                color="inherit">
                
              <DashboardIcon />
              
              </IconButton>
              
            </Tooltip> 
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
            {/* <Input
              autoFocus
              margin="dense"
              id="password"
              label="adminPassword"
              type="password"
              fullWidth
            /> */}

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
             <Link to={props.link}> Login </Link>
            </Button>
            <Button onClick={props.handleClose} color="primary">
              Close
            </Button>
            
          </DialogActions>
        </Dialog>



          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);