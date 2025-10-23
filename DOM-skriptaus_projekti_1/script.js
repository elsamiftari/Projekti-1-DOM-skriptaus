const form = document.getElementById('todoForm');      // Lomake elementti
const input = document.getElementById('todoInput');     // Tekstikenttä uusiin tehtäviin
const list = document.getElementById('todoList');       // Tehtävälista HTML:ssä
const error = document.getElementById('error');         // Virheilmoitus
const summaryList = document.getElementById('summaryList'); // Tehtäväyhteenveto
const counter = document.getElementById('counter');     // Näyttää avoimien tehtävien määrän
const showAllBtn = document.getElementById('showAllBtn');   // "Show all tasks" -nappi
const showActiveBtn = document.getElementById('showActiveBtn'); // "Active" -nappi
const showDoneBtn = document.getElementById('showDoneBtn');     // "Done" -nappi

let todos = JSON.parse(localStorage.getItem('todos')) || []; // Tehtävälista localStoragesta tai tyhjä
let summaryVisible = false;   // Onko yhteenveto näkyvissä
let filter = 'all';           
function saveTodos() { 
    localStorage.setItem('todos', JSON.stringify(todos)); // Tallenna tehtävät localStorageen
}

function renderCounter() { 
    const activeCount = todos.filter(todo => !todo.done).length; // Laske avoimet tehtävät
    counter.textContent = `Open tasks: ${activeCount}`;          // Näytä laskuri
}

function renderTodos() { 
    list.innerHTML = ''; // Tyhjennä lista
    todos.forEach((todo, index) => {
        if ((filter === 'active' && todo.done) || (filter === 'done' && !todo.done)) return; 
        const li = document.createElement('li'); 
        li.className = todo.done ? 'done' : ''; // Merkitse tehtävä tehdyksi
        const span = document.createElement('span'); 
        span.textContent = todo.text; 
        li.appendChild(span); 

        const buttons = document.createElement('div'); 
        const doneBtn = document.createElement('button'); 
        doneBtn.textContent = '✔'; 
        doneBtn.onclick = () => toggleDone(index); // Merkitse tehdyksi

        const delBtn = document.createElement('button'); 
        delBtn.textContent = '🗑'; 
        delBtn.onclick = () => deleteTodo(index); // Poista tehtävä

        buttons.append(doneBtn, delBtn); 
        li.appendChild(buttons); 
        list.appendChild(li); 
    });
    renderCounter(); // Päivitä laskuri
}

function renderSummary() { 
    summaryList.innerHTML = ''; // Tyhjennä summary-lista
    todos.forEach(todo => {
        if ((filter === 'active' && todo.done) || (filter === 'done' && !todo.done)) return; 
        const li = document.createElement('li'); 
        li.textContent = todo.text + (todo.done ? ' (done)' : ' (pending)'); 
        summaryList.appendChild(li); 
    });
}

function addTodo(text) { 
    todos.push({ text, done: false }); // Lisää uusi tehtävä
    saveTodos(); 
    renderTodos(); 
    if (summaryVisible) renderSummary(); // Päivitä summary, jos näkyvissä
}

function toggleDone(index) { 
    todos[index].done = !todos[index].done; // Vaihda tila
    saveTodos(); 
    renderTodos(); 
    if (summaryVisible) renderSummary(); 
}

function deleteTodo(index) { 
    todos.splice(index, 1); // Poista tehtävä
    saveTodos(); 
    renderTodos(); 
    if (summaryVisible) renderSummary(); 
}

form.addEventListener('submit', (e) => { 
    e.preventDefault(); 
    const value = input.value.trim(); 
    if (value.length < 3) { 
        error.textContent = 'Type at least 3 characters!'; 
        input.classList.add('error-border'); // Lisää virhetyyli
        return; 
    }
    error.textContent = ''; 
    input.classList.remove('error-border'); 
    addTodo(value); // Lisää tehtävä
    input.value = ''; // Tyhjennä kenttä
});

// Show all tasks sekä summary
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

renderTodos(); 
summaryList.style.display = 'none'; // Tämä piilota summary aluksi
