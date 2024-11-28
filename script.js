const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

document.getElementById("add-button").addEventListener("click", addTask);

// Přidání úkolu
function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Symbol ×
        li.appendChild(span);
    }

    inputBox.value = "";
    saveTask(); // Uložení do localStorage
}

// Interakce s úkoly (označení/mázání)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Odstraní celý <li>
        saveTask();
    }
});

// Uložení úkolů do localStorage
function saveTask() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Zobrazení úkolů při načtení stránky
function showTask() {
    let savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Načtení úkolů při otevření stránky
showTask();
