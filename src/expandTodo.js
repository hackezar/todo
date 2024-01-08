import MinimizeIcon from './pics/minimize.svg';

import { updateMain } from './renderMain';

export function findTodoClicked(updatedProject, i) {
   updatedProject.todos.forEach((element) => {
      if (element.index === i) {
         expandTodo(element);
      }
   })
   function expandTodo(element) {
      let todoContainer = document.createElement('div');
      todoContainer.setAttribute('id', 'expandedToDo');
      //Resets main container
      mainContainer.innerHTML = "";
      let minimizeDiv = document.createElement('div');
      minimizeDiv.setAttribute('id', 'minimizeDiv');
      let minimizeIcon = document.createElement('img');
      minimizeIcon.src = MinimizeIcon;
      minimizeIcon.setAttribute('id', 'minimizeIcon');
      minimizeIcon.addEventListener('click', (() => {
         updateMain(updatedProject);
      }));
      let title = document.createElement('p');
      title.setAttribute('class', 'expandedTodoData')
      title.innerHTML = element.title;
      let description = document.createElement('p');
      description.setAttribute('class', 'expandedTodoData')
      description.innerHTML = element.description;
      let priority = document.createElement('p');
      priority.setAttribute('class', 'expandedTodoData')
      priority.innerHTML = element.priority;
      let dueDate = document.createElement('p');
      dueDate.setAttribute('class', 'expandedTodoData')
      dueDate.innerHTML = element.dueDate;
      minimizeDiv.appendChild(minimizeIcon);
      todoContainer.appendChild(minimizeDiv);
      todoContainer.appendChild(title);
      todoContainer.appendChild(description);
      todoContainer.appendChild(priority);
      todoContainer.appendChild(dueDate);
      mainContainer.appendChild(todoContainer);
   }
}