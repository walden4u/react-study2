import React from 'react';
import P

const MyComponent = ({name, children}) => {
//   const { name } = props;
  return (
    <>
      <h2>나의 새롭고 멋진 컴포넌트</h2>
      {/* <h2>저의 이름은 {props.name} 입니다.</h2> */}
      <h2>저의 이름은 {name} 입니다.</h2>
      <h2>childeren 값은 {children} 입니다.</h2>
    </>
  );
};

MyComponent.defaultProps = {
  name: '디폴트이름',
};

export default MyComponent;
