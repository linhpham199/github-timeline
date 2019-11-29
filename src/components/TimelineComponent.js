import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRepos from '../actions/repo';

class TimelineComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
    }
  }

  componentDidMount() {
    const { fetchAllRepos } = this.props
    fetchAllRepos()
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props
    if (user !== prevProps.user) {
      this.onUpdate(user)
    }
  }

  onUpdate(user) {
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    return (
      <div>
        This is timeline of {user}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllRepos: () => {
    dispatch(fetchRepos());
  },
});

const mapStateToProps = state => ({
  user: state.user.account,
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineComponent);
