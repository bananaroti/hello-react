import React from "react";
import { useState } from "react/cjs/react.development";

const EventPractice = () => {
  const [message, setMessage] = useState('');

  function handleChange(e) {
    setMessage(e.target.value);
  }

  function handleClick() {
    alert(message);
    setMessage('');
  }
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={(e) => {
          handleChange(e);
        }}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
