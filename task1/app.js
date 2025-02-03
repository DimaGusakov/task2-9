/*
Задание 1
Реализовать таск-менеджер по примеру:
https://ucarecdn.com/1f553319-9298-4fe4-960b-6592ab2e5275/Monosnapscreencast20230717154248.mp4
Для стилизации используем Bootstrap.
Описание функционала:
1. При отправке формы в список ниже добавляется задача (при пустом инпуте задача не добавляется). 
2. При отметке чекбокса li окрашивается в зеленый, при убирании отметки цвет пропадает.
3. При клике на кнопку удаления  соответствующая заметка удаляется.
*/
const formAdd = document.getElementById("form-add");
const listGroup = document.getElementById("list-group");
const input = document.getElementById("input");

const tasks = [];

const getTask = (task, index) => {
  return `
  <div class="list-group-item d-flex justify-content-between align-items-center ${
    task.checked ? "bg-success bg-opacity-25 border-success-subtle" : ""
  }" data-index="${index}">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" ${
        task.checked ? "checked" : ""
      }>
      <label class="form-check-label">
      ${task.title}
      </label>
    </div>
    <button data-type="remove" data-index="${index}" type="button" class="btn btn-outline-danger btn-sm">Удалить</button>
  </div>
  `;
};

const render = () => {
  listGroup.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    listGroup.innerHTML += getTask(tasks[i], i);
  }
};

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    title: input.value,
    checked: false,
  };
  tasks.push(task);
  render();
  input.value = "";
});

listGroup.addEventListener("click", (e) => {
  if (e.target.dataset.type === "remove") {
    const index = +e.target.dataset.index;
    tasks.splice(index, 1);
    render();
    return;
  }

  if (e.target.matches('input[type="checkbox"]')) {
    const listGroupItem = e.target.closest(".list-group-item");
    const index = listGroupItem.dataset.index;
    console.log(index)
    tasks[index].checked = e.target.checked;
    render()
  }
});
