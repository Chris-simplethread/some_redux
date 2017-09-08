import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import {addTodo} from './actions';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      console.log('Dispatching added todo');
      dispatch(addTodo(ownProps.onClick));
    }
  }
}

const ConnectedToDoInput = connect(
    null,
    mapDispatchToProps
)(ToDoInput)



export default class ToDoContainer extends Component {

    captureTodoSubmission(e) {
        console.log('Capruted!!!');
    }

  render() {
      const {store} = this.props;
      console.log('>>>', this.store, store);
    return (
      <div className="todoContainer">
        <h1>Todo List</h1>
        <span>{store}</span>
        <ConnectedToDoInput onClick={this.captureTodoSubmission} />
        <ToDoList todos={ ['thing'] } />
      </div>
    )
  }
}

