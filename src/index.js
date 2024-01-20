//stylesheets
import './normalize.css';
import './styles.css';


//functions
import { createProjectArray } from "./createProjectArray.js";
import { renderSideBar } from "./renderSideBar.js";
import { findSelectedProject } from './findSelectedProject.js';
import { renderMain, updateMain } from "./renderMain.js"

//Create project array
export let projects = createProjectArray();
//Update sidebar with projects
renderSideBar(projects);
let selectedProject = findSelectedProject(projects);
renderMain(selectedProject);
updateMain(selectedProject);