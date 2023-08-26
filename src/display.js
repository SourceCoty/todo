const projects = [];

const projectForm = document.getElementById('projectForm');
const taskForm = document.getElementById('taskForm');

taskForm.addEventListener('submit', taskHandler);
projectForm.addEventListener('submit', projectHandler);

function projectHandler (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const project = {
       tasks: []
    };
    formData.forEach((value, key) => (project[key] = value));
    projects.push(project);
}

function taskHandler (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = {};
    formData.forEach((value, key) => (task[key] = value));
    projects[0].tasks.push(task);
}

const taskDisplay = () => {
    const project = document.createElement("div");
    const projectTitle = document.createElement("div");
    const projectRemover = document.createElement("div"); 
    const projectDeleteButton = document.createElement("img");
    projectDeleteButton.src = "dist/delete.png"

    project.className = "project";
    projectButton.className = "projectRemove"
    projectDeleteButton.className="projectDelete"
    projectDeleteButton.setAttribute("id", "delete")


}