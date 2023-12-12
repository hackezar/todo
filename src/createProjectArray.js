export function createProjectArray() {
        let projects = [];
        let defaultProject = {
            name: "Default2",
            selected: false,
            todos: {}
        };
        let defaultProject2 = {
            name: "Default",
            selected: true,
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