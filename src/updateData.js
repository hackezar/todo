export function addToDoData(projects) {
    let newProject;
    let title = document.getElementById('titleInput');
    title = title.value;
    let description = document.getElementById('descriptionInput');
    description = description.value;
    let dueDate = document.getElementById('dueDate');
    dueDate = dueDate.value;
    let priority = document.getElementById('slideoutput').innerHTML;
    let newToDo = createToDo(title, description, dueDate, priority);
    for (let i = 0; i<projects.length; i++) {
        if (projects[i].selected == true) {
            projects[i].todos.push(newToDo);
            newProject = projects[i];
        }
    }
    return newProject, projects;
}

    export function createToDo(title, description, dueDate, priority) {
        return {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        }
    }