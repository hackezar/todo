export function createProjectArray() {
        let projects = [];
        let defaultProject = {
            name: "Default",
            selected: true,
            todos: {}
        }
        projects.push(defaultProject);
        return projects;
}