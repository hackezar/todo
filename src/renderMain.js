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
    updateMain(selectedProject);
}
 
//Opens project info on main container
//Used in renderSideBar.js
export function updateMain(updatedProject) {
    console.log(updatedProject);
    const projectTitle = document.getElementById('projectTitle');
    let name = updatedProject.name;
    projectTitle.innerText = name;
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = "";
    updatedProject.todos.forEach((todo) => {
        let title = todo.title;
        let description = todo.description;
        let dueDate = todo.dueDate;
        let priority = todo.priority;
        let todoContainer = document.createElement('div');
        todoContainer.setAttribute('class', 'todoContainer');
        let todoTitle = document.createElement('p');
        todoTitle.setAttribute('class', 'todoInfo');
        todoTitle.innerHTML = `${title}`;
        let todoDescription = document.createElement('p');
        todoDescription.setAttribute('class', 'todoInfo');
        todoDescription.innerHTML = `description: ${description}`;
        let todoDueDate = document.createElement('p');
        todoDueDate.setAttribute('class', 'todoInfo');
        todoDueDate.innerHTML = `due date: ${dueDate}`;
        let todoPriority = document.createElement('p');
        todoPriority.setAttribute('class', 'todoInfo');
        todoPriority.innerHTML = `priority: ${priority}`;
        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDescription);
        todoContainer.appendChild(todoDueDate);
        todoContainer.appendChild(todoPriority);
        mainContainer.appendChild(todoContainer);
    });
}
