import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {addTodo} from './actions';

export default class ToDoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
    // dispatch: PropTypes.func.isRequired
  }

  addTodo(text) {
    const { dispatch } = this.props;
    dispatch(addTodo(this.input.value));
    this.input.value = '';
  }

  renderList(todos) {
    if (!todos) {
      return (<p>No todos for this user.</p>);
    }

    return (
      <ul>
        {todos.map((todo, i) =>
          <li key={todo+i}>{todo}</li>
        )}
      </ul>
    )
  }

  render() {
    const { todos } = this.props;
    return(
      <div className="todo-list">
        {this.renderList(todos)}
      </div>
    )
  }
}
