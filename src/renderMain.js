import AddIcon from './pics/addIcon.svg';
import { renderDialog } from './addNewToDo.js';

export function renderMain(selectedProject) {
    const projectTitle = document.getElementById('projectTitle');
    projectTitle.innerText = selectedProject.name;

    const addNewImg = document.createElement('img');
    const imgText = document.createElement('p');
    imgText.innerHTML = "Add New ToDo";
    addNewImg.src = AddIcon;
    addNewImg.addEventListener("click", (() => {
        renderDialog();
    }));
    mainTitle.appendChild(imgText);
    mainTitle.appendChild(addNewImg); 
}