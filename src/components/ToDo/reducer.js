import TODOS from './const.js';

export default function todos(state=[], action) {
  switch (action.type) {
    case TODOS.ADD:
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        user: action.user,
        completed: false
      }
    ];
    default:
      return state;
  }
}
