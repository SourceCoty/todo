const task = (title, priority) => {
    return {title, priority}
}

const taskCreator = () => {
    const title = prompt("Name your task");
    const priority = prompt("Set task priority");

    return task(title, priority)
}

const taskBinder = (projectIndex) => {
    return projectFolder[projectIndex].tasks.push(taskCreator())
}

const taskEditor = (projectIndex, taskIndex) => {
    const newTask = taskCreator();

    return projectFolder[projectIndex].tasks.splice (taskIndex, 1, newTask)
}

const taskRemover = (projectIndex, taskIndex) => {
    return projectFolder[projectIndex].tasks.splice(taskIndex, 1)
}

export { 
    taskBinder,
    taskEditor,
    taskRemover
}