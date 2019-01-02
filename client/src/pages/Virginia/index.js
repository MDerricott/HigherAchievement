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
import SchoolIcon from '@material-ui/icons/School';
import Card from '@material-ui/core/Card';
import { ButtonBase } from "@material-ui/core";



// import { csv } from "d3-fetch"

// console.log(map)
// console.log(data[1][1])



const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
  padding: 10
}
const sidebarStyles = {
  width: "100%",
  maxWidth: 300,
  margin: "0 auto",
  padding: 10

}
const otherScale = scaleLinear()
  .domain([0,16.3])
  .range(["#FBE9E7","#FF5722"])


const colorScale = scaleLinear()
  .domain([0,10000,50000,500000,120000])
  .range(["#ffeee8","#ffab90","#ff5722","#993414","#331106"])

class AlbersUSA extends Component {
  constructor() {
    super()
    this.state = {
      poverty: [],
      viewBox: "2100 0 980 751",
      radius: 0,
      zoom: 9,
      circle: "visible",
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
    const centerId = evt.target.getAttribute("data-city")
    // const center = this.state.centers[centerId]
    this.setState({
      viewBox: "6200 -350 980 751",
      circle: "hidden",
      zoom: 24,
      radius: 9,
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
    })
  }

  componentDidMount() {
        this.setState({ poverty: data })

  }


  render() {
    const { poverty } = this.state
    return (
     <Grid container > 
     <Grid container height={100}> 
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
     </Grid>
     <Grid container>
     
        <Grid container xs={12} sm={12}>
        
        
        

      <Paper style={wrapperStyles} elevation={1}>
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
                    <Tooltip title={`${statePoverty[0]} estimated in poverty ${this.useCommas(statePoverty[1])} the HS dropout rate is ${(statePoverty[5]? statePoverty[5] + "%": "unknown")}`} placement="top" disableFocusListener key={i}> 
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
                        pressed: {
                          ill: "#607D8B",
                          stroke: "#607D8B",
                          strokeWidth: 0.05,
                          outline: "none",
                        },
                      }}
                    />
                     </Tooltip>
                  )
                }
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
      
      
      
      </Grid>
            <Grid container xs={12} style={wrapperStyles}>
               <Grid item>
                <Paper >
                     <a class="twitter-timeline" data-width="400" data-height="300" data-theme="light" href="https://twitter.com/VDOE_News?ref_src=twsrc%5Etfw">Tweets by VDOE_News</a> 

                </Paper>

      
                </Grid>
                <Grid item>
                    <ButtonBase focusRipple>
                      <Card >
                        <Grid container xs={12} >Dropout %</Grid>
                        <Grid container xs={12}>
                        <SchoolIcon 
                       size = "large"
                       style={{
                         height: 100,
                         width: 100
                       }}
                       />
                       </Grid> 
                      </Card>
                      </ButtonBase>
                </Grid>
            </Grid>
     
      </Grid>
      </Grid>
    )
  }
}

export default AlbersUSA
