import React, { Component } from "react";
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


class App extends Component {
  render() {
    return (
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


          {/* <BottomNav /> */}
        </div>
        
      </Router>
     
    );
  }
}

export default App;
