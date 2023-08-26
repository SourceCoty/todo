const projects = [
    {title: "Test", tasks: [{title: "Task Test", date: "2023-08-20", priority: "high"}]},
    {title: "Test 2", tasks: [{title: "Task Test 2", date: "2023-08-20", priority: "medium"}]},
];




let projectTitle = "";
let taskIndex = "";



const projectForm = document.getElementById('projectForm');
projectForm.addEventListener('submit', appendProjectData);





// const projectDisplay = document.getElementById("projectDisplay")
// projectDisplay.addEventListener("click", displayTasks)
// projectDisplay.addEventListener("click", getProjectTitle)





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
            deleteProject(projectIndex)
        }
    }
}

function deleteProject(index) {
    projects.splice(index, 1)
}

function processProjectDelete(event) {
    projectTitle = event.target.parentNode.previousElementSibling.querySelector(".projectTitle").innerText
    console.log(projectTitle)

    getProjectIndex(projectTitle)


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






function displayTasks(event) {
    const projectTitle = event.target.innerText
   
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
    taskDate.className = "taskDAte";
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
};





function getTaskIndex(title) {
    for (let tasks of projects) {
        for (let task of tasks) {
            if (task.title == title) {
                console.log(projects.indexOf(tasks))
            }
        }
    }
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

// const projectContainer = document.querySelectorAll(".project")
// projectContainer.forEach(el => el.addEventListener("click", respondToProjectClick))

function inputProjectDelete() {
const deleteTaskButton = document.querySelectorAll('.projectDelete')
deleteTaskButton.forEach(el => el.addEventListener('click', processProjectDelete))
}
inputProjectDelete()

function inputNewProjects() {
    const projectSelector = document.querySelectorAll(".project");
    projectSelector.forEach(el => el.addEventListener("click", displayTasks))
    projectSelector.forEach(el => el.addEventListener("click", getProjectTitle))
}

inputNewProjects()
