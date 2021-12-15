import React, { Component } from "react";

class Reacttest extends Component {
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }
  render() {
    return <div></div>;
  }
}

export default Reacttest;
