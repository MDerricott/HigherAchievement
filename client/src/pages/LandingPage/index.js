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

    // componentDidMount() {
    //     API.getBook(this.props.match.params.id)
    //       .then(res => this.setState({ book: res.data }))
    //       .catch(err => console.log(err));
    //   }
render(){


    return(

      <Grid> 
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




// <Grid container>
//     <Grid container style={{height: 100}} />
//         <div className="lp" style={wrapperStyles}>  
//             <Grid container  >
//                     <Grid 
//                         item 
//                         width={"50%"} 
//                         xs={12} 
//                         md={6}
//                         // className="loading-page"
//                     >
//                             <Grid container style={{height: 200}} justify="center" >
//                                  <br></br>
//                                  <br></br>
//                             Place holder for HA About Text and App Introduction
                            
//                                 <Survey {...this.props} auth={this.props.auth} onSubmit={this.props.onSubmit} />
//                             </Grid>
//                     </Grid>   
//                 </Grid>     
//                  <Grid 
//                     item 
//                     width={"50%"}  
//                     xs={12} 
//                     md={6}>
//                             <Timeline />
//                 </Grid>
//                 <Grid>
//             </Grid>
//         </div>
//      </Grid> 
// </Grid>
//     )}

// }
