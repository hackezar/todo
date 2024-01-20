//Functions Import
import { findSelectedProject } from "./findSelectedProject.js";
import { updateMain } from "./renderMain.js";
//Images Import
import AddIcon from './pics/addIcon.svg';
import Close from './pics/close.svg';

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
                updateMain(findSelectedProject(projects));
                renderSideBar(projects);
            } else if (project.selected == true) {
                return;
            }
        });
        projectsList.appendChild(lItem);
    };
    //FIX THIS
    renderNewProjectButtonInSidebar();

    //Sets each project to selected = false
    function setAllFalse(projects) {
        projects.forEach((project) => {
            project.selected = false;
        });
        return projects;
    };
        //FIX THIS
     function renderNewProjectButtonInSidebar() {
        const newProjectBtn = document.getElementById('newProjectButton');
        newProjectBtn.src = AddIcon;
        newProjectBtn.addEventListener('click', (() => {
            createNewProjectModal();
        }));
    };
    
    function createNewProjectModal() {
        const dialog = document.createElement('dialog');
            dialog.setAttribute('id', 'projectDialog');
            const form = document.createElement('form');
            form.setAttribute('id', 'projectForm');
            dialog.appendChild(form);
            main.appendChild(dialog);
            const formTitle = document.createElement('div');
            formTitle.setAttribute('id', 'projectFormTitle');
            const formTitleText = document.createElement('p');
            formTitleText.innerText = "New Project";
            const formTitleClose = document.createElement('img');
            formTitleClose.setAttribute('id', 'dialogCloseBtn');
            formTitleClose.addEventListener("click", (() => {
                dialog.close();
                dialog.remove();
            }))
            formTitleClose.src = Close;
            formTitle.appendChild(formTitleText);
            formTitle.appendChild(formTitleClose);
            const nameLabel = document.createElement('label');
            nameLabel.for = 'nameInput';
            nameLabel.innerHTML = "Name"
            const nameInput = document.createElement('input');
            nameInput.type = "text";
            nameInput.name = 'nameInput';
            nameInput.id = 'nameInput';
            nameInput.placeholder = "Ex: Paint Garage"
            const projectSubmitBtn = document.createElement('button');
            projectSubmitBtn.style = 'button';
            projectSubmitBtn.innerHTML = 'Submit';
            projectSubmitBtn.addEventListener("click", newProjectSubmit(projects))
            form.appendChild(formTitle);
            form.appendChild(nameLabel);
            form.appendChild(nameInput);
            form.appendChild(projectSubmitBtn);
            dialog.showModal();
    }
    
    function newProjectSubmit(projects) {
        const projectName = document.getElementById('nameInput');
        let projectValue = projectName.value;
        setAllFalse(projects);
        let newProject = {
            name: projectValue,
            selected: true,
            todos: []
        }
        projects.push(newProject);
        renderSideBar(projects);
    }
};

