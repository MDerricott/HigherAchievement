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
import AppleBase from "./components/AffilateButton/"
import svg from "../../images/apple.svg"
import AffilateButton from './components/AffiliateButtons'
import Grid from '@material-ui/core/Grid';




const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

console.log(data)
const colorScale = scaleLinear()
  .domain([7,20])
  .range(["#FBE9E7","#FF5722"])

class National extends Component {
  constructor() {
    super()
    this.state = {
        poverty: [],
        center: [0,20],
        zoom: 1,
        radius: 0,
        displayText: "hide",
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
  }



  handeAffiliateSelection() {
    this.setState({
      center: [-77.0369, 38.9072],
      zoom: 6,
      radius: 8,
      displayText: "affilateMarkers",
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
    })
  }

componentDidMount() {
    this.setState({ poverty: data })

}

   

  render() {

    const { poverty, mapStrokeWidth} = this.state

    return (
      <Grid container justify="center">
      <div style={wrapperStyles}>
    
          <button>  
            <AppleBase />
          </button>
          {svg}
          <img src={svg} height={100} alt="apple"/>

            <button
                key={1}
                className="btn px1"
                data-city={1}
                onClick={this.handeAffiliateSelection}
                >
                Check out our affiliates
              </button>
          
          <button onClick={this.handleReset}>
            { "Reset" }
          </button>
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
                        pressed: {
                          fill: "#FF5722",
                          stroke: "#ffffff",
                          strokeWidth: {mapStrokeWidth},
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
        <div>
<Grid container width="100%" spacing={8}>
                
                  
                    <Grid item sm={3}>
                      
                        <AffilateButton key={1} affilate="DC Metro"  />
                    </Grid>
                    
                 
                    <Grid item sm={3}>
                        <AffilateButton key={2} affilate="Baltimore"  />
                    </Grid>
                  
                 
                

               
                    <Grid item sm={3}>
                        <AffilateButton key={3} affilate="Richmond"  />
                    </Grid>
                   
                    <Grid item sm={3}>
                        <AffilateButton key={4} affilate="Pittsburgh"  />
                    </Grid>
                    
                



</Grid>
          
        </div>
      </div>
      </Grid>
    )
  }
}

export default National
