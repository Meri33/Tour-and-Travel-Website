import "./destination.css";

import { Component } from "react";

class DestinationData extends Component{
    render(){
        return(
           
         <div className={this.props.className}>
            <div className="des-text">
            <h2>
          {this.props.heading}
            </h2>
                <p>{this.props.text} </p>
            </div>

            <div className="images">
                <img className="image1" src={this.props.img1} alt="img" />
                <img className="image2" src={this.props.img2} alt="img"/>
            </div>
         </div>
        )
    }
}


export default DestinationData;