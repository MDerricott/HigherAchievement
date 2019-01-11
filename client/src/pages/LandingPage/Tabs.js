import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Form from './SignForm';
import Paper from '@material-ui/core/Paper';
import Login from './Login';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSubmit = (event) =>{
    console.log(event.target)
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Paper position="static" elevation={0}> 
          <Tabs 
          value={value} 
          onChange={this.handleChange}
          variant="fullWidth"
          >
            <Tab label="Sign-up" />
            <Tab label="Log-in" />
            {/* <Tab label="Item Three" /> */}
          </Tabs>
        </Paper>
        {value === 0 && <TabContainer><Form handleSubmit={this.handleSubmit} /></TabContainer>}
        {value === 1 && <TabContainer><Login /></TabContainer>}
        {/* {value === 2 && <TabContainer>Item Three</TabContainer>} */}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);