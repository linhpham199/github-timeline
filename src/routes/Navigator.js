import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Menu } from 'antd';
import TimelineComponent from '../components/TimelineComponent';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Menu mode="horizontal">
          <Menu.Item><Link to="/timeline">TIMELINE</Link></Menu.Item>
        </Menu>
        <Switch>
          <Route path="/timeline">
            <TimelineComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Navigator;
