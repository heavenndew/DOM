function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => li.classList.toggle("completed");

    const label = document.createElement("label");
    label.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}
