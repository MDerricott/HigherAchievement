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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./common/Navbar";
import NoMatch from "./pages/NoMatch";

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
    data: [
      {date: 3, value: 4-2},
      {date: 2, value: 3},
      {date: 1, value: 0},
      {date: 0.1, value: 2},
      
    ]
  }
 



  render() {
    return (


        // <PieChart/>
          // <Heatmap />
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/richmond" component={Richmond} />
            <Route exact path="/dcmetro" component={DCMetro} />
            <Route exact path="/pittsburgh" component={Pittsburgh} />
            <Route exact path="/baltimore" component={Baltimore} />
            <Route exact path="/center/:centerName" component={Center} />
            <Route exact path="/national" component={National} />
            <Route component={NoMatch} />
          </Switch>


   
        </div>
        
      </Router>
     
    );
  }
}

export default App;


//  <Glyphs
//   width="500"
//   height="500"
//   margin="5"
//   data={this.state.data}
// /> 