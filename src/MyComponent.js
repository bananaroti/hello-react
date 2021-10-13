import React from "react";
import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNumber}) => {
  return (
    <div>
      <h3>안녕하세요, 제 이름은 {name}입니다.</h3>
			<br /><p>Childen 값은 {children}입니다.</p>
      <br /><p>제가 제일 좋아하는 숫자는 {favoriteNumber}입니다.</p>
    </div>
  );
};

MyComponent.defaultProps = { // {props.~~} 기본내용 설정
  name: "아무개",
};

MyComponent.propTypes = {
	name : PropTypes.string,
  favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;
