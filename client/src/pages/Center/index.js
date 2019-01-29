import React, { Component } from "react";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
// import Paper from '@material-ui/core/Paper';
// import PlaceIcon from '@material-ui/icons/Place';
import Accessibility  from '@material-ui/icons/AccessibilityNew';
// import ChartIcon from '@material-ui/icons/InsertChart'
import CardBody from '../../common/CardBody'
// import NotesIcon from "@material-ui/icons/Notes"
// import CardActions from '@material-ui/core/CardActions';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import CardFooter from "../National/components/CardFooter";
// import IconButton from '@material-ui/core/IconButton';
// import LocalOffer from "@material-ui/icons/LocalOffer";
// import { Link } from "react-router-dom";
// import Danger from "../../common/Danger";
import CustomCard from "../../common/CustomCard";
import CardHeader from "../../common/CardHeader";
import CardIcon from "../../common/CardIcon";
// import CardBody from "components/Card/CardBody.jsx";
import CustomCardFooter from "../../common/CardFooter";
import Icon from "@material-ui/core/Icon";
import withStyles from "@material-ui/core/styles/withStyles";
import { Pie , Line } from "react-chartjs-2";
// import Danger from "../../common/Danger";
import Card from "../../common/CustomCard";
// import Warning from "@material-ui/icons/Warning";
import PieChartIcon from '@material-ui/icons/PieChart';
import LineChartIcon from '@material-ui/icons/ShowChart'
import SchoolIcon from '@material-ui/icons/School'
import StarIcon from '@material-ui/icons/Grade'
import ElaIcon from '@material-ui/icons/Language'
import Footer from '../../common/Footer'
// import BottomNav from '../../common/BottomNav'


const wrapperStyles = {
    width: "100%",
    maxWidth: "80%",
    margin: "0 auto",
    alignContents: "center"
  }
  const dashboardStyle = {

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
    
    }
  };



  

  

class Center extends Component {
    // constructor(){
    // super()
  state = {
        center: {},
        cdata:[],
        ddata:[],
        mathOutcome:null,
        readingOutcome: null,
        demoLabel: null,
        centerId: "",
        salesforce: [],
    };


getsalesforceData =  (centerId) => {

    API.pullCenterData(centerId)
    .then(res => {
      console.log(res.data)
      this.setState({
        salesforce: res.data,
        ddata: [res.data.black__c, res.data.white__c, res.data.hispanic__c, res.data.noresponse__c],
        cdata:[res.data.fifth__c,res.data.sixth__c, res.data.seventh__c, res.data.eighth__c]
      })
    })
    .catch(err => console.log(err))
  }

    
componentDidMount (){

  if(this.props.match.params.centerName === "Henderson"){
    this.getsalesforceData("0011U000008XFtSQAW")
    }
  else if (this.props.match.params.centerName === "Binford"){
    this.getsalesforceData("0011U00000AJf3tQAD")
  } 
  else if (this.props.match.params.centerName === "Boushall"){
    this.getsalesforceData("0011U00000AJf51QAD")
  }
  else if (this.props.match.params.centerName === "Lakeland"){
    this.getsalesforceData("0011U00000AL2j0QAD")
  }
  else if (this.props.match.params.centerName === "Commodore"){
    this.getsalesforceData("0011U00000AL2hdQAD")
  }
  else if (this.props.match.params.centerName === "Cherry-Hill"){
    this.getsalesforceData("0011U00000AL2hYQAT")
  }
  else if (this.props.match.params.centerName === "West-End"){
    this.getsalesforceData("0011U00000AL6HRQA1")
  }
  else if (this.props.match.params.centerName === "Homewood"){
    this.getsalesforceData("0011U00000AL6GlQAL")
  }
  }


    render(){
        const { classes } = this.props;

        let rolePieChart = {
          data: canvas => {
            
            return {
              labels: ["Black","White", "Hispanic", "Prefer Not to Say"],
              datasets: [
                {
                  backgroundColor: ["#62BB46","#000000", "#006595", "#F5A01A"],
                  hoverBackgroundColor: "#607D8B",
                  hoverBorderColor: "#ffffff",
                  data: this.state.ddata,
                  borderWidth: [5,5,5,5],
                  
                  label: "data set"
                },

              ],
               
            };
          },
          options: {
            maintainAspectRatio: false,
            cutoutPercentage: 50,
            rotation: Math.PI,
            circumference: Math.PI,
            title: {
              display: true,
              text: 'Scholar Demographics'
            },
            
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
      
 
        let surveyTimeline = {
          data: canvas => {
            
            return {
              labels: ["5th", "6th", "7th", "8th"],
              datasets: [
                {
                  label: "GPA",
                  fill: true,
                  lineTension: 0,
                  backgroundColor: "rgba(0,101,149,0.7)",
                  borderColor: "#006595",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#006595",
                  pointBorderColor: "rgba(34,73,18,0)",
                  pointHoverBackgroundColor: "#006595",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 4,
                  data: this.state.cdata
                }
              ]
            };
          },
          options: {
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Cohort GPA Data'
            },
            legend: {
              display: false
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
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 1,
                    suggestedMax: 4,
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ]
            }}
        };
        return(
         <div style={{height:1250}}>
  <div style={{height:50}}/>
        


          <div style={{height: 1050}}>

          
            <div style={wrapperStyles}>


<div>
<Grid container >
<CustomCard>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <SchoolIcon fontSize="large" />
                      </Icon>
                </CardIcon>
                
                <Typography style={{
                    color: "#3C4858",
                    margin: 0,
                    padding: 10,
                    fontSize: "14px",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                    variant="h3"
                  >
                   Center
                  </Typography>
                <Typography 
                  variant="h4"
                  style={{
                    color: "#3C4858",
                    marginTop: "0px",
                    minHeight: "auto",
                    fontWeight: "300",
                    marginBottom: "3px",
                    textDecoration: "none",
                      "& small": {
                      color: "#777",
                      fontWeight: "400",
                      lineHeight: "1"
                  }}}>
                  
                  {this.state.salesforce.name}
                </Typography>
              </CardHeader>
              <CustomCardFooter stats>
              <Typography style={{
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
                  "& .fab,& .fas,& .far,& .fal,& .materialIcons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                Established 2016
                  
                </Typography>
              </CustomCardFooter>
            </CustomCard>

</Grid>
<div style={{height:50}}/>
<Grid container spacing={16}>  
      <Grid item sm={4}> 
     <CustomCard style={{height: 150}}>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <Accessibility fontSize="large" />
                      </Icon>
                </CardIcon>
                
                <Typography style={{
                    color: "#3C4858",
                    margin: 0,
                    padding: 10,
                    fontSize: "14px",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                    variant="h3"
                  >
                   Enrollment
                  </Typography>
                <Typography 
                  variant="h3"
                  style={{
                    color: "#3C4858",
                    marginTop: "0px",
                    minHeight: "auto",
                    fontWeight: "300",
                    marginBottom: "3px",
                    textDecoration: "none",
                      "& small": {
                      color: "#777",
                      fontWeight: "400",
                      lineHeight: "1"
                  }}}>
                 {this.state.salesforce.enrollment__c}
                </Typography>
              </CardHeader>
              <CustomCardFooter stats>
              <Typography style={{
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
                  "& .fab,& .fas,& .far,& .fal,& .materialIcons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                As of January 2019
                  
                </Typography>
              </CustomCardFooter>
            </CustomCard>
     </Grid>  
     <Grid item sm={4}>  
            <CustomCard style={{height: 150}}>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>
                      <StarIcon size="large"/>
                      </Icon>
                </CardIcon>
                <Typography style={{
                    color: "#3C4858",
                    margin: 0,
                    padding: 10,
                    fontSize: "14px",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                    variant="h4"
                  >
                   Math Outcome
                  </Typography>
                <Typography 
                variant="h4"
                style={{
                  color: "#3C4858",
                  marginTop: "0px",
                  minHeight: "auto",
                  fontWeight: "300",
                  marginBottom: "3px",
                  textDecoration: "none",
                      "& small": {
                      color: "#777",
                      fontWeight: "400",
                      lineHeight: "1"
                  }}}>
                  {`${this.state.salesforce.mathoutcome__c} %`}

                  {/* {this.state.center.outcomes.math * 100} */}
                </Typography>
              </CardHeader>
              <CustomCardFooter stats>
                <Typography style={{
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
                  "& .fab,& .fas,& .far,& .fal,& .materialIcons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                Maintained or Improved A/B
                  
                </Typography>
              </CustomCardFooter>
            </CustomCard>
        </Grid>
        <Grid item sm={4}>  
            <CustomCard style={{height: 150}}>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>
                      <ElaIcon size="large"/>
                      </Icon>
                </CardIcon>

                <Typography style={{
                    color: "#3C4858",
                    margin: 0,
                    padding: 10,
                    fontSize: "14px",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                    variant="h4"
                  >
                  Reading Outcomes
                  </Typography>
                <Typography 
                variant="h4"
                style={{
                  color: "#3C4858",
                  marginTop: "0px",
                  minHeight: "auto",
                  fontWeight: "300",
                  marginBottom: "3px",
                  textDecoration: "none",
                      "& small": {
                      color: "#777",
                      fontWeight: "400",
                      lineHeight: "1"
                  }}}>
                  {`${this.state.salesforce.readingoutcome__c} %`}
                </Typography>
              </CardHeader>
              <CustomCardFooter stats>
                <div style={{
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
                    "& .fab,& .fas,& .far,& .fal,& .materialIcons": {
                        top: "4px",
                        fontSize: "16px",
                        position: "relative",
                        marginRight: "3px",
                        marginLeft: "3px"
                        }}}>
                <Typography style={{
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
                  "& .fab,& .fas,& .far,& .fal,& .materialIcons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                Maintained or Improved A/B
                  
                </Typography>
                </div>
              </CustomCardFooter>
            </CustomCard>
        </Grid>
    </Grid> 
    <div style={{height:50}}/>      
     
    <Grid container spacing={24} >
   
   <Grid item  sm={6} >
       <Card >
         <CardHeader color="warning" stats icon>
           <p className={classes.cardCategory}>Scholar Demographics</p>
           <h3 className={classes.cardTitle}>
             Afterschool Academy 2018-19
           </h3>
         </CardHeader>
         <CardBody>
         <div className="chart-area" style={{height:300}}>
               
               <Pie 
                 data={rolePieChart.data}
                 options={rolePieChart.options}
                 />
             </div>
             
         </CardBody>
         <CardFooter stats>
           <div className={classes.stats}>
            
              <PieChartIcon/>
          
     
               
           
             
           </div>
         </CardFooter>
  
        </Card>
    </Grid>  
  <Grid item  sm={6} >
   <Card elevation={0} >
         <CardHeader color="warning" stats icon>
           <p className={classes.cardCategory}>Surveys </p>
           <h3 className={classes.cardTitle}>
              <small>Results</small>
           </h3>
         </CardHeader>
         <CardBody elevation={0}>
         
         <div className="chart-area" style={{height:300}}>
                    
                    <Line
                            data={surveyTimeline.data}
                            options={surveyTimeline.options}
                          />
                    </div>
         
         </CardBody>
         <CardFooter stats>
           <div className={classes.stats}>
             <LineChartIcon/>
     
             
           </div>
         </CardFooter>
  
     </Card>
   </Grid>  
   <div style={{height:150}}/>
 </Grid>
 
     <Grid container>
     
     
            </Grid>
            

        </div>

  </div>
  <div style={{height:50}}/>
</div>

<Footer/>
  </div>   

        )
    
        }
    
    

}
export default withStyles (dashboardStyle) (Center);