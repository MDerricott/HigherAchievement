import React, { Component } from "react";
import API from "../../utils/API";
// import API from "../utils/API";

class Center extends Component {
    state = {
        center: {}
    
    };

    // componentDidMount() {
    //     API.getBook(this.props.match.params.id)
    //       .then(res => this.setState({ book: res.data }))
    //       .catch(err => console.log(err));
    //   }
    
componentDidMount (){
    API.getCenter(this.props.match.params.id)
        .then(res => {
            console.log("did dismount")
            this.setState({ center: res.data}
            )})
        .catch(err => console.log(err));
}

    render(){


        return(
            <div>
                {this.state.center.centerName}

            </div>
        )
    
        }
    
    

}
export default Center