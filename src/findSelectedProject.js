export function findSelectedProject(projects) {
    let selectedProject;
    //Goes through each name in projects and creates sidebar with names
    projects.forEach((project) => {
        if (project.selected == true) {
            selectedProject = project;
        }
    })
    return selectedProject;
}