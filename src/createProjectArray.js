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
        let defaultProject2 = {
            name: "Default2",
            selected: false,
            todos: [
                {
                    title: "Project2",
                    description: "Mow the front and back lawn.",
                    dueDate: "Tuesday",
                    priority: "Low",
                    completed: false
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
        let defaultProject3 =  {
            name: "Default3",
            selected: false,
            todos: [
                {
                    title: "Project3",
                    description: "Mow the front and back lawn.",
                    dueDate: "Tuesday",
                    priority: "Low",
                    completed: false
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
        projects.push(defaultProject2);
        projects.push(defaultProject3);


        return projects;
}

