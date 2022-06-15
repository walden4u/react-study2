import React, { Component } from 'react';

class MyComponentC extends Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h2>나의 새롭고 멋진 컴포넌트</h2>
        <h2>나의 이름은 {this.props.name} 입니다.</h2>   
        <h2>나의 이름은 {name} 입니다.</h2> 
        <h2>childeren 값은 {this.props.children} 입니다.</h2>
      </>
    );
  }
}

MyComponentC.defaultProps = {
  name: '기본이름'
};

export default MyComponentC;