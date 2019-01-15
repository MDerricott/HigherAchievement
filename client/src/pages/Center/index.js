import React, { Component } from "react";
import API from "../../utils/API";
import Glyphs from './testGlyphs'
import Heatmap from "./Heatmap";
// import datas from './boushall.json';
import PieChart from './TestPieChart'
import Grid from '@material-ui/core/Grid'
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';

const wrapperStyles = {
    width: "100%",
    maxWidth: "70%",
    margin: "0 auto",
    alignContents: "center"
  }

class Center extends Component {
    constructor(){
    super()
    this.state = {
        center: {},
        glyph: [{date:2,value: 2},{date:3,value: 3}],
        grade5Value: "",
        grade6Value: "",
        grade7Value: "",
        grade8Value: ""
        
    
    };
    }
componentDidMount (){
   
    API.getCenter(this.props.match.params.centerName)
        .then(res => {
            this.setState({
                center: res.data,
                grade5Value: res.data.glyph[3].value,
                grade6Value: res.data.glyph[2].value,
                grade7Value: res.data.glyph[1].value,
                grade8Value: res.data.glyph[0].value
            })
           
     
            
         
        })
        .catch(err => console.log(err));
}


    render(){
      

        return(
            <div style={wrapperStyles}>


            
            <Paper 
                elevation={0}
                alignContents="center"
                >
            <Grid container alignContent="center" >
                   <div className="center">
                    <Typography
                    variant="h3"
                    align="center"
                    className="center"
                    paragraph>
                        {this.state.center.centerName}
                    </Typography >
                    </div>
            </Grid>
            <Grid 
                container
                height={50}
                
            />
            <Grid container>
                <div className="center">
                     <Heatmap
                        width ={800}
                        height= {500}
                     />
                </div>
            </Grid>
            <Grid 
                container
                height={50}
            />
            <div className="center">
            <Grid container>
            <Grid item sm={6}>
            Text about Chart
            
            </Grid>
                <Grid item sm={6}>
                    <Glyphs
                        width={400}
                        height={400}
                        margin={5}
                        data={
                            [
                            {date:4,value: this.state.grade8Value},
                            {date:3,value: this.state.grade7Value},
                            {date:2,value: this.state.grade6Value},
                            {date:1,value: this.state.grade5Value}
                        ]}
                    />  
                </Grid>
                <Grid container>
                <Grid item>  

                </Grid >
                <Grid item sm={6}>
                    <PieChart
                        width={400}
                        height={400}
                        letters={[
                            {ethnicty: "Black", frequency: "90"},
                            {ethnicty: "Hispanic", frequency: "7"},
                            {ethnicty: "White", frequency: "3"}
                        ]}
                        browsers={[
                            {label: "0 - 25k" , usage: "53"},
                            {label: "25k - 40k" , usage: "23"},
                            {label: "40k - 60k" , usage: "13"},
                            {label: "60k - more" , usage: "17"}
                        ]}
                    />
                </Grid>
                <Grid item>  
                    <Typography paragraph className="center">
                        Text about graph
                    </Typography>
                </Grid >
               </Grid>
             </Grid>
             </div>
            
             </Paper>
             </div>
        )
    
        }
    
    

}
export default Center