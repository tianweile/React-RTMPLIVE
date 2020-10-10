import React, { Component } from "react";
import Navheader from "../../../../commponents/Navheader";
export default class Layout extends Component {
  render() {
    return (
      <div>
           <Navheader></Navheader>
        {this.props.children}
      </div>
    );
  }
}