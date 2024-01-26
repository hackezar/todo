//Functions Import
import { findSelectedProject } from "./findSelectedProject.js";
import { updateMain } from "./renderMain.js";
//Images Import
import NewProject from './pics/newProject.svg';
import Close from './pics/close.svg';
import DeleteBtn from './pics/trash.svg';
import { removeProject } from "./updateData.js";

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
};

    //Adds the new project button
export function renderNewProjectButtonInSidebar(projects) {
        const newProjectBtn = document.getElementById('newProjectButton');
        newProjectBtn.src = NewProject;
        newProjectBtn.addEventListener('click', (() => {
            createNewProjectModal();
        }));

    //creates the new project modal
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
                removeDialog();
            }));
            formTitleClose.src = Close;
            formTitle.appendChild(formTitleText);
            formTitle.appendChild(formTitleClose);
            const nameLabel = document.createElement('label');
            nameLabel.for = 'nameInput';
            nameLabel.innerHTML = "Name"
            nameLabel.id = 'nameLabel';
            const nameInput = document.createElement('input');
            nameInput.type = "text";
            nameInput.name = 'nameInput';
            nameInput.id = 'nameInput';
            nameInput.placeholder = "Ex: Paint Garage"
            const projectSubmitBtn = document.createElement('button');
            projectSubmitBtn.type = 'button';
            projectSubmitBtn.innerHTML = 'Submit';
            form.appendChild(formTitle);
            nameLabel.appendChild(nameInput);
            form.appendChild(nameLabel);
            //Adds new project on submit click
            projectSubmitBtn.addEventListener("click", (() => {
                let inputData = nameInput.value;
                removeDialog();
                newProjectSubmit(projects, inputData);
            }));
            //Adds new project on enter key
            const projectName = document.getElementById('nameInput');
            projectName.addEventListener('keypress', ((event) => {
                if (event.key === 'Enter' ) {
                    event.preventDefault();
                    let inputData = nameInput.value;
                    removeDialog();
                    newProjectSubmit(projects, inputData);
                };
            }));
            form.appendChild(projectSubmitBtn);
            dialog.showModal();
    };

    function newProjectSubmit(projects, inputData) {
        console.log(checkForDuplicate(projects, inputData));
        if (checkForDuplicate(projects, inputData) === false) {
            setAllFalse(projects);
            let newProject = {
                name: inputData,
                selected: true,
                todos: []
            }
            projects.push(newProject);
            renderSideBar(projects);
            let selectedProject = findSelectedProject(projects);
            updateMain(selectedProject);
        } else {
            alert('Error: Project Name already in use');
        };
    };

        //removes the dialog box
    function removeDialog() {
        const dialog = document.getElementById('projectDialog');
        dialog.remove();
    }
};

//Adds project delete button
export function renderDeleteProjectButtonInSidebar(projects) {
    const deleteProjectBtn = document.getElementById('deleteProjectButton');
    deleteProjectBtn.src = DeleteBtn;
    deleteProjectBtn.addEventListener('click', (() => {
        let selectedProject = findSelectedProject(projects);
        
        const dialog = document.createElement('dialog');
            dialog.setAttribute('id', 'projectRemoveDialog');
            const form = document.createElement('form');
            form.setAttribute('id', 'projectRemoveForm');
            dialog.appendChild(form);
            main.appendChild(dialog);
            const confirmButtons = document.createElement('div');
            confirmButtons.setAttribute('id', 'confirmButtons');
            const formText = document.createElement('p');
            formText.innerText = "Are you sure you want to delete the current project?";
            formText.setAttribute('id', 'removeProjectText');
            const formClose = document.createElement('button');
            formClose.type = 'button';
            formClose.setAttribute('id', 'cancelRemoveProjectBtn');
            formClose.innerHTML = 'Cancel'
            formClose.addEventListener("click", (() => {
                document.getElementById('projectRemoveDialog').remove();
            }));
            form.appendChild(formText);
            confirmButtons.appendChild(formClose);
            form.appendChild(confirmButtons);
            
            //confirm delete button
            const confirmDelete = document.createElement('button');
            confirmDelete.type = 'button';
            confirmDelete.innerHTML = 'confirm';
            confirmDelete.setAttribute('id', 'confirmDelete');
            confirmButtons.appendChild(confirmDelete);
            confirmDelete.addEventListener('click', (() => {
                removeProject(projects, selectedProject);
                dialog.remove();
            }))
            //Deletes Project on enter key
            confirmDelete.addEventListener('keypress', ((event) => {
                if (event.key === 'Enter' ) {
                    event.preventDefault();
                    removeProject(projects, selectedProject);
                    dialog.remove();
                };
            }));
            dialog.showModal();
        
    }));
};

//Sets each project to selected = false
export function setAllFalse(projects) {
    projects.forEach((project) => {
        project.selected = false;
    });
    return projects;
};

//Checks for duplicate project name
function checkForDuplicate(projects, inputData) {
    inputData.toLowerCase();
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name.toLowerCase() == inputData) {
            return true;
        }
    }
    return false;
}