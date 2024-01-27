import AddIcon from './pics/addIcon.svg';
import FinishedIcon from './pics/done.svg';

import { renderDialog } from './renderNewToDoForm.js';
import { findTodoClicked } from './expandTodo.js';

export function renderMain(projects) {
    const newImgDiv = document.createElement('div');
    newImgDiv.setAttribute('id', 'newImgDiv');
    newImgDiv.setAttribute('class', 'tooltip');
    const tooltipText = document.createElement('span');
    tooltipText.innerHTML = 'Create New ToDo';
    tooltipText.setAttribute('class', 'tooltiptext')
    const addNewImg = document.createElement('img');
    addNewImg.src = AddIcon;
    addNewImg.setAttribute('id', 'newToDoButton');
    addNewImg.addEventListener("click", (() => {
        renderDialog(projects);
    }));
    newImgDiv.appendChild(tooltipText);
    newImgDiv.appendChild(addNewImg);
    mainTitleDiv.appendChild(newImgDiv);
     
}
 
//Opens project info on main container
//Used in renderSideBar.js
export function updateMain(updatedProject, projects) {
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
        todoContainer.setAttribute('id', 'smallerTodo')
        let todoTitle = document.createElement('p');
        todoTitle.setAttribute('class', 'todoInfo');
        todoTitle.innerHTML = `${title}`;
        todoContainer.appendChild(todoTitle);
        let todoDescription = document.createElement('p');
        todoDescription.setAttribute('class', 'todoInfo');
        todoDescription.innerHTML = `description: ${description}`;
        let todoDueDate = document.createElement('p');
        todoDueDate.setAttribute('class', 'todoInfo');
        todoDueDate.innerHTML = dueDate;
        let todoPriority = document.createElement('p');
        todoPriority.setAttribute('class', 'todoInfo');
        todoPriority.innerHTML = `priority: ${priority}`;
        //Set the todo container color based on priority
        switch (priority) {
            case 'Low':
                todoContainer.style.backgroundColor = '#7BA05B'
                break;
            case 'Moderate':
                todoContainer.style.backgroundColor = '#E9D66B'
                break;
            case 'Urgent':
                todoContainer.style.backgroundColor = '#FF7F7F'
        }

        if (updatedProject.todos[i].completed === false) {
            todoContainer.appendChild(todoDueDate);
    
        } else if (updatedProject.todos[i].completed === true) {
            let finishedIcon = document.createElement('img');
            finishedIcon.src = FinishedIcon;
            finishedIcon.setAttribute('id', 'finishedTodoImg');
            todoContainer.appendChild(finishedIcon);
        }
        todoContainer.addEventListener('click', (() => {
            findTodoClicked(updatedProject, i, projects, todoTitle, todoDescription, todoDueDate, todoPriority);
        }));
        mainContainer.appendChild(todoContainer);
    };
}
