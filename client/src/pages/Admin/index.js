import React from 'react';
import Danger from "../../common/Danger";
import Card from "../../common/CustomCard";
import CardHeader from "../../common/CardHeader";
// import CardIcon from "./CardIcon";
import CardBody from "../../common/CardBody";
import CardFooter from "../../common/CardFooter";
// import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid'
import {Pie, HorizontalBar } from "react-chartjs-2";
import Table from './Table';
import API from "../../utils/API";




import { Typography } from '@material-ui/core';


const datas = [80, 100, 70, 80, 120, 80];



const successColor = "#4caf50"


const dashboardStyle = {
    successText: {
      color: successColor
    },
    upArrowCardCategory: {
      width: "16px",
      height: "16px"
    },
    stats: {
      color: "#999999",
      display: "inline-flex",
      fontSize: "12px",
      lineHeight: "22px",
      "& svg": {
        top: "4px",
        width: "16px",
        height: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        top: "4px",
        fontSize: "16px",
        position: "relative",
        marginRight: "3px",
        marginLeft: "3px"
      }
    },
    cardCategory: {
      color: "#999999",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      paddingTop: "10px",
      marginBottom: "0"
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitle: {
      color: "#3C4858",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontWeight: "400",
        lineHeight: "1"
      }
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      "& small": {
        color: "#777",
        fontWeight: "400",
        lineHeight: "1"
      }
    }
  };
  // const wrapperStyles = {
  //   width: "75%",
  //   maxWidth: 980,
  //   margin: "0 auto",
  //   padding: 10,
  //   backgroundColor: "#62BB46"
  // }

 

  class AdminDashboard extends React.Component {
     state ={
       users: {},
       totalSurveys: null,
       affilateData: null,

     } 
    //  "NAT", "DCM", "BAL", "RIC", "PGH"
     componentDidMount = () => {
      API.getAllUsers({})
        // .then(res => this.storeUser())
        .then(res => {
          console.log(res.data)
          const data = res.data
          let national = 0;
          let richmond = 0;
          let baltimore = 0;
          let pittsburgh = 0;
          let dcmetro = 0;
          
          // let total = null;
          data.map(x => {
            if (x.affiliate === "National"){
              national ++
            }
            else if (x.affiliate === "Richmond"){
              richmond++
            }
            else if (x.affiliate === "Baltimore"){
              baltimore ++
            }
            else if (x.affiliate === "Pittsburgh"){
              pittsburgh ++
            }
            else if (x.affiliate === "DC Metro")
            dcmetro ++
          }
          )
            // console.log(national + " " + richmond +  " " + baltimore + " " + pittsburgh +  " " + dcmetro)
          this.setState({
            totalSurveys: res.data.length - 1,
            affilateData: [national,dcmetro,baltimore,richmond,pittsburgh]
          })
          console.log(this.state)
        })
        .catch(err => console.log(err));
    }

     





    render(){
    const { classes } = this.props;
    let rolePieChart = {
      data: canvas => {
      
        return {
          labels: ["Families", "Mentors","Donors","School Partners"],
          datasets: [
            {
              backgroundColor: ["#62BB46","#000000", "#006595", "#F5A01A"],
              hoverBackgroundColor: "#607D8B",
              hoverBorderColor: "#ffffff",
              data: this.state.affilateData,
              borderWidth: [5,5,5,5],
              
              label: "data set"
            }
          
          ],
           
        };
      },
      options: {
        maintainAspectRatio: false,
        cutoutPercentage: 0,
        rotation: 10,
        legend: {
          display: true,
          position: "bottom",
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true}
    };
    
    
  
    
    let affiliateHBard = {
      data: canvas => {
        return {
          labels: ["NAT", "DCM", "BAL", "RIC", "PGH"],
          datasets: [
            {
              label: "Surveys",
              // fill: true,
              backgroundColor: "#006595" ,
              hoverBackgroundColor: "#F5A01A",
              borderColor: "#ffffff",
              borderWidth: 0,
              borderDash: [],
              borderDashOffset: 0.0,
              data: this.state.affilateData
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Surveys by affilate'
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                padding: 10,
                fontColor: "#9e9e9e"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 10,
                suggestedMin:0,
                fontColor: "#9e9e9e"
              }
            }
          ]
        }
      }
    };

    return (
<div>


<div style={{margin: "0 auto", width: "75%"}}>
<Grid container spacing={24} style={{height:75}}/>

<Grid container >
<Card style={{height:75}}> 

  <Typography> Administration Dashboard   </Typography>
</Card>


 </Grid>

<Grid container >
   
    <Grid item sm={12} >
     </Grid>  
     </Grid>

  <Grid container spacing={24}>
   
    <Grid item sm={4}  >
        <Card >
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Surveys</p>
                <h3 className={classes.cardTitle}>
                   <small>Completed</small>
                </h3>
              </CardHeader>
              <CardBody>
              <div style={{height:200}} className="chart-area">
                    
                    <Typography
                    align="center"
                    marginTop={50}
                    variant="h2"
                    color="secondary"
                    > 
                    
                        {this.state.totalSurveys}
                    </Typography>
                  </div>
                  
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                   As of TODAY Add Moment
                  
                </div>
              </CardFooter>
       
          </Card>
     </Grid>  
     <Grid item sm={4}  >
        <Card >
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Total Surveys </p>
                <h3 className={classes.cardTitle}>
                 <small>Affilate</small>
                </h3>
              </CardHeader>
              <CardBody>
              <div className="chart-area" style={{height:200}}>
                    
                
              <HorizontalBar
                      data={affiliateHBard.data}
                      options={affiliateHBard.options}
                    />
                  
              </div>
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                    Role footnote
                  
                </div>
              </CardFooter>
       
          </Card>
     </Grid>  
     <Grid item  sm={4} >
            <Card >
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Survey Resuls</p>
                <h3 className={classes.cardTitle}>
                  <small>by</small> Role
                </h3>
              </CardHeader>
              <CardBody>
              <div className="chart-area" style={{height:200}}>
                    
                    <Pie 
                      data={rolePieChart.data}
                      options={rolePieChart.options}
                      />
                  </div>
                  
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                </div>
              </CardFooter>
       
             </Card>
         </Grid> 
     </Grid>
      <Grid container spacing={24} >

       <Grid item  sm={12} >
        <Card elevation={0} >
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}>Surveys </p>
                <h3 className={classes.cardTitle}>
                   <small>Results</small>
                </h3>
              </CardHeader>
              <CardBody elevation={0}>
              
                 <Table elevation={0}/>
              
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                  
                </div>
              </CardFooter>
       
          </Card>
        </Grid>  
      </Grid>
      
      
     </div>
      </div>
    );
  }
}
  AdminDashboard.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(dashboardStyle)(AdminDashboard);
  
 
  
 