import React, { Component } from "react";
import ScrollBox from "./ScrollBox";
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
        <ScrollBox ref={ref=>{this.scrollBox=ref}}></ScrollBox>
        <button onClick={()=>{this.scrollBox.scrollToTop()}}>맨 위로</button>
        <button onClick={()=>{this.scrollBox.scrollToBottom()}}>맨 밑으로</button>
      </div>
    );
  }
}

export default App;
