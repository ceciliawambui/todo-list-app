const taskInput = document.getElementById("task-input");

const addTaskBtn = document.getElementById("add-task-btn");

const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText.trim() !== "") {

        const taskItem = document.createElement("li");
        li.innerHTML = `${taskText} <span class="edit-btn">✎</span><span class="delete-btn">✖</span>`;

        taskItem.innerText = taskText;

        taskItem.addEventListener("click", function () {

            taskItem.remove();

        });

        taskList.appendChild(taskItem);


        taskInput.value = "";

    }

});
// taskList.addEventListener("click", function(event) {

//     if (event.target.tagName.toLowerCase() === "li") {
  
//       event.target.remove();
  
//     }
  
//   });

  