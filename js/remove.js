import { listed, myComponents } from './my-list.js';

export function remove() {
  myComponents.pop();
  listed();
}
