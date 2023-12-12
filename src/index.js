//stylesheets
import './normalize.css';
import './styles.css';


//functions
import { createProjectArray } from "./createProjectArray.js";
import { renderSideBar } from "./renderSideBar.js";
import { findSelectedProject } from './findSelectedProject.js';
import { renderMain } from "./renderMain.js"

//Create project array
let projects = createProjectArray();
//Update sidebar with projects
renderSideBar(projects);
let selectedProject = findSelectedProject(projects);
renderMain(selectedProject);
