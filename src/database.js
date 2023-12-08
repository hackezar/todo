let projects = [];

class Project {
    constructor(...todo) {
        this.todo = todo;
    }
    addToLibrary() {
        projects.push(this);
    }
}

 class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
 }

