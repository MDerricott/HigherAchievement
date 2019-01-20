import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import API from '../../utils/API';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AboutUs from './AboutUs';
import {  Redirect } from "react-router-dom";






  
class Form extends React.Component {
        state = {
           auth: "",
           firstName: "",
           lastName:"",
           password: "",
           email:"",
           showPassword:false,
           completedForm: false,
      }

      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
      
     
      
      


      handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
      };
    
      handleFormSubmit = event  => {
        event.preventDefault();
        console.log("state" + this.state.firstName)
        if(
          this.state.firstName)
        {
            API.createUser({
              firstName: this.state.firstName
            })
              // .then(res => this.storeUser())
              .then(res => {
                console.log(res.data._id)
                const id = res.data._id;
                localStorage.setItem("token", id);
                this.setState({completedForm: true})
                this.props.onSubmit()

              })
              .catch(err => console.log(err));
          }
      }

    
render (){

  const completedForm = this.state.completedForm;
  if (completedForm === true) {
      return <Redirect to="/national" />}

    return(
    
      <Grid container justify={"center"}>
      {this.props.auth ? (
      <div> <AboutUs /> </div>
      )
      :(
      
        <Card style={{width: 500}}> 
            <Grid container justify={"center"} >
              <Paper  elevation={0} style={{padding: 10}}>
                <Grid container justify={"center"}>
        
      
                <Grid item style={{minWidth: 200, padding: 5}}>    

                     <FormControl fullWidth>
                        <InputLabel
                            htmlFor="custom-css-standard-input"
                            style={{cssLabel: {
                                '&$cssFocused': {
                                      color: "#000000",
                                      cssFocused: {},
                                      cssUnderline: {
                                      '&:after': {
                                          borderBottomColor: "#000000",
                                        }
                                      }
                                  }
                              }
                             }}
                          >
                                      First Name
                          </InputLabel>
                          <Input
                              key={"fn1"}
                              fullWidth={true}
                              id="firstName"
                              value={this.state.firstName}
                              name="firstName"
                              onChange={this.handleInputChange}
                              style={{
                                  underline:{ '&:after': {
                                  borderBottomColor: "#000000",
                                  }},
            
                                }}
                            />
                      </FormControl>
                  </Grid>
                <Grid item ><br></br></Grid>
                <Grid item style={{minWidth: 200, padding: 5}}>
                  <FormControl fullWidth>
                  <InputLabel
                      htmlFor="custom-css-standard-input"
                      style={{
                      underline:{ '&:after': {
                          borderBottomColor: "#000000",
                          }},
                          cssLabel: {
                          '&$cssFocused': {
                          color: "#000000",
                          cssFocused: {},
                          cssUnderline: {
                              '&:after': {
                              borderBottomColor: "#000000",
                                }
                             }
                            }
                          }
                        }}
                    >
                          Last Name
                  </InputLabel>
                  <Input
                      key={"ln1"}
                      fullWidth={true}
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleInputChange}
                      id="lastname"
                      style={{
                          underline:{ '&:after': {
                          borderBottomColor: "#000000",
                             }},
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
      <FormControl  fullWidth>
        <InputLabel
          htmlFor="custom-css-standard-input"
          style={{cssLabel: {
            '&$cssFocused': {
              color: "#000000",
              cssFocused: {},
              cssUnderline: {
              '&:after': {
              borderBottomColor: "#000000",
                }
            }}}}}
        >
              Email
          </InputLabel>
           <Input
              key="em1"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              style={{
                  '&:after': {
                  borderBottomColor: "#000000",
                  },
                }}
            />
      </FormControl>
    </Grid>
    </Grid>
</Paper>
<Paper  elevation={0} style={{padding: 10}}>
        
   <Grid container justify={"center"}>
    <Grid item style={{minWidth: 400, padding: 5}}>    
      <FormControl  fullWidth>
        <InputLabel
          htmlFor="custom-css-standard-input"
          style={{cssLabel: {
            '&$cssFocused': {
              color: "#000000",
              cssFocused: {},
              cssUnderline: {
              '&:after': {
              borderBottomColor: "#000000",
                }
            }}}}}
        >
             Affilate
          </InputLabel>
           <Select
              key="em1"
              value={this.state.email}
              onChange={this.handleInputChange}
              style={{
                  '&:after': {
                  borderBottomColor: "#000000",
                  },
                }}
                inputProps={{
                  id: "email",
                  name:"email"
                }}
            >
           
            <MenuItem value={"Richmond"}>Richmond</MenuItem>
            <MenuItem value={"DC Metro"}>DC Metro</MenuItem>
            <MenuItem value={"Baltimore"}>Baltimore</MenuItem>
            </Select>
      </FormControl>
    </Grid>
    </Grid>
</Paper>
{/* <Paper  elevation={0} style={{padding: 10}}>
        
   <Grid container justify={"center"}>
    <Grid item style={{minWidth: 400, padding: 5}}>    
      <FormControl  fullWidth>
        <InputLabel
          htmlFor="custom-css-standard-input"
          style={{cssLabel: {
            '&$cssFocused': {
              color: "#000000",
              cssFocused: {},
              cssUnderline: {
              '&:after': {
              borderBottomColor: "#000000",
                }
            }}}}}
        >
              Email
          </InputLabel>
           <Input
              key="em1"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              style={{
                  '&:after': {
                  borderBottomColor: "#000000",
                  },
                }}
            /> */}
      {/* </FormControl>
    </Grid>
    </Grid>
</Paper> */}
</Grid>
<Grid container justify={"center"} >
    <Paper  elevation={0} style={{padding: 10}}>
      <Grid container justify={"center"}>
        <Grid item style={{minWidth: 400, padding: 5}}>   
        <FormControl fullWidth onSubmit={this.formSubmit}>
            <InputLabel
              htmlFor="adornment-password"
                 style={{cssLabel: {
                    '&$cssFocused': {
                     color: "#000000",
                     cssFocused: {},
                     cssUnderline: {
                        '&:after': {
                        borderBottomColor: "#000000",
                        }
                      }
                    }
                    }}}
                    >
                      Password
              </InputLabel>
              <Input
                key="pw1"
                fullWidth
                id="password"
                type={this.state.showPassword ? 'text' : 'password'}
                value={this.state.password}
                onChange={this.handleInputChange}
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
                      onClick={this.handleClickShowPassword}
                    >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      </InputAdornment>
                    }
                    />
    <br>
    </br>
    
    
              <Button 
               type="submit"
                color="primary"
                variant="contained"
                onClick={this.handleFormSubmit}
                >
                    Submit
              </Button>
      
          </FormControl>
          
      </Grid>
      <Grid item >
          <br></br>
        
        </Grid>
      
        </Grid>
</Paper>
</Grid>
</Card>

      )}

</Grid>
    )}
      }
        

export default Form