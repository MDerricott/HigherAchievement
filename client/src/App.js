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
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./common/Navbar";
import NoMatch from "./pages/NoMatch";
import Admin from './pages/Admin'
import API from "./utils/API";
import ProtectedRoute from './common/ProtectedRoute'
import Login from "./common/Login"


// import BottomNav from "./common/BottomNav";

// import Heatmap from "../src/pages/Center/Heatmap"
// const data= [
//   {date: 3, value: 4-2},
//   {date: 2, value: 3},
//   {date: 1, value: 0},
//   {date: 0.1, value: 2},
  
// ]

class App extends Component {
  state = {
      adminLoggedin: false,
      open: false ,
      password:"",
      showPassword: false,
      link: "/",
      redirectToReferrer: false ,
      isAuth: false


  }
 
handleAdminAccess = () => {

    console.log("handle")
  // let { from } = this.props.location.state || { from: { pathname: "/" } };

      // this.fakeAuth.authenticate(() => {
        this.setState({  open: true});
      
      // console.log(this.fakeAuth.isAuthenticated)
    
    
  
  }
  
 
// (this.adminLoggedin ?   
//       this.setState({ 
//       open: false,
//       link: "/admin"
//       })
//      :
//   this.setState({ 
//     open: true})
    
//   )






// login = () => {
  

//   this.fakeAuth.authenticate(() => {
//     this.setState({ redirectToReferrer: true });
//   });
// };



handleSubmit = (event) => {
  
  event.preventDefault();
  // this.fakeAuth.authenticate(() => {
  //   this.setState({ redirectToReferrer: true });
  // });
  
    // (!this.state.adminLoggedin ?    
    //   API.getUser({
    //         firstName: "admin",
    //         password: this.state.password
    //       })
    //       .then(res => {
    //         // Map through users to find admin password match
    //         res.data.map( (arr, i) => {
    //           (
    //             arr.password === this.state.password ?  
    //             this.setState(
    //               { 
    //               adminLoggedin: true, 
    //               open: false ,
    //               link: "/admin"
                  
    //               }
    //             )
    //              : 
    //             console.log("Enter the correct password")
    //             )
    //         }) 
    //       })
    // .catch(err => console.log(err))

    // :
    // console.log("already admin"))
    // console.log(this.state)
      
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

handleClickShowPassword = () => {
  this.setState(state => ({ showPassword: !state.showPassword }));
};



  render() {

  
    return (

      <Router>
        
        <div>
          <Navbar 
            handleAdminAccess={this.handleAdminAccess} 
           
            />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/richmond" component={Richmond} />
            <Route exact path="/dcmetro" component={DCMetro} />
            <Route exact path="/pittsburgh" component={Pittsburgh} />
            <Route exact path="/baltimore" component={Baltimore} />
            <Route exact path="/center/:centerName" component={Center} />
            <Route exact path="/national" component={National} />
            <Route path="/login" component={Login} />
        
            <Route path="/admin" 
            render={() => (this.state.isAuth ? 
            <Admin /> : 
            <Login  
        
            open={this.state.open}
            handleClose={this.handleClose}
            handleSubmit={this.handleSubmit}
            showPassword={this.state.showPassword}
            password={this.state.password}
            handleInputChange={this.handleInputChange}
            handleClickShowPassword={this.handleClickShowPassword}
            // fakeAuth={this.fakeAuth.isAuthenticated}
            /> 
            )}
            />
          
            <Route component={NoMatch} />
          </Switch>


   
        </div>
        
      </Router>
     
    );
  }
}

export default App;


 