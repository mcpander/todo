/**
 * Created by McPander on 30.05.2017.
 */
import uuid from 'node-uuid';
let index = 3;

export function addTODO(todo) {
  todo.id = index;
  todo.date = +new Date();
  index++;
  return {
    type: 'ADD_TODO',
    todo
  };
}

export function changeTODO(todo) {
  return {
    type: 'CHANGE_TODO',
    todo
  };
}
