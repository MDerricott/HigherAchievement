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
// import { csv } from "d3-fetch"

// console.log(map)
// console.log(data[1][1])

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}
// const markers = [
//   { markerOffset: -5, name: "Henderson", coordinates: [-77.4466, 37.5963] },
//   { markerOffset: -5, name: "Boushall", coordinates: [-77.4697, 37.4729] },
//   { markerOffset: 5, name: "Wilder", coordinates: [-77.4216, 37.6205] },
//   { markerOffset: 5, name: "Binford", coordinates: [-77.4622, 37.5491] },
//   { markerOffset: 5, name: "Alexandria", coordinates: [-77.1108, 38.8265] },
// ]

const colorScale = scaleLinear()
  .domain([669,1148433])
  .range(["#FBE9E7","#FF5722"])

class AlbersUSA extends Component {
  constructor() {
    super()
    this.state = {
      poverty: [],
      viewBox: "2100 0 980 751",
      radius: 3,
      zoom: 9,
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
  }
  

  handleCenterSelection(evt) {
    const centerId = evt.target.getAttribute("data-city")
    // const center = this.state.centers[centerId]
    this.setState({
      viewBox: "6200 -350 980 751",
      zoom: 24,
      radius: 9,
    })
  }

  handleReset() {
    this.setState({
      viewBox: "2100 0 980 751",
      radius: 3,
      zoom: 9,
    })
  }

  componentDidMount() {
    // csv("/static/poverty.csv")
    //   .then(poverty => {
        this.setState({ poverty: data })
      // })
  }


  render() {

    const { poverty } = this.state

    return (
      <div>
        <div style={wrapperStyles}>
          
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
        </div>





  




      <div style={wrapperStyles}>
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
                    <Tooltip title={`${statePoverty[0]} estimated in poverty ${statePoverty[1]}`} placement="top" disableFocusListener key={i}> 
                    <Geography
                      key={`state-${geography.properties.GEOID}`}
                      cacheId={`state-${geography.properties.GEOID}`}
                      round
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: colorScale(+statePoverty[1]),
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
      </div>
      </div>
    )
  }
}

export default AlbersUSA
