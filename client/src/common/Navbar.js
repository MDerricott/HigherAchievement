import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu"
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import image from '../images/blacklogo.png';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'





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
class ButtonAppBar extends React.Component {
  state = {
    
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

render() {
  const { classes } = this.props;
  
  const open = Boolean(this.state.anchorEl);
  return (
    <div className={classes.root}>
      <AppBar 
        position="static"
        color="secondary" 
        elevation={3}
        >
        <Toolbar>
          <div>
        <IconButton 
        aria-owns={open ? 'menus' : undefined}
        aria-haspopup="true"
        onClick={this.handleMenu}
        color="inherit"
        // className={classes.menuButton}  
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menus"
            anchorEl={this.state.anchorEl}
            // anchorOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            //   }}
            //   transformOrigin={{
            //       vertical: 'top',
            //       horizontal: 'right',
            //   }}
                open={open}
                onClose={this.handleClose}
              >
                <Link  
                  to="/" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>Home</MenuItem> 
                </Link>

                 <Link 
                  to="/national" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>National</MenuItem> 
                </Link> 
                {/* <Link 
                  to="/dcmetro" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>DC Metro</MenuItem> 
                </Link>  */}
                <Link 
              
                  to="/baltimore" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>Baltimore</MenuItem> 
                </Link> 
                <Link 
                
                  to="/richmond" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>Richmond</MenuItem> 
                </Link> 
                <Link 
            
                  to="/pittsburgh" 
                  color='inherit' 
                  className="link" 
                  style={{ textDecoration: 'none' }}>
                    <MenuItem onClick={this.handleClose}>Pittsburgh</MenuItem> 
                </Link>
                
          </Menu>
            </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                <img src={image} height={60} alt="HA-Logo"/> 
                
            </Typography>
          {/* <Typography variant="h6" color="inherit" className={classes.grow}>
            Higher Achievement
          </Typography> */}
          <div>
            {this.props.auth && (
              
            <Tooltip 
              title="My Profile"
            >  
            <Link
              className="link"
              to={"/profile"}>
              <IconButton
      // aria-owns={this.state.anchorEl ? 'profile' : undefined}
      // aria-haspopup="true"
      // onClick={this.handleMenu}
                color="inherit">
              <CheckCircleIcon />
              </IconButton>
              </Link>
              </Tooltip> 
              
              )}
            <Tooltip 
              title="Admin Dashboard"
              >   
                <Link
                  className="link"
                  to={"/admin"}
                >
                      <IconButton
                      onClick={this.props.handleAdminAccess}
                      color="inherit">
                
                        <DashboardIcon />
              
                      </IconButton>
                  </Link> 
                  </Tooltip> 

                  <Tooltip 
                    title="Home"
                   > 

                  <Link
                    className="link"
                    to={"/"}
                  >
                      <IconButton
                      color="inherit">
                        <HomeIcon />
              
                      </IconButton>
                  </Link> 
            </Tooltip> 
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);