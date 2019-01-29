import React, { Component } from "react";
import Timeline from './Timeline';

// import Tabs from './Tabs'
import Survey from './Survey';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
// import API from "../utils/API";


const wrapperStyles = {
    width: "100%",
    maxWidth: 1300,
    height: "100%",
    margin: "0 auto",
    padding: 10,
    backgroundColor: "#62BB46"
  }


class LandingPage extends Component {
    state = {
        landing: {},
        auth:""
    };

render(){


    return(

      <Grid style={{height: 1200}}> 
        <Grid container style={wrapperStyles}>
        <Grid container style={{height: 100}} />
            <Grid item xs={12} md={6}> 
                <Card elevation={0}> 
                    <Survey {...this.props} auth={this.props.auth} onSubmit={this.props.onSubmit} />
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Timeline />
            </Grid>

        </Grid>
        </Grid>  
    )
}
}
 export default LandingPage;



