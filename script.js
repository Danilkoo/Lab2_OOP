// script.js

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (name && email && age) {
        addUserToTable(name, email, age);
        navigateTo('screen3');
    } else {
        alert('Будь ласка, заповніть усі поля');
    }
}

function addUserToTable(name, email, age) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${email}</td><td>${age}</td>`;
    tableBody.appendChild(row);
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Введіть текст завдання');
    }
}
