import AddIcon from './pics/addIcon.svg';
import { renderDialog } from './renderNewToDoForm.js';

export function renderMain(selectedProject) {
    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerText = selectedProject.name;

    const addNewImg = document.createElement('img');
    const imgText = document.createElement('p');
    imgText.innerHTML = "Add New ToDo";
    addNewImg.src = AddIcon;
    addNewImg.setAttribute('id', 'newToDoButton');
    addNewImg.addEventListener("click", (() => {
        renderDialog();
    }));
    mainTitleDiv.appendChild(imgText);
    mainTitleDiv.appendChild(addNewImg); 
    openProject(selectedProject);
}

//Opens project info on main container
//Used in renderSideBar.js
export function openProject(e) {
    console.log(e);
    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerHTML = e.name;
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = "";
    for (var i = 0; i < e.todos.length; i++) {
        let todoContainer = document.createElement('div');
        todoContainer.setAttribute('class', 'todoContainer');
        let todoTitle = document.createElement('p');
        todoTitle.innerHTML = e.todos[i].title;
        todoContainer.appendChild(todoTitle);
        mainContainer.appendChild(todoContainer);
    }
}

export function updateMainDom(updatedProject, projects) {

    for (let i = 0; i< projects.length; i++){
        if (projects[i].selected == true) {
            for (let j = 0; j<projects[i].todos.length; j++) {
                let todoContainer = document.createElement('div');
                todoContainer.setAttribute('class', 'todoContainer');
                let todoTitle = document.createElement('p');
                todoTitle.innerHTML = projects[i].todos[j].title;
                todoContainer.appendChild(todoTitle);
                mainContainer.appendChild(todoContainer);
                return projects;
            }
        }
    }
}

