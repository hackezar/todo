import AddIcon from './pics/addIcon.svg';
import MinimizeIcon from './pics/minimize.svg';

import { renderDialog } from './renderNewToDoForm.js';
import { findTodoClicked } from './expandTodo.js';

export function renderMain() {
    const newImgDiv = document.createElement('div');
    newImgDiv.setAttribute('id', 'newImgDiv');
    const addNewImg = document.createElement('img');
    const imgText = document.createElement('p');
    imgText.setAttribute('id', 'imgText');
    imgText.innerHTML = `New "ToDo"`;
    addNewImg.src = AddIcon;
    addNewImg.setAttribute('id', 'newToDoButton');
    addNewImg.addEventListener("click", (() => {
        renderDialog();
    }));
    newImgDiv.appendChild(imgText);
    newImgDiv.appendChild(addNewImg);
    mainTitleDiv.appendChild(newImgDiv);
     
}
 
//Opens project info on main container
//Used in renderSideBar.js
export function updateMain(updatedProject) {
    const projectTitle = document.getElementById('projectTitle');
    let name = updatedProject.name;
    projectTitle.innerText = name;
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = "";
    for (let i = 0; i<updatedProject.todos.length; i++) {
        updatedProject.todos[i].index = i;
        let title = updatedProject.todos[i].title;
        let description = updatedProject.todos[i].description;
        let dueDate = updatedProject.todos[i].dueDate;
        let priority = updatedProject.todos[i].priority;
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
        todoDueDate.innerHTML = dueDate;
        let todoPriority = document.createElement('p');
        todoPriority.setAttribute('class', 'todoInfo');
        todoPriority.innerHTML = `priority: ${priority}`;
        todoContainer.appendChild(todoTitle);
        todoContainer.appendChild(todoDueDate);
        todoContainer.addEventListener('click', (() => {
            findTodoClicked(updatedProject, i, todoTitle, todoDescription, todoDueDate, todoPriority);
        }));
        mainContainer.appendChild(todoContainer);
    };
}
