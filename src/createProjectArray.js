export function createProjectArray() {
        let projects = [];
        let defaultProject = {
            name: "Default",
            selected: true,
            todos: [
                {
                    title: "Mow Lawn",
                    description: "Mow the front and back lawn.",
                    dueDate: "Tuesday",
                    priority: "Low"
                },
                {
                    title : "Weed",
                    description: "Pull weeds out of flower box",
                    dueDate: "Friday",
                    priority: "Moderate"
                }
            ]
        };
        let defaultProject2 = {
            name: "Default2",
            selected: false,
            todos: {}
        };
        let defaultProject3 =  {
            name: "Default3",
            selected: false,
            todos: {}
        };

        projects.push(defaultProject);
        projects.push(defaultProject2);
        projects.push(defaultProject3);


        return projects;
}