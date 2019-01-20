import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
// import typographyStyle from "assets/jss/material-dashboard-react/components/typographyStyle.jsx";

import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor
  } from "./material-dashboard-react";
  
  const typographyStyle = {
    defaultFontStyle: {
      ...defaultFont,
      fontSize: "14px"
    },
    defaultHeaderMargins: {
      marginTop: "20px",
      marginBottom: "10px"
    },
    quote: {
      padding: "10px 20px",
      margin: "0 0 20px",
      fontSize: "17.5px",
      borderLeft: "5px solid #eee"
    },
    quoteText: {
      margin: "0 0 10px",
      fontStyle: "italic"
    },
    quoteAuthor: {
      display: "block",
      fontSize: "80%",
      lineHeight: "1.42857143",
      color: "#777"
    },
    mutedText: {
      color: "#777"
    },
    primaryText: {
      color: primaryColor
    },
    infoText: {
      color: infoColor
    },
    successText: {
      color: successColor
    },
    warningText: {
      color: warningColor
    },
    dangerText: {
      color: dangerColor
    }
  };

function Danger({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Danger);
