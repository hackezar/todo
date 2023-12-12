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
export function openProject(project) {
    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerHTML = project.name;
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = "";
    for (var i = 0; i < project.todos.length; i++) {
        let todoContainer = document.createElement('div');
        todoContainer.setAttribute('class', 'todoContainer');
        let todoTitle = document.createElement('p');
        todoTitle.innerHTML = project.todos[i].title;
        todoContainer.appendChild(todoTitle);
        mainContainer.appendChild(todoContainer);
    }
}



