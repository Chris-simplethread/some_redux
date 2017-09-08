import React, {Component} from 'react';

export default class TodoInput extends Component {
  static propTypes = {
  }

  render() {
    return (
        <div className="todoInput">
        <input type="text" ref={node => {this.input = node;}} />
        <button onClick={this.props.onClick}>Add</button>
        </div>
    )
  }
}