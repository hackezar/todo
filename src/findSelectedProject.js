export function findSelectedProject(projects) {
    let selectedProject;
    //Goes through each name in projects and creates sidebar with names
    for (let i=0; i<projects.length; i++) {
        if (projects[i].selected == true) {
            selectedProject = projects[i];
        }
    }
    return selectedProject;
}