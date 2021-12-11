import React, { useRef } from "react";

const ScrollBox = () => {
  const refBox = useRef(null);
  const scrollToBottom = () => {
    refBox.current.focus();
    const { scrollHeight, clientHeight } = refBox;
    refBox.scrollTop = scrollHeight - clientHeight;
  };
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };
  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  return (
    <div style={style} ref={refBox}>
      <div style={innerStyle}></div>
    </div>
  );
};

export default ScrollBox;
