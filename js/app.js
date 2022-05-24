import { add } from './add.js';
import { listed } from './my-list.js';
import { remove } from './remove.js';

function app() {
  listed();
  document.querySelector('#plus').addEventListener('click', add);
  document.querySelector('#minus').addEventListener('click', remove);
}

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();
