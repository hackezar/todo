export function createProjectArray() {
        let projects = [];
        let defaultProject = {
            name: "Example",
            selected: true,
            todos: [
                {
                    title: "Mow Lawn",
                    description: "Mow the front and back lawn.",
                    dueDate: "Tuesday",
                    priority: "Low",
                    completed: true
                },
                {
                    title : "Weed",
                    description: "Pull weeds out of flower box",
                    dueDate: "Friday",
                    priority: "Moderate",
                    completed: false
                },
                {
                    title : "Learn about coding",
                    description: "Finer craft mny full stack developer skills",
                    dueDate: "Wednesday",
                    priority: "Urgent",
                    completed: false
                },
                {
                    title : "Dance",
                    description: "Go to good night johnnys and dance!",
                    dueDate: "Saturday",
                    priority: "Low",
                    completed: false
                },
                {
                    title : "Change Brakes",
                    description: "Replace Car Brake Pads",
                    dueDate: "Tuesday",
                    priority: "Moderate",
                    completed: false
                }
            ]
        };

        projects.push(defaultProject);
        
        return projects;
}

