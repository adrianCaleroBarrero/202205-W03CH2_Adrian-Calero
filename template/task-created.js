export function taskCreated(list) {
  let template = '';
  list.forEach((item) => {
    template += ` <li id="${item.id}">${item.name} -- ${item.responsable}</li>
         `;
  });
  return template;
}
