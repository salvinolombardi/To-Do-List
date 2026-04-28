const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask(text) {
  const li = document.createElement("li");
  li.innerHTML = `
        <span class="task-text">${text}</span>
        <div class="btns">
            <button class="done">FINISH</button>
            <button class="delete">REMOVE</button>
        </div>
    `;
  taskList.appendChild(li);
}

addTaskButton.addEventListener("click", () => {
  const val = taskInput.value.trim();
  if (val) {
    addTask(val.toUpperCase());
    taskInput.value = "";
    taskInput.focus();
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTaskButton.click();
});

taskList.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");
  if (!li) return;

  if (target.classList.contains("done")) {
    li.classList.toggle("completed");
  }

  if (target.classList.contains("delete")) {
    li.style.opacity = "0";
    li.style.transform = "translateX(50px)";
    setTimeout(() => li.remove(), 250);
  }
});
