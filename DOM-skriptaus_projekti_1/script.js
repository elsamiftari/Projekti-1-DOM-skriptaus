const form = document.getElementById('todoForm'); 
const input = document.getElementById('todoInput'); 
const list = document.getElementById('todoList'); 
const error = document.getElementById('error'); 
const summaryList = document.getElementById('summaryList'); 
const counter = document.getElementById('counter'); // Käytetään HTML:n laskuria
const showAllBtn = document.getElementById('showAllBtn');
const showActiveBtn = document.getElementById('showActiveBtn');
const showDoneBtn = document.getElementById('showDoneBtn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let summaryVisible = false;
let filter = 'all'; // all, active, done

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderCounter() {
    const activeCount = todos.filter(todo => !todo.done).length;
    counter.textContent = `Open tasks: ${activeCount}`;
}

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        if ((filter === 'active' && todo.done) || (filter === 'done' && !todo.done)) return;

        const li = document.createElement('li');
        li.className = todo.done ? 'done' : '';
        const span = document.createElement('span');
        span.textContent = todo.text;
        li.appendChild(span);

        const buttons = document.createElement('div');

        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✔';
        doneBtn.onclick = () => toggleDone(index);

        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑';
        delBtn.onclick = () => deleteTodo(index);

        buttons.append(doneBtn, delBtn);
        li.appendChild(buttons);
        list.appendChild(li);
    });
    renderCounter();
}

function renderSummary() {
    summaryList.innerHTML = '';
    todos.forEach(todo => {
        if ((filter === 'active' && todo.done) || (filter === 'done' && !todo.done)) return;
        const li = document.createElement('li');
        li.textContent = todo.text + (todo.done ? ' (done)' : ' (pending)');
        summaryList.appendChild(li);
    });
}

function addTodo(text) {
    todos.push({ text, done: false });
    saveTodos();
    renderTodos();
    if (summaryVisible) renderSummary();
}

function toggleDone(index) {
    todos[index].done = !todos[index].done;
    saveTodos();
    renderTodos();
    if (summaryVisible) renderSummary();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
    if (summaryVisible) renderSummary();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (value.length < 3) {
        error.textContent = 'Type at least 3 characters!';
        input.classList.add('error-border');
        return;
    }
    error.textContent = '';
    input.classList.remove('error-border');
    addTodo(value);
    input.value = '';
});

// Show all tasks ja summary
showAllBtn.addEventListener('click', () => {
    summaryVisible = !summaryVisible;
    if (summaryVisible) {
        renderSummary();
        summaryList.style.display = 'block';
        showAllBtn.textContent = 'Hide tasks';
    } else {
        summaryList.style.display = 'none';
        showAllBtn.textContent = 'Show all tasks';
    }
});

// Filter napit
showActiveBtn.addEventListener('click', () => {
    filter = 'active';
    renderTodos();
    if (summaryVisible) renderSummary();
});

showDoneBtn.addEventListener('click', () => {
    filter = 'done';
    renderTodos();
    if (summaryVisible) renderSummary();
});

// Alusta
renderTodos();
summaryList.style.display = 'none';
