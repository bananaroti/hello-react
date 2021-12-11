import React, { useRef } from "react";
import ScrollBox from "./ScrollBox";
// import EventPractice from "./EventPractice";
// import MyComponent from "./MyComponent";
// import Say from "./Say";
// import ValidationSample from "./ValidationSample";

const App = () => {
  return (
    <div>
     {/* <MyComponent name={"React"} favoriteNumber={13}>리액트</MyComponent>
      <Say></Say>
      <EventPractice></EventPractice>
      <ValidationSample></ValidationSample> */}
      <ScrollBox useRef={useRef}></ScrollBox>
    <button onClick={''}>Button</button>
    </div>
  )};

export default App;
