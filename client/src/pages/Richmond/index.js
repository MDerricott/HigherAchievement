import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import map from "./data/vaschoolsmap"
import data from './data/data'
import { scaleLinear } from "d3-scale"
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import SchoolIcon from '@material-ui/icons/School';
import Card from '@material-ui/core/Card';
// import { ButtonBase } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardFooter from "../National/components/CardFooter";
import IconButton from '@material-ui/core/IconButton';
import LocalOffer from "@material-ui/icons/LocalOffer";
import { Link } from "react-router-dom";
// import Danger from "../../common/Danger";
import CustomCard from "../../common/CustomCard";
import CardHeader from "../../common/CardHeader";
import CardIcon from "../../common/CardIcon";
// import CardBody from "components/Card/CardBody.jsx";
import CustomCardFooter from "../../common/CardFooter";
import Icon from "@material-ui/core/Icon";
// import Warning from "@material-ui/icons/Warning";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import PlaceIcon from '@material-ui/icons/Place';
import Accessibility  from '@material-ui/icons/AccessibilityNew';
import ChartIcon from '@material-ui/icons/InsertChart'
import CardBody from '../../common/CardBody'
import NotesIcon from "@material-ui/icons/Notes"
import SchoolBusIcon from '@material-ui/icons/DirectionsBus'

// const successColor = "#4caf50"


// const dashboardStyle = {
//     successText: {
//       color: successColor
//     },
//     upArrowCardCategory: {
//       width: "16px",
//       height: "16px"
//     },
//     stats: {
//       color: "#999999",
//       display: "inline-flex",
//       fontSize: "12px",
//       lineHeight: "22px",
//       "& svg": {
//         top: "4px",
//         width: "16px",
//         height: "16px",
//         position: "relative",
//         marginRight: "3px",
//         marginLeft: "3px"
//       },
//       "& .fab,& .fas,& .far,& .fal,& .material-icons": {
//         top: "4px",
//         fontSize: "16px",
//         position: "relative",
//         marginRight: "3px",
//         marginLeft: "3px"
//       }
//     },
//     cardCategory: {
//       color: "#999999",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       paddingTop: "10px",
//       marginBottom: "0"
//     },
//     cardCategoryWhite: {
//       color: "rgba(255,255,255,.62)",
//       margin: "0",
//       fontSize: "14px",
//       marginTop: "0",
//       marginBottom: "0"
//     },
//     cardTitle: {
//       color: "#3C4858",
//       marginTop: "0px",
//       minHeight: "auto",
//       fontWeight: "300",
//       fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//       marginBottom: "3px",
//       textDecoration: "none",
//       "& small": {
//         color: "#777",
//         fontWeight: "400",
//         lineHeight: "1"
//       }
//     },
//     cardTitleWhite: {
//       color: "#FFFFFF",
//       marginTop: "0px",
//       minHeight: "auto",
//       fontWeight: "300",
//       fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//       marginBottom: "3px",
//       textDecoration: "none",
//       "& small": {
//         color: "#777",
//         fontWeight: "400",
//         lineHeight: "1"
//       }
//     },
    const wrapperStyles = {
      width: "80%",
      maxWidth: 1000,
      margin: "0 auto",
      padding: 3,
      backgroundColor: "#62BB46"
    }
  
  





const otherScale = scaleLinear()
  .domain([0,14])
  .range(["#ffffff","#f5a01a"])


const colorScale = scaleLinear()
  .domain([0,10000,50000,500000,120000])
  .range(["#ffffff","#b2d0df","#66a2bf","#3283aa","#006595"])

  const styles = theme => ({
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

class Virginia extends Component {
  constructor() {
    super()
    this.state = {
      poverty: [],
      displayText: "hide",
      viewBox: "2800 -200 980 751",
      radius: 0,
      zoom: 12,
      circle: "visible",
      zoomedIn: false,
      grad: true,
      test: "test",
      centers: [
        { markerOffset: 10,markerXOff:-60, name: "Henderson", coordinates: [-77.4466, 37.5963], id: "5c3b7d308296f336bce86ccf" },
        { markerOffset: 10,markerXOff:-50, name: "Boushall", coordinates: [-77.4697, 37.4729], id: "5c3b84538296f336bce86ee1"},
        // { markerOffset:5,markerXOff:45, name: "Wilder", coordinates: [-77.4216, 37.6205] },
        { markerOffset: 10,markerXOff:40, name: "Binford", coordinates: [-77.4622, 37.5491], id: "5c3b84668296f336bce86ee7" },
        // { markerOffset: 30, name: "Alexandria", coordinates: [-77.1108, 38.8265] },
        ]
    }
    this.handleCenterSelection = this.handleCenterSelection.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleDropout = this.handleDropout.bind(this)
    this.handlePoverty = this.handlePoverty.bind(this)
    this.useCommas = this.useCommas.bind(this)

  }


  useCommas (n) {
    return String(n).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    
  }

  handleCenterSelection(evt) {
    this.setState({
      viewBox: "9000 -250 980 751",
      circle: "hidden",
      zoom: 35,
      radius: 9,
      displayText:  "affilateMarkers" ,
      zoomedIn:true,
    })
  }

  handleDropout() {
    this.setState({
      grad: true
    })
  }
  handlePoverty() {
    this.setState({
      grad: false
    })
  }


  handleReset() {
    this.setState({
      viewBox: "2800 -200 980 751",
      radius: 0,
      circle: "visible",
      displayText: "hide",
      zoom: 12,
      zoomedIn: false,
    })
  }

  componentDidMount() {
        this.setState({ poverty: data })

  }


  render() {
    const { classes } = this.props;
    const { poverty , grad , zoomedIn} = this.state
 
  
          console.log(classes.dashboardStyle)
    return (
     <Grid container justify="center"  style={{backgroundColor:"#62BB46" }}> 
     <Grid container style={wrapperStyles}>
     

          <CustomCard>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <PlaceIcon fontSize="large" />
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
                   Affiliate 
                  </Typography>
                <Typography 
                  variant="h2"
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
                  Richmond
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
                  "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                4009 Fitzhugh Ave , Suite 200, Richmond, VA 23230
                  
                </Typography>
              </CustomCardFooter>
            </CustomCard>
   
    

    
     {/* <Grid container> */}
          {/* <Grid container justify="center"> */}
            {/* <div style={{heght: 500}}>  */}
             <Card elevation={4} style={{backgroundColor: "#000000", color:"#ffffff", width: "40%", minHeight: 50, display: "inline-block", position: "relative", top:50, left:20}}> 
                       {(grad ? 
                       <div>
                        <Typography
                        color="inherit"
                        variant="h5"
                        style={{paddingLeft: 15, paddingTop: 5}}>
                          Virginia Drop Out Rates
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                            style={{paddingLeft: 15, paddingBottom: 5}}>
                            The estimated % of all people living in poverty
                         </Typography>
                         </div> 
                          : 
                          <div>
                          <Typography
                          color="inherit"
                          variant="h5"
                          style={{paddingLeft: 15, paddingTop: 5}}>
                          Virginia Poverty Rates
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                            style={{paddingLeft: 15, paddingBottom: 5}}>
                            The estimated % of all people living in poverty
                         </Typography>
                        </div>
                       )}
              </Card>
           
              <Card className={classes.card} elevation={2} > 
                    <Grid container justify="flex-end"> 
                              <div >
                                    <CardActions className={classes.actions} disableActionSpacing>
  
                                            {(zoomedIn
                                             ? 
                                            <Button
                                                // variant="contained"
                                                size="small"

                                                color="primary"
                                                onClick={this.handleReset}
                                                
                                                
                                                style={{
                                                  margin: 10
                                                }}
                                              >
                                                    <Typography >
                                                       Virginia Map
                                                    </Typography>
                                                    
                                              </Button>
                                              :
                                              <Button
                                                // variant="contained"
                                                size="small"
                                                color="primary"
                                                onClick={this.handleCenterSelection}
                                                
                                                style={{
                                                  margin: 10
                                                }}
                                              >
                                                    <Typography >
                                                      Our Centers
                                                    </Typography>
                                                    
                                              </Button>
                                               )}
              
                                              <Button
                                            
                                                size="small"
                                                color="primary"
                                                // variant="contained"
                                                // color={(grad ?  "primary" : null)}
                                                onClick={this.handleDropout}
                                                disabled={grad}
                                                style={{
                                                  margin: 10
                                                }}
                                              >
                                                    <Typography >
                                                        Dropout Rates 
                                                    </Typography>
                                                    
                                              </Button>
                                              <Button
                                                // variant="contained"
                                                size="small"
                                                color="primary"
                                                // color={(grad ?  null : "primary" )}
                                                onClick={this.handlePoverty}
                                                disabled={!grad}
                                                style={{
                                                  margin: 10
                                                }}
                                              >
                                                  <Typography> 
                                                      Poverty Rates 
                                                  </Typography>
                                              </Button>

                                               
                                    </CardActions>
                                </div>   
                       </Grid>
                         
                      <Paper  elevation={0}>
                          <ComposableMap
                            projection="albersUsa"
                            projectionConfig={{
                                scale: 1000,
                            }}
                            width={1000}
                            height={500}
                            viewBox={this.state.viewBox}
                            style={{
                                width: "100%",
                                height: "auto",
                            }}
                          >
                        <ZoomableGroup  zoom={this.state.zoom} >
                              <Geographies geography={map} disableOptimization>
                                  {(geographies, projection) =>
                                      geographies.map((geography, i) => { 
                                      const statePoverty = poverty.find(s =>
                                      s[0] === geography.properties.NAME
                                    ) || {}
                                return (
                                    <Tooltip 
                                        title={`${statePoverty[0]} estimated in poverty ${this.useCommas(statePoverty[1])} the HS dropout rate is ${(statePoverty[5]? statePoverty[5] + "%": "unknown")}`} placement="top" disableFocusListener key={i}> 
                                      <Geography
                                          key={`state-${geography.properties.GEOID}`}
                                          cacheId={`state-${geography.properties.GEOID}`}
                                          round
                                          geography={geography}
                                          projection={projection}
                                          style={{
                                            default: {
                                              fill: (this.state.grad ? otherScale(+statePoverty[5]): colorScale(+statePoverty[1])),
                                              stroke: "#ffffff",
                                              strokeWidth: 0.05,
                                              outline: "none",
                                            },
                                            hover: {
                                              fill: "#607D8B",
                                              stroke: "#ffffff",
                                              strokeWidth: 0.05,
                                              outline: "none",
                                            },
                        // pressed: {
                        //   ill: "#607D8B",
                        //   stroke: "#607D8B",
                        //   strokeWidth: 0.05,
                        //   outline: "none",
                        // },
                                          }}
                                            />
                                        </Tooltip>
                                    )}
                                  )}
                                  </Geographies>
                                  <Markers>
                                      {this.state.centers.map((center, i) => (
                                          
                                              <Marker
                                                key={"marker" + i}
                                                marker={center}
                                                style={{
                                                  default: { fill: "#62BB46" },
                                                  hover: { fill: "#FFFFFF" },
                                                  pressed: { fill: "#62BB46" },
                                                  visited: {fill:"#62BB46" }
                                                  
                                                }}
                                                >
                                               <Link to={`/center/${center.name}`} >
                                              <circle
                                                className={this.state.circle}
                                                cx={0}
                                                cy={0}
                                                r={this.state.radius}
                                                style={{
                                                  stroke: "#62BB46",
                                                  strokeWidth: 1,
                                                  opacity: 1,
                                                }}
                                                />
                                              </Link>
                                              <text
                                                className={this.state.displayText}
                                                textAnchor="middle"
                                                x={center.markerXOff}
                                                y={center.markerOffset}
                                                style={{
                                                    fontFamily: "Roboto, sans-serif",
                                                    fill: "#000000",
                                                    fontSize: 18
                                                }}
                                            >
                                                {center.name}
                                            </text>
                                              </Marker>
                                          
                                        ))}
                                  </Markers>  
            
                        </ZoomableGroup>
                        </ComposableMap>
                      </Paper>
                      <CardFooter stats>
                        <div className={classes.stats}>
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
                                Data from 2017 Census
                          </Typography>
                        </div>
                        <div>
                          <CardActions className={classes.actions} disableActionSpacing>
                              <IconButton aria-label="Add to favorites">
                                  <FavoriteIcon />
                              </IconButton>
                              <IconButton aria-label="Share">
                                  <ShareIcon />
                              </IconButton>
                          </CardActions>
                        </div>
                    </CardFooter>
            </Card>
            {/* </div> */}
           
    
  <Grid container spacing={16}>  
      <Grid item sm={4}> 
      <CustomCard style={{height: 150}}>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <SchoolBusIcon fontSize="large" />
                      </Icon>
                </CardIcon>
                
                <Typography style={{
                    color: "#3C4858",
                    margin: 0,
                    padding: 5,
                    fontSize: "14px",
                    marginTop: "0",
                    marginBottom: "0"
                  }}
                    variant="h3"
                  >
                   School District 
                  </Typography>
                <Typography 
                  variant="h6"
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
                  <small>  Richmond City Public Schools</small>
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
                  "& .fab,& .fas,& .far,& .fal,& .material-icons": {
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
     <Grid item sm={4}>  
            <CustomCard  style={{height: 150}}>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>
                      <Accessibility/>
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
                  296
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
                  "& .fab,& .fas,& .far,& .fal,& .material-icons": {
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
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>
                      <ChartIcon/>
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
                  FARM Rate
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
                  100%
                </Typography>
              </CardHeader>
              <CustomCardFooter stats>
                <div className={classes.stats}>
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
                  "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                    top: "4px",
                    fontSize: "16px",
                    position: "relative",
                    marginRight: "3px",
                    marginLeft: "3px"
                }}}>
                Students Recieving Free Lunch
                  
                </Typography>
               </div>
              </CustomCardFooter>
             
            </CustomCard>
        </Grid>
    </Grid> 
            
     
     {/* </Grid> */}
    
     <Grid container>
     
     <CustomCard>
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
                <div className={classes.stats}>
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
            </CustomCard>
            </Grid>
            </Grid>
     </Grid>
 
//  </Grid>
//  </Grid>   
//  </Grid> 
//  </Grid>
    )
  }
}

Virginia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles ({styles}) (Virginia);
