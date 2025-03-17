document.addEventListener("DOMContentLoaded", () => {
    updateMotivation();
});

function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let taskDate = document.getElementById("taskDate").value;
    let priority = document.getElementById("priority").value;
    let taskList = document.getElementById("taskList");

    if (taskInput === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <button class="complete-btn" onclick="completeTask(this)">✔</button>
        ${taskInput} (${priority.toUpperCase()} - ${taskDate})
        
        <button class="delete-btn " onclick="removeTask(this)">✖</button>
    `;

    if (priority === "urgent") {
        li.style.color = "green";
        li.style.fontWeight = "bold";
    }

    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
    updateProgress();
}

function completeTask(btn) {
    let task = btn.parentElement;
    task.classList.toggle("completed");
    updateProgress();
}

function removeTask(btn) {
    let task = btn.parentElement;
    task.remove();
    updateProgress();
}

function updateProgress() {
    let tasks = document.querySelectorAll("#taskList li");
    let completedTasks = document.querySelectorAll(".completed");
    
    let percent = tasks.length > 0 ? (completedTasks.length / tasks.length) * 100 : 0;
    document.getElementById("progressBar").style.width = percent + "%";
    
    document.getElementById("taskStats").innerText = 
        `Completed: ${completedTasks.length} | Remaining: ${tasks.length - completedTasks.length}`;

    updateMotivation();
}

function updateMotivation() {
    let quotes = [
        "Keep going! Every step counts! 🚀",
        "You are stronger than your excuses! 💪",
        "Success starts with a single task! ✅",
        "Stay focused and finish strong! 🏆"
    ];
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("motivationQuote").innerText = randomQuote;
}
