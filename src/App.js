// import ScrollBox from "./ScrollBox";
// import IterationSample from "./IterationSample";
import LifrCycleSample from "./LifrCycleSample";
import React, { Component } from "react";

// import EventPractice from "./EventPractice";
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import ValidationSample from "./ValidationSample";

class App extends Component {
  render() {
    return (
      <div>
        {/* <MyComponent name={"React"} favoriteNumber={13}>리액트</MyComponent> */}
        {/* <Say></Say> */}
        {/* <EventPractice></EventPractice> */}
        {/* <ValidationSample></ValidationSample> */}
        {/* <ScrollBoxref={(ref) => {this.scrollBox = ref;}}        ></ScrollBoxref=> */}
        {/* <IterationSample></IterationSample> */}
        <LifrCycleSample></LifrCycleSample>
      </div>
    );
  }
}

export default App;
