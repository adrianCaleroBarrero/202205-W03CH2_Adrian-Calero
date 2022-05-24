import { taskCreated } from '../template/task-created.js';
import { Task } from './task.js';
export let myComponents = [
  new Task(1, 'poner lavadora', 'Adrian'),
  new Task(2, 'hacer la compra', 'Rodrigo'),
  new Task(3, 'poner el lavabajillas', 'Irene'),
];

export function listed() {
  let list = document.querySelector('#list ul');
  list.innerHTML = taskCreated(myComponents);
}
