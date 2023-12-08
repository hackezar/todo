export function renderProjectSidebar(projects) {
    projects.forEach((project) => {
        const projectsList = document.getElementById('projectsList');
        const projectItem = document.createElement('li');
        projectItem.innerText = project;
        projectsList.appendChild(projectItem);
    })
    return;
}