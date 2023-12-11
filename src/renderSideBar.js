export function renderSideBar(projects) {
    //Goes through each name in projects and creates sidebar with names
    let projectsList = document.getElementById('projectsList');
    projects.forEach(({ name }, index) => {
        let lItem = document.createElement('li');
        lItem.innerText = name;
        projectsList.appendChild(lItem);
    })
    }