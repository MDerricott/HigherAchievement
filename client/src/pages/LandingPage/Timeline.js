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
       Founded by a teacher, Greg Gannon, at Gonzaga College High School
      </p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2009</h2>
      <p>Expanded to Baltimore, MD</p>
    </Card>
  </div>

<div className="container left">
    <Card className="content">
      <h2>2011</h2>
      <p>Expand to Richmond, VA</p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2012</h2>
      <p>Expanded to Pittsburgh, PA</p>
    </Card>
  </div>
  <div className="container left">
    <Card className="content">
      <h2>2013</h2>
      <p>Published landmark randomized impact study by MDRC</p>
    </Card>
  </div>
  <div className="container right">
    <Card className="content">
      <h2>2015</h2>
      <p>Won Validation i3 grant for $12 million - biggest investment ever by U.S. Department of Eduction for an out-of-school time program</p>
    </Card>
  </div>
  </div>
    )

    }



}
export default Timeline