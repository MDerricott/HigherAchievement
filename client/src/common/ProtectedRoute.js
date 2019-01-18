import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,

  

} from "react-router-dom";



function PrivateRoute({ isAuth, component: Component, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={props =>
          props.isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
           
          )
        }
      />
    );
  }
  

  export default PrivateRoute