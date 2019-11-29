import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchRepos from '../actions/repo';

class TimelineComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: props.user,
      repos: props.repos,
    }
  }

  componentDidMount() {
    const { fetchAllRepos } = this.props
    fetchAllRepos()
  }

  componentDidUpdate(prevProps) {
    const { user, repos, fetchAllRepos } = this.props
    if (user !== prevProps.user) {
      this.onUpdateUser(user)
      fetchAllRepos()
    }

    if (repos !== prevProps.repos) {
      this.onUpdateRepos(repos)
    }
  }

  onUpdateUser(user) {
    this.setState({ user })
  }

  onUpdateRepos(repos) {
    this.setState({ repos })
  }

  render() {
    const { user, repos } = this.state
    console.log(repos)
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
  repos: state.repos.reposList,
})

export default connect(mapStateToProps, mapDispatchToProps)(TimelineComponent);
