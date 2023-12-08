//stylesheets
import './normalize.css';
import './styles.css';

//pics
import AddIcon from './pics/addIcon.svg';
const addNew = document.getElementById('addNew');
addNew.src = AddIcon;

//functions
import { openInitialProject } from "./openInitialProject.js";
import { Project } from "./database.js;"

const def = new Project();
def.addToLibrary();

openInitialProject();


