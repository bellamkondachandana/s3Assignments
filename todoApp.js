<!DOCTYPE html>
<html>
<head>
    <title>My Todo App</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            background-color: lightblue;
        }

        .container {
            background: white;
            width: 350px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
        }

        input {
            padding: 10px;
            width: 65%;
        }

        button {
            padding: 10px;
            cursor: pointer;
        }

        li {
            list-style: none;
            margin: 10px;
            padding: 8px;
            background: lightgray;
            display: flex;
            justify-content: space-between;
        }

        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>

<body>

    <div class="container">

        <h2>My Todo List</h2>

        <input type="text" id="taskInput"
               placeholder="Enter your task">

        <button id="addBtn">Add</button>

        <ul id="taskList"></ul>

    </div>

    <script>

        let tasks = JSON.parse(
            localStorage.getItem("tasks")
        ) || [];

        const input = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const taskList = document.getElementById("taskList");

        // Save tasks in localStorage
        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Display tasks
        function displayTasks() {

            taskList.innerHTML = "";

            tasks.forEach(function(task, index) {

                let li = document.createElement("li");

                let span = document.createElement("span");
                span.textContent = task.name;

                if (task.completed) {
                    span.classList.add("completed");
                }

                // Complete task
                span.addEventListener("click", function() {
                    tasks[index].completed =
                        !tasks[index].completed;

                    saveTasks();
                    displayTasks();
                });

                // Delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";

                deleteBtn.addEventListener("click", function() {
                    tasks.splice(index, 1);

                    saveTasks();
                    displayTasks();
                });

                li.appendChild(span);
                li.appendChild(deleteBtn);

                taskList.appendChild(li);
            });
        }

        // Add task
        addBtn.addEventListener("click", function() {

            let taskName = input.value.trim();

            if (taskName === "") {
                alert("Please enter a task");
                return;
            }

            tasks.push({
                name: taskName,
                completed: false
            });

            saveTasks();

            input.value = "";

            displayTasks();
        });

        // Display saved tasks when page loads
        displayTasks();

    </script>

</body>
</html>
