export function updateData(projects, todo){
    alert('as');
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].selected == true) {
            projects[i].push(todo);
        } else {
            alert('error');
        }
    }
}

export function addToDoData() {
    let title = document.getElementById('titleInput');
    title = title.value;
    let description = document.getElementById('descriptionInput');
    description = description.value;
    console.log(description);
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('slideoutput').innerHTML;
    let todo = {
        title: title,
        description: description, 
        dueDate: dueDate,
        priority: priority
    };
    updateData(projects, todo);
    return projects;
}

    //Adds a new todo box when the submit button is pressed on the form
    function addToDoDOM() {
        const formTitleDom = document.createElement('p');
        formTitleDom.innerHTML = formTitle;
        document.getElementById('')
    }