import { renderSideBar } from "./renderSideBar";
import { findSelectedProject } from "./findSelectedProject";
import { updateMain } from "./renderMain";

export function addToDoData(selectedProject) {
    let title = document.getElementById('titleInput');
    title = title.value;
    let description = document.getElementById('descriptionInput');
    description = description.value;
    let dueDate = document.getElementById('dueDate');
    dueDate = dueDate.value;
    let priority = document.getElementById('slideoutput').innerHTML;
    let newToDo = createToDo(title, description, dueDate, priority);
    selectedProject.todos.push(newToDo);
    return selectedProject;
}

export function createToDo(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            completed: false
        }
}

export function removeProject(projects, selectedProject) {
    for (let i =0; i < projects.length; i++) {
        if (projects[i].name == selectedProject.name) {
            projects.splice(i, 1);
            projects[0].selected = true;
            renderSideBar(projects);
            //Select the 'selected' project
            let selectedProject = findSelectedProject(projects);
            //add the data to the main div
            updateMain(selectedProject);
        }
    }
}

