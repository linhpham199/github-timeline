import React, { Component } from 'react';
import { Input } from 'antd';

class InputComponent extends Component {

  render() {
    const { Search } = Input
    return (
      <div>
        <Search
          placeholder="Enter github account"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default InputComponent;