import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import API from '../../utils/API';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AboutUs from './AboutUs';
import {  Redirect } from "react-router-dom";
import { Typography } from '@material-ui/core';






  
class Form extends React.Component {
        state = {
           auth: "",
           firstName: "",
           lastName:"",
           email:"",
           affiliate:"",
           role: "",
           showPassword:false,
           completedForm: false,
           data: null,
          
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
            API.createSurvey({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              affiliate: this.state.affiliate,
              role: this.state.role

            })
              // .then(res => this.storeUser())
              .then(res => {
                console.log(res.data._id)
                const id = res.data._id;
                sessionStorage.setItem("token", id);
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
    
      <Grid container justify={"center"} style={{height:"100%"}}>
      <br>
      </br>
      
   
    
      {this.props.auth ? (
      <div> <AboutUs /> </div>
      )
      :(
      
        <Card style={{width: 500}} elevation={0}> 
            <Grid container justify={"center"} >
              <Paper  elevation={0} style={{padding: 10}}>
                <Grid container justify={"center"}>
                <div style={{height: 100}}>
                    <br></br>
                    <Typography variant="h3">   Tell us about you!</Typography>
                    </div>
                    <div style={{height: 50}}/>
      
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
             Affiliate
          </InputLabel>
           <Select
              key="af1"
              value={this.state.affiliate}
              onChange={this.handleInputChange}
              style={{
                  '&:after': {
                  borderBottomColor: "#000000",
                  },
                }}
                inputProps={{
                  id: "affiliate",
                  name:"affiliate"
                }}
            >
           
            <MenuItem value={"National"}>National</MenuItem>
            <MenuItem value={"DC Metro"}>DC Metro</MenuItem>
            <MenuItem value={"Baltimore"}>Baltimore</MenuItem>
            <MenuItem value={"Richmond"}>Richmond</MenuItem>
            <MenuItem value={"Pittsburgh"}>Pittsburgh</MenuItem>
            </Select>
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
             What's your Role with Higher Achievement?
          </InputLabel>
           <Select
              key="1"
              value={this.state.role}
              onChange={this.handleInputChange}
              style={{
                  '&:after': {
                  borderBottomColor: "#000000",
                  },
                }}
                inputProps={{
                  id: "role",
                  name:"role"
                }}
            >
           
            <MenuItem value={"Mentor"}>Mentor</MenuItem>
            <MenuItem value={"Donor"}>Donor</MenuItem>
            <MenuItem value={"Families"}>Families/Scholar</MenuItem>
            <MenuItem value={"SchoolPartner"}>School Partners</MenuItem>
            </Select>
      </FormControl>
    </Grid>
    </Grid>
</Paper>

</Grid>
<Grid container justify={"center"} >
    <Paper  elevation={0} style={{padding: 10}}>

    
      <Grid container justify={"center"}>
        <Grid item style={{minWidth: 400, padding: 5}}>   
        <FormControl fullWidth onSubmit={this.formSubmit}>
         
    <br>
    </br>
    
    
              <Button 
               type="submit"
                color="secondary"
                variant="contained"
                onClick={this.handleFormSubmit}
                >
                    Submit
              </Button>
      
          </FormControl>
        <Grid style={{height: 50}} />
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