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
            priority: priority
        }
    }