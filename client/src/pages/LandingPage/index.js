import React, { Component } from "react";
import Timeline from './Timeline';
import Grid from '@material-ui/core/Grid';
// import Tabs from './Tabs'
import Survey from './Survey';
// import API from "../utils/API";

class LandingPage extends Component {
    state = {
        landing: {}
    };

    // componentDidMount() {
    //     API.getBook(this.props.match.params.id)
    //       .then(res => this.setState({ book: res.data }))
    //       .catch(err => console.log(err));
    //   }
render(){


    return(

        <div className="lp">  
            <Grid container  >
                    <Grid 
                        item 
                        width={"50%"} 
                        xs={12} 
                        md={6}
                        className="loading-page"
                    >
                            <Grid container style={{height: 200}} justify="center" >
                            <br></br>
                            <br></br>

                            Place holder for HA About Text and App Introduction
                            </Grid>
                                <Survey  auth={this.props.auth} {...this.props}/>
                            </Grid>
                    <Grid 
                        item 
                        width={"50%"}  
                        xs={12} 
                        md={6}>
                            <Timeline />
                    </Grid>
            </Grid>
        </div>
    )}

}
export default LandingPage