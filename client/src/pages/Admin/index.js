import React from 'react';
import Danger from "../../common/Danger";
import Card from "../../common/CustomCard";
import CardHeader from "../../common/CardHeader";
import CardBody from "../../common/CardBody";
import CardFooter from "../../common/CardFooter";
import Warning from "@material-ui/icons/Warning";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid'
import {Pie, HorizontalBar } from "react-chartjs-2";
import Table from './Table';
import API from "../../utils/API";
import { Typography } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached'
import InfoIcon from '@material-ui/icons/Info'



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
      // marginTop: "0",
      paddingTop: "10px",
      marginBottom: "0"
    },
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      // marginTop: "0",
      marginBottom: "0"
    },
    cardTitle: {
      color: "#3C4858",
      // marginTop: "0px",
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
      // marginTop: "0px",
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

  class AdminDashboard extends React.Component {
     state ={
       users: {},
       totalSurveys: null,
       affilateData: null,
       roleData: null,
       max: 0,

     } 

     componentDidMount = () => {
      this.getSurveyData()
    }
    getSurveyData = () => {
      API.findAllSurvey({})
        // .then(res => this.storeUser())
        .then(res => {
         
          const data = res.data
          let national = 0;
          let richmond = 0;
          let baltimore = 0;
          let pittsburgh = 0;
          let dcmetro = 0;
          let families = 0;
          let mentors = 0;
          let donors = 0;
          let school = 0;
    
      data.map(aff => {
          
            if (aff.affiliate === "National"){
              national ++
            }
            else if (aff.affiliate === "Richmond"){
              richmond++
            }
            else if (aff.affiliate === "Baltimore"){
              baltimore ++
            }
            else if (aff.affiliate === "Pittsburgh"){
              pittsburgh ++
            }
            else if (aff.affiliate === "DC Metro") {
              dcmetro ++
            }
          
            }
          )

          data.map(role => {
          
            if (role.role === "Families"){
              families ++
            }
            else if (role.role === "Mentor"){
              mentors++
            }
            else if (role.role === "Donor"){
              donors ++
            }
            else if (role.role === "School Partner"){
              school ++
            }
    
            }
          )

          const affilite = [national,dcmetro,baltimore,richmond,pittsburgh]
          var max = affilite.reduce(function(a, b) {
            return Math.max(a, b);
        });
        console.log("max" + max)
          this.setState({
            totalSurveys: res.data.length,
            affilateData: [national,dcmetro,baltimore,richmond,pittsburgh],
            roleData: [families, mentors, donors, school],
            max: max
          })
        
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
              data: this.state.roleData,
              borderWidth: [5,5,5,5],
              
              label: "data set"
            }
          
          ],
           
        };
      },
      options: {
        title: {
          display: true,
          text: 'Surveys by Role'
        },
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
          text: 'Surveys by Affilate'
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
                suggestedMax: this.state.max + 1,
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
    const today = new Date();
    const date = (today.getMonth()+1)+'-'+today.getDate() +'-'+ today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (
<div>


<div style={{margin: "0 auto", width: "75%"}}>
<Grid container spacing={24} style={{height:75}}/>

<Grid container >
<Card style={{height:75}}> 

  <Typography variant="h3" justify="center" style={{margin: "0 auto", padding: 10}}> Administration Dashboard   </Typography>

  
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
              <div style={{height:"25%"}} />
                    <Typography
                    align="center"
                    // marginTop={50}
                    variant="h1"
                    color="secondary"
                    style={{margin: "0 auto"}}
                    > 
                    
                        {this.state.totalSurveys}
                    </Typography>
                  </div>
                  
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                 
                    <CachedIcon/>
               
          
                   {`As of ${date} at ${time}`}
                  
                </div>
              </CardFooter>
       
          </Card>
     </Grid>  
     <Grid item sm={4}  >
        <Card >
              <CardHeader color="warning" stats icon>
                <p className={classes.cardCategory}> Surveys </p>
                <h3 className={classes.cardTitle}>
                 <small>by</small> Affilate
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
                
                    <InfoIcon />
                      Count of surveys by Affilate 
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
                 
                    <InfoIcon />
                    Count of surveys by Role
                 
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
              
                 <Table elevation={0} getSurveyData={this.getSurveyData()}/>
              
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                 
                <InfoIcon />
                    Use the Download button to export the table to a .csv file
                
          
                  
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
  
 
  
 