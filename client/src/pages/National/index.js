import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import map from './data/states.json'
import data from './data/data'
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom";
import AffilateButton from './components/AffiliateButtons'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardFooter from "./components/CardFooter";
import LocalOffer from "@material-ui/icons/LocalOffer";
import ZoomIn from '@material-ui/icons/ZoomIn'
import Button from '@material-ui/core/Button'; 
import ZoomOut from '@material-ui/icons/ZoomOutMap'
// import Footer from '../../common/Footer'





const wrapperStyles = {
  width: "100%",
  maxWidth: "70%",
  margin: "0 auto",
}
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

const colorScale = scaleLinear()
  .domain([7,20])
  .range(["#ffffff","#006595"])

class National extends Component {
  constructor() {
    super()
    this.state = {
        expand: false,
        poverty: [],
        center: [0,20],
        zoom: 1,
        radius: 0,
        displayText: "hide",
        zoomedIn: false,

        mapStrokeWidth: .5,
        affiliates: [
            {markerOffset: -10, name: "Baltimore", route: "baltimore", coordinates: [-76.6122 , 39.2904]},
            {markerOffset: -10, name: "Washington DC", route: "dcmetro", coordinates: [-77.0369, 38.9072]},
            {markerOffset: -10, name: "Richmond", route: "richmond", coordinates: [-77.4360, 37.5407]},
            {markerOffset: -10, name: "Pittsburgh", route: "pittsburgh", coordinates: [-79.9959, 40.4406]},
        ]
    }

    this.handeAffiliateSelection = this.handeAffiliateSelection.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleExpandClick = this.handleExpandClick.bind(this)
  }


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  handeAffiliateSelection() {
    this.setState({
     
      center: [-77.0369, 38.9072],
      zoom:  6 ,
      radius:8 ,
      zoomedIn: true,
      displayText:  "affilateMarkers" ,
      mapStrokeWidth: 0,
    })
  }
  handleReset() {
    this.setState({
      center: [0,20],
      zoom: 1,
      radius: 0,
      displayText: "hide",
      mapStrokeWidth: .5,
      zoomedIn: false,
    })
  }

componentDidMount() {
    this.setState({ poverty: data })

}

   

  render() {
    const { classes } = this.props;
    const { poverty, mapStrokeWidth, zoomedIn } = this.state

  return (
    <Grid container justify="center">
    
    <div style={wrapperStyles}>
                
          <div>
          
              <Card   stat icon rounded elevation={4} style={{backgroundColor: "#000000", width: "50%", minHeight: 75, display: "inline-block", position: "relative", top:50, left:20}}> 
                  <Typography
                    variant="h4"
                    style={{padding: 15, color:"#ffffff"}}

                  > 
                    National Poverty Data
                  </Typography>
              </Card>
        
          
          <Card className={classes.card} elevation={2} > 
               
                  <Grid container justify="flex-end"> 
                    <Grid item  sm={12} md={3} style={{height: 75}}> 
                      
                    </Grid>
                    <Grid item sm={12} md={3}>
                      <div className="float-left">
                        <CardActions className={classes.actions} disableActionSpacing>
                                    { (zoomedIn ? 
                                          <Button
                                              className={classes.actions}
                                              size="large"
                                              onClick={this.handleReset}
                                          >
                                              <ZoomOut fontSize="large"/> 
                                              <Typography> National Map </Typography>
                                          </Button>
                                          : 
                                          <Button 
                                              size="large"
                                              onClick={this.handeAffiliateSelection}
                                              className="float-right"
                                              
                                          >
                                              <ZoomIn  fontSize="large"/>
                                              <Typography> Our Affilates </Typography>
                                          </Button>
                                      )}

                        </CardActions>
                        </div>   
                    
                    </Grid>

                  </Grid>
                    
               
                    
                    

            

            {/* <CardActionArea>
              <Grid container>
                <Grid item sm={9}>

                </Grid>
                <Grid item sm={3} >
                  <Grid container justify="right">
                      <ZoomOut/>
                  </Grid>
                  
                </Grid>
              </Grid>

            
            </CardActionArea>  */}

            <Grid container justify="center">
              <Grid item xs={12}>
                <ComposableMap
                      projection="albersUsa"
                      projectionConfig={{
                          scale: 1000,
                      }}
                      width={980}
                      height={551}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    > 
                  <ZoomableGroup disablePanning zoom={this.state.zoom} center={this.state.center} >
                      <Geographies geography={map} disableOptimization>
                          {(geographies, projection) =>
                              geographies.map((geography, i) => {
                                  const statePoverty = poverty.find(s =>
                                      s[0] === geography.properties.NAME_1
                                  ) || {}
                            return (
                                <Tooltip title={`${statePoverty[0]} estimated poverty rate ${statePoverty[1]}`} placement="top" disableFocusListener key={i}> 
                                <Geography
                                    key={`state-${geography.properties.ID_1}`}
                                    cacheId={`state-${geography.properties.ID_1}`}
                                    round
                                    geography={geography}
                                    projection={projection}
                                    style={{
                                      default: {
                                      fill: colorScale(+statePoverty[1]),
                                      stroke: "#ffffff",
                                      strokeWidth: {mapStrokeWidth},
                                      outline: "none",
                                    },
                                    hover: {
                                      fill: "#607D8B",
                                      stroke: "#ffffff",
                                      strokeWidth: {mapStrokeWidth},
                                      outline: "none",
                                    },
                        // pressed: {
                        //   fill: "#FF5722",
                        //   stroke: "#ffffff",
                        //   strokeWidth: {mapStrokeWidth},
                        //   outline: "none",
                        // },
                                  }}
                                />
                              </Tooltip>
                            )}
                          )}
                      </Geographies>
                          <Markers>
                              {this.state.affiliates.map((affiliate, i) => (
                                <Marker
                                    key={"marker" + i}
                                    marker={affiliate}
                                    style={{
                                        default: { fill: "#00695f" },
                                        hover: { fill: "#FFFFFF" },
                                        pressed: { fill: "#FF5722" },
                                    }}
                                  >
                                      <Link to={`/${affiliate.route}/`} >
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
                                        </Link>
                                            <text
                                                className={this.state.displayText}
                                                textAnchor="middle"
                                                y={affiliate.markerOffset}
                                                style={{
                                                    fontFamily: "Roboto, sans-serif",
                                                    fill: "#607D8B",
                                                }}
                                            >
                                                {affiliate.name}
                                            </text>
                                </Marker>
                               ))}
                          </Markers>  
                 </ZoomableGroup>
              </ComposableMap>
            </Grid>
        </Grid>
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
      </Card >
      
      </div>
       <div >
        <div style={{height:100 , width:"100%"}}>
            <br />
            <br />
              <Typography> About National Poverty Data </Typography>
        </div>

      <Card square elevation={0} style={{padding:5}} justifyContent="center">
          <Grid container width="100%" spacing={16} justify="center" >
              <Grid item sm={3}>
                  <Link to="/dcmetro" ><AffilateButton key={1} affilate="DC Metro" imageURL={"https://higherachievement.org/wp-content/uploads/2018/12/IMG_6971-e1545143799286.jpg"} /></Link>
              </Grid>
              <Grid item sm={3}>
                  <Link to="/baltimore"><AffilateButton key={2} affilate="Baltimore" imageURL={"https://higherachievement.org/wp-content/uploads/2018/04/Baltimore-scholar-studying-banner-photo-1024x682.jpg"}  /> </Link>
              </Grid>
              <Grid item sm={3}>
              <Link to="/richmond"> <AffilateButton key={3} affilate="Richmond"  imageURL={"https://higherachievement.org/wp-content/uploads/2016/10/Richmond-Scholars.jpg"}  /> </Link>
              </Grid> 
              <Grid item sm={3}>
              <Link to="/pittsburgh"> <AffilateButton key={4} affilate="Pittsburgh" imageURL={"https://higherachievement.org/wp-content/uploads/2018/09/One-World-Education.jpg"} /> </Link>
              </Grid>
            </Grid>
        </Card>   
        </div>
      </div>
    
      </Grid>
    )
  }
}
National.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles (styles) (National);