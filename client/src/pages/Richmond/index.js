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








const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  padding: 10
}


const otherScale = scaleLinear()
  .domain([0,16.3])
  .range(["#FBE9E7","#FF5722"])


const colorScale = scaleLinear()
  .domain([0,10000,50000,500000,120000])
  .range(["#ffeee8","#ffab90","#ff5722","#993414","#331106"])

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
      viewBox: "2100 0 980 751",
      radius: 0,
      zoom: 9,
      circle: "visible",
      zoomedIn: false,
      grad: true,
      test: "test",
      centers: [
        { markerOffset: -5, name: "Henderson", coordinates: [-77.4466, 37.5963] },
        { markerOffset: -5, name: "Boushall", coordinates: [-77.4697, 37.4729] },
        { markerOffset: 5, name: "Wilder", coordinates: [-77.4216, 37.6205] },
        { markerOffset: 5, name: "Binford", coordinates: [-77.4622, 37.5491] },
        { markerOffset: 5, name: "Alexandria", coordinates: [-77.1108, 38.8265] },
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
      viewBox: "6200 -350 980 751",
      circle: "hidden",
      zoom: 24,
      radius: 9,
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
      viewBox: "2100 0 980 751",
      radius: 0,
      circle: "visible",
      zoom: 9,
      zoomedIn: false,
    })
  }

  componentDidMount() {
        this.setState({ poverty: data })

  }


  render() {
    const { classes } = this.props;
    const { poverty , grad , zoomedIn} = this.state
    return (
     <Grid container justify="center" > 
            {/* <Grid container height={100}> 
                  <div>
                      <button
                        key={1}
                        className="btn px1"
                          data-city={1}
                onClick={this.handleCenterSelection}
                >
                Zoom
              </button>
         
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>

          <button
                key={2}
                className="b"
                data-city={2}
                onClick={this.handleDropout}
                >
               Graduation
              </button>

              <button
                key={3}
                className="c"
                onClick={this.handlePoverty}
                >
              Poverty
              </button>
         
         

        </div>
     </Grid> */}
     <Grid container>
          <Grid container justify="center">
            <div> 
             <Card elevation={4} style={{backgroundColor: "#9E9E9E", width: "40%", minHeight: 50, display: "inline-block", position: "relative", top:50, left:20}}> 
                       {(grad ? 
                       <div>
                        <Typography
                        color="primary"
                        variant="h5"
                        style={{paddingLeft: 15, paddingTop: 5}}>
                          Virginia Drop Out Rates
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            style={{paddingLeft: 15, paddingBottom: 5}}>
                            The estimated % of all people living in poverty
                         </Typography>
                         </div> 
                          : 
                          <div>
                          <Typography
                          color="primary"
                          variant="h5"
                          style={{paddingLeft: 15, paddingTop: 5}}>
                          Virginia Poverty Rates
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="primary"
                            style={{paddingLeft: 15, paddingBottom: 5}}>
                            The estimated % of all people living in poverty
                         </Typography>
                        </div>
                       )}
              </Card>
           
              <Card className={classes.card} elevation={2} > 
                    <Grid container justify="flex-end"> 
                        <Grid item  sm={12} md={3} style={{height: 75}}> 
                      
                        </Grid>
                        <Grid item sm={12} md={7}>
                              <div className="float-left">
                                    <CardActions className={classes.actions} disableActionSpacing>
                                              
                                              
                                              
                                            {(zoomedIn
                                             ? 
                                            <Button
                                                // variant="contained"
                                                size="large"
                                                color={(grad ?  "primary" : null)}
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
                                                size="large"
                                                color={(grad ?  "primary" : null)}
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
                                                // variant="contained"
                                                size="large"
                                                color={(grad ?  "primary" : null)}
                                                onClick={this.handleDropout}
                                                
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
                                                size="large"
                                                color={(grad ?  null : "primary" )}
                                                onClick={this.handlePoverty}
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
                          </Grid>
                      <Paper style={wrapperStyles} elevation={0}>
                          <ComposableMap
                            projection="albersUsa"
                            projectionConfig={{
                                scale: 1000,
                            }}
                            width={980}
                            height={751}
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
                                              stroke: "#607D8B",
                                              strokeWidth: 0.05,
                                              outline: "none",
                                            },
                                            hover: {
                                              fill: "#607D8B",
                                              stroke: "#607D8B",
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
                                          <Tooltip title="test"  placement="top" disableFocusListener key={"ab" + i}> 
                                              <Marker
                                                key={"marker" + i}
                                                marker={center}
                                                style={{
                                                  default: { fill: "#00695f" },
                                                  hover: { fill: "#FFFFFF" },
                                                  pressed: { fill: "#FF5722" },
                                                }}
                                                >
                                              <circle
                                                className={this.state.circle}
                                                cx={0}
                                                cy={0}
                                                r={this.state.radius}
                                                style={{
                                                  stroke: "#00695f",
                                                  strokeWidth: 1,
                                                  opacity: 1,
                                                }}
                                                />
               
                                              </Marker>
                                          </Tooltip>
                                        ))}
                                  </Markers>  
            
                        </ZoomableGroup>
                        </ComposableMap>
                      </Paper>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <Typography
                              variant="subtitle2"
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
            </div>
            <Grid container  style={wrapperStyles}>
                 <Grid item>
                   <Paper >
                     <a className="twitter-timeline" data-width="400" data-height="300" data-theme="light" href="https://twitter.com/VDOE_News?ref_src=twsrc%5Etfw">Tweets by VDOE_News</a> 

                   </Paper>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
     
     </Grid>
     </Grid>
     </Grid>
    )
  }
}

Virginia.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles (styles) (Virginia);
