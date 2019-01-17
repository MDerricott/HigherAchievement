import React from "react";
import {
  BrowserRouter as Router,
  Route,

  

} from "react-router-dom";
import Login from './Login'


function PrivateRoute({ props, isAuth, component: Component, ...rest }) {
    console.log(props)
    return (
      <Route
        {...rest}
        render={props =>
          props.isAuth ? (
            <Component {...props} />
          ) : (
            // <Redirect
            //   to={{
            //     pathname: "/"",
            //     state: { from: props.location }
            //   }}
            // />
            <Login />
          )
        }
      />
    );
  }
  

  export default PrivateRoute