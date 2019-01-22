import React, { Component } from "react";
// import Glyphs from './pages/Center/testGlyphs'
// import PieChart from './pages/Center/PieChart'

// import Virginia from "./pages/Virginia/index";
import National from "./pages/National";
import Center from "./pages/Center";
import LandingPage from "./pages/LandingPage";
import Richmond from "./pages/Richmond";
import DCMetro from "./pages/DCMetro";
import Pittsburgh from "./pages/Pittsburgh";
import Baltimore from "./pages/Baltimore";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./common/Navbar";
import NoMatch from "./pages/NoMatch";
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import API from "./utils/API";
import Login from "./common/Login";
import Test from './common/testing'
import Footer from './common/Footer'
import { Grid } from "@material-ui/core";



// export default createMuiTheme({ palette, themeName });



class App extends Component {
  state = {
      adminLoggedin: false,
      open: false ,
      password:"",
      showPassword: false,
      link: "/",
      redirectToReferrer: false ,
      isAuth: false,
      incorrectMessage: "",
      error: false,
      auth: false,
      testing:"testing"
  }
 
handleAdminAccess = () => {

    console.log("handle")
        this.setState({  
          open: true,
          password: "",
        });

  }
  

handleSubmit = (event) => {
  
  event.preventDefault();

  
    (!this.state.isAuth?    
      API.getUser({
            firstName: "admin",
            password: this.state.password
          })
          .then(res => {
            // Map through users to find admin password match
            res.data.map( (arr, i) => {
              (
                arr.password === this.state.password ?  
                this.setState(
                  { 
                  isAuth: true, 
                  open: false ,
                  password: "",
                  error: false
                  
                  }
                )
                 : 
                this.setState({
                  incorrectMessage: "You have entered the wrong password",
                  error:true                
                })
                )
            }) 
          })
    .catch(err => console.log(err))

    :
    console.log("already admin"))
    console.log(this.state)
      
        }       

handleClose = () => {
  console.log("handle close")
  this.setState({ open: false})
  console.log(this.state)
}



handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;

  // Updating the input's state
  this.setState({
    [name]: value
  });
  console.log(this.state)
};

onSubmit = () => {
  this.setState({auth: true})
}

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};

componentDidMount = () => {
const token = localStorage.getItem("token")


  token ?
  this.setState({auth: true}) : 
  this.setState({auth: false})
}


  render() {
    
  
    return (
<div> 
      <Router>
        
        <div style={{backgroundColor: "#62BB46", height: "100%"}}>
          <Navbar 
            handleAdminAccess={this.handleAdminAccess} 
            auth={this.state.auth}
            />
          <Switch>
            <Route exact path="/" render={(props) =>(<LandingPage {...props} onSubmit={this.onSubmit} auth={this.state.auth} handleFormSubmit={this.handleFormSubmit}/>)} />
            <Route exact path="/richmond" component={Richmond} />
            <Route exact path="/dcmetro" component={DCMetro} />
            <Route exact path="/pittsburgh" component={Pittsburgh} />
            <Route exact path="/baltimore" component={Baltimore} />
            <Route exact path="/center/:centerName" component={Center} />
            <Route exact path="/national" component={National} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/login"  component={Login  } />
            <Route exact path="/testing" component={Test} />
            <Route path="/admin" 
            render={(props) => (this.state.isAuth ? 
            <Admin /> : 
            <Login  {...props}
            incorrectMessage={this.state.incorrectMessage}
            open={this.state.open}
            error={this.state.error}
            handleSubmit={this.handleSubmit}
            showPassword={this.state.showPassword}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
            handleClickShowPassword={this.handleClickShowPassword}
            
            /> 
            )}
            />

        
      
            <Route component={NoMatch} />
            
          </Switch>
       
         
        
         
        </div>
       
      </Router>
      <div   style={{height: 50, backgroundColor:"#62BB46"}}/>
      <Footer />
 </div>  
    );
  }
}

export default App;
