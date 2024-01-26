//stylesheets
import './normalize.css';
import './styles.css';
import './tooltip.css';


//functions
import { createProjectArray } from "./createProjectArray.js";
import { renderSideBar, renderNewProjectButtonInSidebar, renderDeleteProjectButtonInSidebar, setAllFalse } from "./renderSideBar.js";
import { findSelectedProject } from './findSelectedProject.js';
import { renderMain, updateMain } from "./renderMain.js"
import { storageAvailable } from './localStorage.js';


if (storageAvailable("localStorage")) {
    console.log('Yippee! We can use localStorage awesomeness');
  } else {
    console.log('Too bad, no localStorage for us');
  }

//Test to see if storage has been populated
/*
if (!localStorage.getItem("projects")) {
    populateStorage();
  } else {
    setProjects();
  }
*/

//Create project array
let projects = createProjectArray();
//Add new project button to sidebar heading
renderNewProjectButtonInSidebar(projects);
//Add project delete button
renderDeleteProjectButtonInSidebar(projects);
//Create and Update sidebar with projects
renderSideBar(projects);
//Select the 'selected' project
let selectedProject = findSelectedProject(projects);
//render the main div
renderMain(selectedProject);
//add the data to the main div
updateMain(selectedProject);