import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import { connect } from 'react-redux';
import setUser from '../actions/user';

class InputComponent extends Component {
  render() {
    const { Search } = Input
    const { setCurrentUser } = this.props
    return (
      <Row>
        <Col span={9} />
        <Col span={6}>
          <Search
            placeholder="Enter github account"
            enterButton="Search"
            size="large"
            onSearch={value => setCurrentUser(value)}
          />
        </Col>
        <Col span={9} />
      </Row>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => {
    dispatch(setUser(user));
  },
});

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);
