import React from 'react';
import Grid from "@material-ui/core/Grid";
import grad from '../../images/grad.png';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import { relative } from 'path';



function AboutUs (props) {
 
    return (
      <div >
        <Paper elevation={0}  color="primary">
       <Grid container style={{backgroundColor: "#62BB46"}} > 
          {/* <Grid item sm={3}>
          <div style={{
            padding: 20,
            paddingRight: 10,
            position: "relative",
            top: 50
          
          }
        }>
            <img src={grad}  height={150}/> 
          </div>
            
       
          </Grid> */}
          <Grid item sm={12}>

            <Typography
              paragraph
              variant="subtitle1"
              style={{
                  padding: 40,
                  paddingTop: 40,
                  paddingRight: 40,
                  color: "#ffffff"
                }}
              >
               <br/>
              <span> 

               <Typography variant="h4" color="inherit"> <strong> How Higher Achievement Works   </strong> </Typography> 
              </span>
              <br/>

                Higher Achievement believes that you are a talented, smart, and capable student. If you work hard and have the right opportunities, you will succeed. We ask students like you to commit to 650 additional hours each year for four years.
                <br/>
                <br/>
                <span> 

               <Typography color="inherit" variant="h4"> <strong> Afterschool Academy   </strong> </Typography> 
              </span>
              <br/>

                Receive homework coaching, an elective, dinner, and intensive small-group academic mentoring in math, literature, and seminars.
                <br/>

                <br/>
                <span> 

                <Typography  color="inherit" variant="h4"> <strong> Summer Academy   </strong> </Typography> 
                </span>
                <br/> 
                Take classes in math, literature, science and social studies, plus field trips and college visits.
                <br/>
                <br/>
                <span> 

                <Typography color="inherit" variant="h4"> <strong> Follow-Through   </strong> </Typography> 
                </span>
                <br/>
              
                Identify and successfully transition to your best high school or program, while receiving continued support from staff and mentors.
            </Typography>

          </Grid>
       </Grid>
       
</Paper>
      </div>
    );
  }
  
 
  
  export default AboutUs;
