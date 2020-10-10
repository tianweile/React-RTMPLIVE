import React, { Component } from "react";
import { Carousel } from "antd";
import "./home.less";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dotPosition: "bottom",
    };
  }
  render() {
    return (
      <Carousel autoplay dotPosition={this.state.dotPosition}>
        <div className="home-image">
          <h3>
            <img src={require("../../../../images/homepage1.png")} alt="" />
          </h3>
        </div>
        <div className="home-image">
          <h3>
            <img src={require("../../../../images/homepage2.png")} alt="" />
          </h3>
        </div>
      </Carousel>
    );
  }
}
