import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// core components
const container = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
  };
  
  const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
  };
  
  const footerStyle = {
    block: {
      color: "inherit",
      padding: "15px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block",
      ...defaultFont,
      fontWeight: "500",
      fontSize: "12px"
    },
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: "0",
      fontSize: "14px",
      float: "right!important"
    },
    footer: {
      bottom: "0",
      borderTop: "1px solid #e7e7e7",
      padding: "15px 0",
      ...defaultFont
    },
    container,
    a: {
      color: "primary",
      textDecoration: "none",
      backgroundColor: "transparent"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto"
    }
    
  };

function Footer({ ...props }) {
  const { classes } = props;

  return (
      <div style={{backgroundColor: "#62BB46", height:75}} >

      
      <div >
    
     
    <footer className={classes.footer} style={{backgroundColor: "#62BB46"}}>
      <div className={classes.container}  style={{backgroundColor: "#62BB46"}}>
        <div className={classes.left} style={{backgroundColor: "#62BB46"}}>
          <List className={classes.list} style={{backgroundColor: "#62BB46"}}>
          <ListItem className={classes.inlineBlock}>
              <Link to="/national"
                    style={{ textDecoration: 'none' }}>
                <Button size="small" className={classes.button}>
                    National
                </Button>
              </Link>
            </ListItem>
{/*             
            <ListItem className={classes.inlineBlock}>
              <Link to="/dcmetro"
                    style={{ textDecoration: 'none' }}>
                <Button size="small"  className={classes.button}>
                  DC Metro
                </Button>
              </Link>
            </ListItem> */}
          
            <ListItem className={classes.inlineBlock}>
              <Link to="/baltimore"
              style={{ textDecoration: 'none' }}>
                <Button size="small"  className={classes.button}>
                  Baltimore
                 </Button>
              </Link>
            </ListItem>

            <ListItem className={classes.inlineBlock}>
              <Link to="/richmond"
              style={{ textDecoration: 'none' }}>
                <Button size="small"  className={classes.button}>
                  Richmond
                </Button>
              </Link>
            </ListItem>


            <ListItem className={classes.inlineBlock}>
              <Link to="/pittsburgh"
              style={{ textDecoration: 'none' }}>
                <Button size="small"  className={classes.button}>
                  Pittsburgh
                </Button>
              </Link>
            </ListItem>
          </List>
        </div >
       
      </div>
    </footer>
    </div>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
