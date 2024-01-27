//stylesheets
import './normalize.css';
import './styles.css';
import './tooltip.css';


//functions
import { storageAvailable, setProjects, populateStorage } from './localStorage.js';
import { renderSideBar, renderNewProjectButtonInSidebar, renderDeleteProjectButtonInSidebar, setAllFalse } from "./renderSideBar.js";
import { findSelectedProject } from './findSelectedProject.js';
import { renderMain, updateMain } from "./renderMain.js"

if (storageAvailable("localStorage")) {
    console.log('Yippee! We can use localStorage awesomeness');
  } else {
    console.log('Too bad, no localStorage for us');
  }


//Test to see if storage has been populated
let projects;
if (!localStorage.getItem("projects")) {
    projects = createProjectArray();
    populateStorage(projects);
  } else {
    projects = setProjects();
  }
//Add new project button to sidebar heading
renderNewProjectButtonInSidebar(projects);
//Add project delete button
renderDeleteProjectButtonInSidebar(projects);
//Create and Update sidebar with projects
renderSideBar(projects);
//Select the 'selected' project
let selectedProject = findSelectedProject(projects);
//render the main div
renderMain(projects);
//add the data to the main div
updateMain(selectedProject, projects);