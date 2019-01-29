import React from 'react';
import { Typography } from '@material-ui/core';

const wrapperStyles = {
  width: "80%",
  maxWidth: 1000,
  height: 1200,
  margin: "0 auto",
  padding: 3,

}
function AdminDashboard (props) {
 
    return (
      <div style={{wrapperStyles}}>
      <div style={{width:800, margin: "0 auto", height: 1200}}>
      <br></br>
      <br></br>
      <br></br>
   <Typography variant="h4"> APIs used </Typography>
   <br></br>
   - <strong>US Census Topography Data</strong> - Topographyfiles were combined with Mapshapper and exported to TopoJSON
   <br></br>
   - <strong>US Census Poverty Data</strong> -  Used for TopoJSON data to colorize the maps
   <br></br>
   - <strong>Salesforce User Interface API</strong> - Used to connect to a SF scratch org
   <br></br>
   <br></br>
   <br></br>
   <Typography variant="h4"> New Libraries </Typography>
   <br></br>
   - <strong> Wrapper</strong> - for Salesforce User Interface API
   <br></br>
   - <strong>Material-UI</strong> - User Interface design
   <br></br>
   - <strong>Chartjs</strong> - to create charts
   <br></br>
   - <strong>React-Simple-Maps</strong> - Wrapper for d3 map charts
   <br></br>
   - <strong>React-CSV</strong> - to download a table

   <br></br>
   <br></br>
   <br></br>
   <Typography variant="h4"> Other Libraries Used </Typography>
   <br></br>
   - <strong>React</strong> 
   <br></br>
   - <strong>MongoDB</strong>
   <br></br>
   - <strong>Moongoose</strong>
   <br></br>
   - <strong>React-Router-Dom</strong>
   <br></br>
   - <strong>Express</strong>
   <br></br>
   - <strong>Axios</strong>
  

      </div>

      <br></br>
</div>
    );
  }
  
 
  
  export default AdminDashboard;
