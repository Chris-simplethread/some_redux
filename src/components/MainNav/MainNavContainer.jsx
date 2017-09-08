import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MainNavContainer extends Component {
  static propTypes = {
    users: PropTypes.array,
    currentUser: PropTypes.number,
  }

  render() {
    const users = this.props.users;
    return (
      <nav>
        {users.map((user, i) => <li key={user+i}>{user}</li>)}
      </nav>
    )
  }
};
