const projectFolder = [];

const project = (title) => {
    const tasks = [];
   return {title, tasks}
};

const projectCreator = (title) => project(title);

const projectBinder = (title) => {
    return projectFolder.push(projectCreator(title))
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