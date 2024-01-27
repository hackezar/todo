import { renderSideBar } from "./renderSideBar";
import { findSelectedProject } from "./findSelectedProject";
import { updateMain } from "./renderMain";
import { populateStorage } from "./localStorage";

export function addToDoData(projects, selectedProject) {
    let title = document.getElementById('titleInput');
    let dueDate = document.getElementById('dueDate');
    if ( title.value == "") {
        alert("Title must be entered");
        return;
    } else if (dueDate.value == "") {
        alert('Due Date must be entered');
        return;
    }
    updateTodoData(projects, selectedProject);
    title = title.value;
    let description = document.getElementById('descriptionInput');
    description = description.value;
    dueDate = dueDate.value;
    let priority = document.getElementById('slideoutput').innerHTML;
    let newToDo = createToDo(title, description, dueDate, priority);
    selectedProject.todos.push(newToDo);
    updateProjects(projects, selectedProject);
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
            populateStorage(projects);
            renderSideBar(projects);
            //Select the 'selected' project
            let selectedProject = findSelectedProject(projects);
            //add the data to the main div
            updateMain(selectedProject);
        }
    }
}

export function updateProjects (projects, updatedProject) {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].name == updatedProject.name) {
            projects[i] = updatedProject;
            populateStorage(projects);
        }
    }
}

export function updateTodoData (projects, updatedProject){
    console.log(projects);
    console.log(updatedProject);
}

