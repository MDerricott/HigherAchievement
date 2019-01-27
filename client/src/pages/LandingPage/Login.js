import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import purple from '@material-ui/core/colors/purple';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import green from '@material-ui/core/colors/green';import { withStyles } from "@material-ui/core";

// import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';





const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    cssLabel: {
      '&$cssFocused': {
        color: "#000000",
      },
    },
    cssFocused: {},
    cssUnderline: {
      '&:after': {
        borderBottomColor: "#000000",
      },
    },
  });
  

  function Form(props){
    const { classes } = props;


    return(
<Grid container justify={"center"}>



<Card style={{width: 500, height: 1000}}> 

 
<Grid container justify={"center"} >


          <Paper  elevation={0} style={{padding: 10}}>
        
                <Grid container justify={"center"}>

      
                    <Grid item style={{minWidth: 400, padding: 5}}>    

                      <FormControl className={classes.margin} fullWidth>
                       <InputLabel
                              htmlFor="custom-css-standard-input"
                             classes={{
                              root: classes.cssLabel,
                              focused: classes.cssFocused,
                                 }}
                         >
                                Email
                      </InputLabel>
                      <Input
                            id="custom-css-standard-input"
                            classes={{
                            underline: classes.cssUnderline,
                            }}
                        />
                        </FormControl>
                      </Grid>
                  </Grid>
          </Paper>
</Grid>

<Grid container justify={"center"} >
        <Paper  elevation={0} style={{padding: 10}}>
        
        <Grid container justify={"center"}>

      
        <Grid item style={{minWidth: 400, padding: 5}}>    

        <FormControl className={classes.margin} fullWidth>
        <InputLabel
          htmlFor="adornment-password"
          classes={{
            root: classes.cssLabel,
            focused: classes.cssFocused,
          }}
        >
          Password
        </InputLabel>
        <Input
          
          id="adornment-password"
        //   type={this.state.showPassword ? 'text' : 'password'}
          type="password"
          // value=""
          classes={{
            underline: classes.cssUnderline,
            
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                // onClick={this.handleClickShowPassword}
              >
              <VisibilityOff />
             
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>


        </Grid>
      
        </Grid>

</Paper>

</Grid>


</Card>

</Grid>

    )}
        

export default withStyles(styles)(Form)