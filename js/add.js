import { listed, myComponents } from './my-list.js';
import { Task } from './task.js';

export function add() {
  let text = document.querySelector('#text').value;
  myComponents.push(new Task(myComponents.length + 1, text));
  document.querySelector('#text').value = '';
  listed();
}
