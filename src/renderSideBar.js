import { openProject } from "./renderMain.js";

export function renderSideBar(projects) {
    //starts with a clean slate
    let projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = "";
    //Goes through each name in projects and creates sidebar with names
    projects.forEach(highlightSelectedProject);

    //this function highlights the project if it is the currently selected one
    function highlightSelectedProject(project) {
        let lItem = document.createElement('li');
        lItem.innerText = project.name;
        if (project.selected == true) {
            lItem.style.fontWeight = "800";
            lItem.style["text-decoration"] = "underline";
        } else {
            lItem.style.fontWeight = "400";
            lItem.style["text-decoration"] = "none";
        }
        //On click will switch selected project(if the clicked project is not currently selected)
        lItem.addEventListener("click", function() {
            if (project.selected == false) {
                setAllFalse(projects);
                project.selected = true;
                openProject(project);
                renderSideBar(projects);
            } else if (project.selected == true) {
                return;
            }
        });
        projectsList.appendChild(lItem);
    };

    //Sets each project to selected = false
    function setAllFalse(projects) {
        projects.forEach((project) => {
            project.selected = false;
        });
        return projects;
    };



}