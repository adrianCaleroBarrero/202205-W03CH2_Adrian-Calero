import { myComponents } from './my-list.js';

export function checkbox() {
  let checked;
  myComponents.forEach((item) => {
    checked = document.querySelector(`#${item.responsable}`);
    if (checked.checked) {
      item.isComplete = true;
    } else {
      item.isComplete = false;
    }
  });
}
