const projectFolder = []

const project = (title) => {
    const tasks = [];
   return {title, tasks}
}

const projectCreator = () => {
    const title = prompt("Name your project")
    
    return project(title)
}

const projectBinder = () => {
    return projectFolder.push(projectCreator())
}

const projectEditor = (projectIndex, newTitle) => {
    return projectFolder[projectIndex].title = newTitle
}

const projectRemover = (projectIndex) => {
    return projectFolder.splice(projectIndex, 1)
}

export {projectFolder, 
    projectBinder, 
    projectEditor, 
    projectRemover
}