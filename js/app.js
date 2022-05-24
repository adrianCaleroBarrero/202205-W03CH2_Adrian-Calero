import { add } from './add.js';
import { checkbox } from './checkbox.js';
import { listed, myComponents } from './my-list.js';
import { remove } from './remove.js';

function app() {
  listed();
  document.querySelector('#plus').addEventListener('click', add);
  document.querySelector('#minus').addEventListener('click', remove);
  myComponents.forEach((item) => {
    document
      .querySelector(`#${item.responsable}`)
      .addEventListener('click', checkbox);
  });
}

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();
