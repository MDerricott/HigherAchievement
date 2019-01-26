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
        salesforce: null,
    };
    
componentDidMount (){
// const Henderson = this.props.match.params.centerName
  // var search = "FIND {Henderson}"
  
//  API.findSalesforceUrl('search: "FIND {Henderson}"')
//   .then(res => {
//     console.log(res.data)
//   })

API.pullCenterData("0011U000008XFtSQAW")
    .then(res => {
      console.log(res.data)
    
    })


  // // this.setState({ salesforce : "0011U000008XFtSQAW" })

  // this.props.match.params.centerName === "Henderson" ? this.setState({ centerId : "0011U000008XFtSQAW" }) : console.log("didnt work")

  // // console.log(this.state.salesforce)
  
  //   // if(this.props.match.params.centerName === "Henderson"){
  //   //   this.setState({ centerId : "0011U000008XFtSQAW" })
  //   //   console.log(this.state)
    

  //   API.getSalesforceRecord(this.props.match.params.centerName === "Henderson" ?  "0011U000008XFtSQAW"  : null)
    
  //   .then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       salesforce: res.data.name
  //     })
  //     console.log(res.data)
  //   })
  
  
    // .catch(err => console.log("error " + err))
  // }

    // API.getCenter(this.props.match.params.centerName)
    //     .then(res => {
          
    //         this.setState({
    //             center: res.data,
    //             cdata: res.data.cohortData.data.split(","),
    //             ddata: res.data.scholarDemo.data,
    //             demoLabel: res.data.scholarDemo.labels,
    //             mathOutcome: res.data.outcomes.math * 100,
    //             readingOutcome: res.data.outcomes.reading * 100
    
    //         })
    //         console.log(this.state.center.outcomes.math)
    //     })
    //     .catch(err => console.log(err));
}


    render(){
        const { classes } = this.props;

        let rolePieChart = {
          data: canvas => {
            // let ctx = canvas.getContext("2d");
          
        
            // let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
            // gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
            // gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
            // gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
        
            return {
              labels: this.state.demoLabel,
              datasets: [
                {
                  backgroundColor: ["#62BB46","#000000", "#006595", "#F5A01A"],
                  hoverBackgroundColor: "#607D8B",
                  hoverBorderColor: "#ffffff",
                  data: this.state.ddata,
                  borderWidth: [5,5,5,5],
                  
                  label: "data set"
                },
                
                // {
                 
                //   backgroundColor: ["#000000","#66ffff", "#0000ff"],
                //   data: [100, 20, 40]}
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
            // let ctx = canvas.getContext("2d");
        
            // let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        
            // gradientStroke.addColorStop(1, "rgba(34,73,18,0.2)");
            // gradientStroke.addColorStop(0.4, "rgba(34,73,18,0.0)");
            // gradientStroke.addColorStop(0, "rgba(34,73,18,0)"); //blue colors
        
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
          <div>

          
            <div style={wrapperStyles}>


            
            {/* <Paper 
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
            
             </Paper> */}


<div>
<Grid container>
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
                  salesforce
                  {this.state.salesforce}
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
                 {this.state.center.enrollment}
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
                  {`${this.state.mathOutcome} %`}

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
                 {`${this.state.readingOutcome} %`}
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
 </Grid>
 
     <Grid container>
     
     {/* <CustomCard>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <NotesIcon/>
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
                  Virginia Poverty
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
                  11.2%
                </Typography>
              </CardHeader>
              <CardBody>

                      <Typography 
                        paragraph>
                      Poverty has a significant impact on individuals and society at large. Children who live in poverty are likely to suffer from poor nutrition during infancy, experience emotional distress, and have an increased risk for academic failure and teenage pregnancy. Adult men and women who live in poverty are at high risk of poor health, debilitating stress, and violence. Poverty can also affect seniors' ability to care for themselves or to obtain prescription medication.
                      </Typography>
                      <Typography paragraph>
                      Except for periods of economic recession -- which tend to create increased, if temporary, levels of poverty -- overall poverty rates in the US have held steady for nearly 50 years and have rarely gone above 15 percent.
                      <br />
                      Poverty was once far more prevalent among the elderly than among other age groups, but today's elderly have a poverty rate similar to that of working-age adults and much lower than that of children. For example, from 1960-1995, the official poverty rate of those aged 65 and above fell from 35 percent to 10 percent. In 2015, just 8.8 percent of seniors were living below the poverty level, compared to 19.7 percent of American children.
                      <br />
                      There is a greater likelihood of facing poverty or near poverty if one is Black or Hispanic or in a family (of any race) that is headed by a single woman.
                      <br />
                      Important factors affecting poverty are educational attainment, economic opportunity, and family status. There is a strong and direct relationship between education level and earnings and employability. The Bureau of Labor Statistics reports that in 2015 an adult (aged 25+) with a bachelor’s degree earned about 40 percent more than an adult with just a high school diploma and was only about half as likely to be unemployed. However, a good education is not enough. To reach their full earning potential, workers also need the job opportunities and potential for upward mobility that a truly healthy economy creates.
                      
                      </Typography>
              </CardBody>
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
                        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                            top: "4px",
                            fontSize: "16px",
                            position: "relative",
                            marginRight: "3px",
                            marginLeft: "3px"
                        }}}>
                <Typography
                              style={{
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
                              }}}
                            >
                                <LocalOffer />
                                Data from Virginia Performs
                          </Typography>
                </div>
              </CustomCardFooter>
            </CustomCard> */}
            </Grid>

        </div>

  </div>


  </div>
        )
    
        }
    
    

}
export default withStyles (dashboardStyle) (Center);