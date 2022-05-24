import { listed, myComponents } from './my-list.js';
import { Task } from './task.js';

export function add() {
  let text = document.querySelector('#text').value;
  let twoWords = text.split('--');

  myComponents.push(
    new Task(myComponents.length + 1, twoWords[0], twoWords[1])
  );
  document.querySelector('#text').value = '';
  listed();
}
