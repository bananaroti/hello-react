// import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";
import ErrorBoundary from "./ErrorBoundary";
import LifeCycleSample from "./LifeCycleSample";
import React, { Component } from "react";

// import EventPractice from "./EventPractice";
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import ValidationSample from "./ValidationSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        {/* <MyComponent name={"React"} favoriteNumber={13}>리액트</MyComponent> */}
        {/* <Say></Say> */}
        {/* <EventPractice></EventPractice> */}
        {/* <ValidationSample></ValidationSample> */}
        {/* <ScrollBoxref={(ref) => {this.scrollBox = ref;}}></ScrollBoxref=> */}
        {/* <IterationSample></IterationSample> */}
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
