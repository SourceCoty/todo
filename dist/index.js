let projectTitle = "";
let taskTitle = "";
let projectIndex = "";
let taskIndex = "";
let taskDiv = "";

const projects = [
    {title: "Test", tasks: [{title: "Task Test", date: "2023-08-20", priority: "high"}]},
    {title: "Test 2", tasks: [{title: "Task Test 2", date: "2023-08-20", priority: "medium"}]},
];





const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', appendProjectData);





const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', appendTask);





function displayProject() {
    projectDisplay.innerHTML = '';

    for (obj of projects) {
        const projectDisplay = document.getElementById("projectDisplay");
        const project = document.createElement("div");
        const projectTitle = document.createElement("div");
        const projectRemover = document.createElement("div"); 
        const projectDeleteButton = document.createElement("img");
        projectDeleteButton.src = "delete.png"
    
        project.className = "project";
        projectRemover.className = "projectRemove"
        projectDeleteButton.className="projectDelete"
        projectDeleteButton.setAttribute('id', "delete")
        projectTitle.className = "projectTitle"
    
        projectTitle.innerText = obj.title;
    
        projectDisplay.appendChild(project);
        project.appendChild(projectTitle);
        projectDisplay.appendChild(projectRemover);
        projectRemover.appendChild(projectDeleteButton);
    }
}
displayProject()




function getProjectIndex(projectTitle) {
    for (obj of projects) {
        if (obj.title === projectTitle) {
            projectIndex = projects.indexOf(obj)
            // deleteProject(projectIndex)
            return projectIndex
        }
    }
}

function deleteProject(index) {
    projects.splice(index, 1)
}

function processProjectDelete(event) {
    projectTitle = event.target.parentNode.previousElementSibling.querySelector(".projectTitle").innerText
    projectIndex = ""

    getProjectIndex(projectTitle)
    deleteProject(projectIndex)
    displayProject()
    inputNewProjects()
    inputProjectDelete()
}






function getProjectTitle(event) {
    projectTitle = event.target.innerText
    return projectTitle;
}





function clearProjectTitle() {
    projectTitle = "";
    return projectTitle;
}


function coupleTasksAndDisplay(event) {
    getProjectTitle(event)
    displayTasks()
}



function displayTasks() {
   
    taskDisplay.innerHTML = '';

    // console.log(projectTitle)
   for (obj of projects) {
   if (obj.title === projectTitle) {
        for (obj of obj.tasks) {
            const taskDisplay = document.getElementById("taskDisplay");
            const newTask = document.createElement("div");
            const taskTitle = document.createElement("div");
            const taskDate = document.createElement('div');
            const taskIcons = document.createElement("div"); 
            const taskDeleteButton = document.createElement("img");
            taskDeleteButton.src = "delete.png";
            const taskEditButton = document.createElement('img');
            taskEditButton.src = "edit.png";

            taskDisplay.setAttribute("id", "taskDisplay");
            newTask.className = "task"
            taskTitle.className = "taskTitle";
            taskDate.className = "taskDAte";
            taskIcons.className = "icons"
            taskDeleteButton.className="deleteBtn";
            taskDeleteButton.setAttribute("id", "taskDelete");
            taskEditButton.className = "edit";
            taskEditButton.setAttribute("id", "taskEdit");

            taskTitle.innerHTML = obj.title
            taskDate.innerHTML = obj.date;

            taskDisplay.appendChild(newTask);
            newTask.appendChild(taskTitle);
            newTask.appendChild(taskDate);
            newTask.appendChild(taskIcons);
            taskIcons.appendChild(taskEditButton);
            taskIcons.appendChild(taskDeleteButton);

            if (obj.priority == "low") {
                newTask.setAttribute("id", "low")
            } else if (obj.priority == "medium") {
                newTask.setAttribute("id", "medium") 
            } else if (obj.priority === "high") {
                newTask.setAttribute("id", "high")
            }
        }
    }
    } 
    inputTaskDelete()
    editForm()
}






function appendProjectData (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = {
       tasks: []
    }; 
    formData.forEach((value, key) => (project[key] = value));
    projects.push(project);

    createProject(event, project)
    inputNewProjects()
    inputProjectDelete();
}





function createProject (event, project) {
    event.preventDefault()
    
    const projectDisplay = document.getElementById("projectDisplay");
    const newProject = document.createElement("div");
    const projectTitle = document.createElement("div");
    const projectRemover = document.createElement("div"); 
    const projectDeleteButton = document.createElement("img");
    projectDeleteButton.src = "delete.png"

    newProject.className = "project";
    projectRemover.className = "projectRemove"
    projectDeleteButton.className="projectDelete"
    projectDeleteButton.setAttribute('id', "delete")
    projectTitle.className = "projectTitle"

    projectTitle.innerText = project.title;

    projectDisplay.appendChild(newProject);
    newProject.appendChild(projectTitle);
    projectDisplay.appendChild(projectRemover);
    projectRemover.appendChild(projectDeleteButton);
}





function inputTaskData (event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const task = {};
    
    formData.forEach((value, key) => (task[key] = value));
    
    for (obj of projects) {
        if (obj.title === projectTitle) {
            obj.tasks.push(task)
        }
    }

    createTask(event, task)
}





function createTask (event, task) {
    event.preventDefault()

    const taskDisplay = document.getElementById("taskDisplay");
    const newTask = document.createElement("div");
    const taskTitle = document.createElement("div");
    const taskDate = document.createElement('div');
    const taskIcons = document.createElement("div"); 
    const taskDeleteButton = document.createElement("img");
    taskDeleteButton.src = "delete.png";
    const taskEditButton = document.createElement('img');
    taskEditButton.src = "edit.png";

    taskDisplay.setAttribute("id", "taskDisplay");
    newTask.className = "task"
    taskTitle.className = "taskTitle";
    taskDate.className = "taskDate";
    taskIcons.className = "icons"
    taskDeleteButton.className="deleteBtn";
    taskDeleteButton.setAttribute("id", "taskDelete");
    taskEditButton.className = "edit";
    taskEditButton.setAttribute("id", "taskEdit");

    taskTitle.innerHTML = task.title;
    taskDate.innerHTML = task.date;

    taskDisplay.appendChild(newTask);
    newTask.appendChild(taskTitle);
    newTask.appendChild(taskDate);
    newTask.appendChild(taskIcons);
    taskIcons.appendChild(taskEditButton);
    taskIcons.appendChild(taskDeleteButton);

    if (task.priority == "low") {
        newTask.setAttribute("id", "low")
    } else if (task.priority == "medium") {
        newTask.setAttribute("id", "medium") 
    } else if (task.priority === "high") {
        newTask.setAttribute("id", "high")
    }
}




 
function appendTask (event) {
    inputTaskData(event);
    inputTaskDelete()
    editForm()
};





function deleteTask(projectIndex, taskIndex) {
    projects[projectIndex].tasks.splice(taskIndex, 1)
}





function getTaskIndex(projectTitle, taskTitle) {
    for (obj of projects) {
        if (obj.title === projectTitle) {
            projectIndex = projects.indexOf(obj);
            // console.log(projectIndex)
            for (obj of projects[projectIndex].tasks) {
                if (obj.title === taskTitle) {
                    console.log(taskTitle)
                    taskIndex = projects[projectIndex].tasks.indexOf(obj)
                }
            }
        }
    }

}






function processTaskDelete(event) {
    taskTitle = event.target.parentNode.parentNode.querySelector(".taskTitle").innerText

    getTaskIndex(projectTitle, taskTitle)
    deleteTask(projectIndex, taskIndex)
    displayProject()
    displayTasks()
    inputNewProjects()
    inputProjectDelete()
}





function respondToClick(event) {
    const targetTask = event.target.parentNode.parentNode.childNodes[1].innerText

    console.log(getTaskIndex(targetTask))

}





function removeTask(index) {
    projects.splice(index, 1);
}




function respondToClick(event) {
    const projectTitle = event.target
    console.log(projectTitle)
    // getProjectIndex(projectTitle);
}

function getTaskDiv(event) {
    taskDiv = event.target.parentNode.parentNode

}

function createEditForm() {

    taskDiv.innerHTML = ""
    taskDiv.style.backgroundColor = "white";

                 const editForm = document.createElement("FORM");
                 const title = document.createElement("INPUT");
                 const titleLabel = document.createElement("LABEL")
                 const date = document.createElement('INPUT');
                 const dateLabel = document.createElement("LABEL")
                 const priority = document.createElement("select");
                 const priorityLabel = document.createElement("LABEL")
                 const submitButton = document.createElement("INPUT");
                 const high = document.createElement("option")
                 const medium = document.createElement("option")
                 const low = document.createElement("option")
 
     
                 taskDisplay.setAttribute("id", "taskDisplay");
                 editForm.className = "editForm"
                 title.className = "editTitle";
                 titleLabel.htmlFor = "title";
                 titleLabel.hidden = true;
                 date.className = "editDate";
                 dateLabel.htmlFor = "date";
                 dateLabel.hidden = true;
                 priority.className = "editPriority";
                 priorityLabel.htmlFor = "priority";
                 priorityLabel.hidden = true;
                 submitButton.className="submitBtn";
                 submitButton.setAttribute("type", "submit")
                 high.value = "high"
                 medium.value = "medium"
                 low.value = "low"
     
                 title.setAttribute("type", "text")
                 title.name = "title";
                 title.placeholder = "Your new title";
                 date.setAttribute("type", "date")
                 date.name = "date";
                 priority.name = "priority";
                 high.innerText = "high";
                 medium.innerText = "medium";
                 low.innerText = "low";
                 submitButton.innerText = "Submit"
     
                 taskDiv.appendChild(editForm);
                 editForm.appendChild(title);
                 editForm.appendChild(titleLabel);
                 editForm.appendChild(date);
                 editForm.appendChild(dateLabel);
                 editForm.appendChild(priority);
                 priority.appendChild(high);
                 priority.appendChild(medium);
                 priority.appendChild(low);
                 editForm.appendChild(priorityLabel)
                 editForm.appendChild(submitButton);
}

 function appendEditForm(event) {
     getTaskDiv(event)
     createEditForm()
     submitEdit()
 }



 function inputNewData (event) {
    event.preventDefault();

    console.log(event.target)
    
    const formData = new FormData(event.target);
    const task = {};
    
    formData.forEach((value, key) => (task[key] = value));
    
    for (obj of projects[projectIndex].tasks) {
        if (obj.title === taskTitle) {
            projects[projectIndex].tasks.splice(taskIndex, 1, task)
        }
    }
    createTask(event, task)
 }

 function getTaskTitle(event) {
    taskTitle = event.target.parentNode.parentNode.querySelector(".taskTitle").innerText
    // console.log(taskTitle)
 }


 function appendTaskEdit(event) {

    getTaskIndex(projectTitle, taskTitle)
    inputNewData(event);
    inputTaskDelete()
    editForm()
    displayTasks()
    
};






function editForm() {
    const editTaskButton = document.querySelectorAll('.edit')
    editTaskButton.forEach(el => el.addEventListener("click", getTaskTitle))
    editTaskButton.forEach(el => el.addEventListener("click", appendEditForm))
}

function submitEdit() {
    const editForm = document.querySelectorAll(".editForm")
    editForm.forEach(el => el.addEventListener("submit",appendTaskEdit))
}


function inputTaskDelete() {
    const deleteTaskButton = document.querySelectorAll('.deleteBtn')
    deleteTaskButton.forEach(el => el.addEventListener('click', processTaskDelete))
}
inputTaskDelete()


function inputProjectDelete() {
    const deleteProjectButton = document.querySelectorAll('.projectDelete')
    deleteProjectButton.forEach(el => el.addEventListener('click', processProjectDelete))
}
inputProjectDelete()

function inputNewProjects() {
    const projectSelector = document.querySelectorAll(".project");
    projectSelector.forEach(el => el.addEventListener("click", coupleTasksAndDisplay))
    projectSelector.forEach(el => el.addEventListener("click", getProjectTitle))
}
inputNewProjects()

