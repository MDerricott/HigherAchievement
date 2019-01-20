import React from 'react';
import Danger from "./Danger";
import Card from "./CustomCard";
import CardHeader from "./CardHeader";
import CardIcon from "./CardIcon";
// import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "./CardFooter";
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import PropTypes from "prop-types";
// react plugin for creating charts
// import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import ContentCopy from "@material-ui/icons/ContactMail";
import Grid from '@material-ui/core/Grid'



const successColor = "#4caf50"


const dashboardStyle = {
    successText: {
      color: successColor
    },
    upArrowCardCategory: {
      width: "16px",
      height: "16px"
    },
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
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
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
    },
    cardTitleWhite: {
      color: "#FFFFFF",
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
  

  class Testing extends React.Component {
    
    render(){
    const { classes } = this.props;
    return (
      <div >
    <Grid container spacing={16}>  
      <Grid item sm={4}> 
     <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <ContentCopy/>
                      </Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                    Get more space
                  
                </div>
              </CardFooter>
            </Card>
     </Grid>  
     <Grid item sm={4}>  
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <ContentCopy/>
                      </Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                    Get more space
                  
                </div>
              </CardFooter>
            </Card>
        </Grid>
        <Grid item sm={4}>  
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>
                      <ContentCopy/>
                      </Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Used Space</p>
                <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
          
                    Get more space
                  
                </div>
              </CardFooter>
            </Card>
        </Grid>
    </Grid> 
      </div>
    );
  }
}
  Testing.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(dashboardStyle)(Testing);
  
 
  
 