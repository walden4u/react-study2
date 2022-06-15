import React, { Component } from 'react';
import MyComponentC from './component/MyComponentC';

class AppC extends Component {
  render() {
    const name = '리액트클래스';
    return (
      <>
        <h1>Hello {name}</h1>  
        <MyComponentC name='또치' />
        <MyComponentC />
        <MyComponentC>칠드런</MyComponentC>
      </>
    );
  }
}

export default AppC;
