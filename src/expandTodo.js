import MinimizeIcon from './pics/minimize.svg';
import DeleteIcon from './pics/trash.svg';
import FinishedIcon from './pics/done.svg';

import { updateMain } from './renderMain';

export function findTodoClicked(updatedProject, i) {
   updatedProject.todos.forEach((element) => {
      if (element.index === i) {
         expandTodo(element);
      }
   })
   function expandTodo(element) {
      //Creates todo div
      let todoContainer = document.createElement('div');
      todoContainer.setAttribute('id', 'expandedToDo');
      todoContainer.setAttribute('class', 'todoContainer');
      //Resets main container
      mainContainer.innerHTML = "";
      //heading icons for todo container
      let headerDiv = document.createElement('div');
      headerDiv.setAttribute('id', 'headerDiv');
      let deleteIcon = document.createElement('img');
      deleteIcon.src = DeleteIcon;
      deleteIcon.setAttribute('id', 'deleteIcon');
      deleteIcon.addEventListener('click', (() => {
         removeTodo(updatedProject, i);
      }));
      let minimizeIcon = document.createElement('img');
      minimizeIcon.src = MinimizeIcon;
      minimizeIcon.setAttribute('id', 'minimizeIcon');
      minimizeIcon.addEventListener('click', (() => {
         updateMain(updatedProject);
      }));
      //the data for todo container
      let title = document.createElement('p');
      title.setAttribute('class', 'expandedTodoData')
      title.id = 'expandedTitle';
      title.innerHTML = `Task:<br><br><em>${element.title}</em>`;
      let description = document.createElement('p');
      description.setAttribute('class', 'expandedTodoData')
      description.innerHTML = `Description:<br><br><em>${element.description}</em>`;
      let priority = document.createElement('p');
      priority.setAttribute('class', 'expandedTodoData')
      priority.innerHTML = `Priority:<br><br><em>${element.priority}</em>`;
      let dueDate = document.createElement('p');
      dueDate.setAttribute('class', 'expandedTodoData')
      dueDate.innerHTML = `Due Date:<br><br><em>${element.dueDate}</em>`;
      headerDiv.appendChild(deleteIcon);
      headerDiv.appendChild(minimizeIcon);
      todoContainer.appendChild(headerDiv);
      todoContainer.appendChild(title);
      todoContainer.appendChild(description);
      todoContainer.appendChild(priority);
      todoContainer.appendChild(dueDate);
      //footer div
      let footer = document.createElement('div');
      footer.setAttribute('id', 'expandedFooter');
      let finishedIcon = document.createElement('img');
      finishedIcon.src = FinishedIcon;
      finishedIcon.setAttribute('id', 'finishedIcon');
      finishedIcon.addEventListener('click', (() => {
         updatedProject.todos[i].dueDate = 'Completed';
         updatedProject.todos[i].completed = true;
         updateMain(updatedProject);
     }))
     if (element.completed === false){
      footer.appendChild(finishedIcon);
      }
      todoContainer.appendChild(footer);
      mainContainer.appendChild(todoContainer);
   }

   function removeTodo (updatedProject, i) {
      updatedProject.todos.splice(i, 1);
      updateMain(updatedProject);
   };
}