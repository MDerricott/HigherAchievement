import React, { Component } from "react";
import Card from '@material-ui/core/Card';

class Timeline extends Component {
    state = {
        landing: {}
    };

    // componentDidMount() {
    //     API.getBook(this.props.match.params.id)
    //       .then(res => this.setState({ book: res.data }))
    //       .catch(err => console.log(err));
    //   }
render(){


    return(
<div className="timeline">
  <div className="container left">
    <Card className="content" elevation={1}>
      <h2>1975</h2>
      <p>
        Higher achievement Launch
      </p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2008</h2>
      <p>National Office</p>
    </Card>
  </div>
  <div className="container left">
    <Card className="content">
      <h2>2010</h2>
      <p>Baltimore Launched</p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2011</h2>
      <p>Richmond Launched</p>
    </Card>
  </div>

<div className="container left">
    <Card className="content">
      <h2>2012</h2>
      <p>Pittsbugh Launched</p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2016</h2>
      <p>i3 Grant</p>
    </Card>
  </div>
  </div>
    )

    }



}
export default Timeline