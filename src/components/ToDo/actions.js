import TODO from './const.js';

let nextToDoId = 0;

export const addTodo = (text) => ({
  type: TODO.ADD,
  id: nextToDoId++,
  text
});
