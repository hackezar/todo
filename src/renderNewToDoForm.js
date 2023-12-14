import  Close  from './pics/close.svg';
import { addToDoData } from './updateData.js';
import { projects } from './index.js';
import { updateMain } from './renderMain.js';
import { findSelectedProject } from './findSelectedProject.js';

export function renderDialog() {
    const main = document.getElementById('main');

    function createDialog () {
        const dialog = document.createElement('dialog');
        dialog.setAttribute('id', 'dialog');
        const form = document.createElement('form');
        form.setAttribute('id', 'todoForm');
        dialog.appendChild(form);
        main.appendChild(dialog);
        const formTitle = document.createElement('div');
        const formTitleText = document.createElement('p');
        formTitleText.innerText = "Add new ToDo";
        const formTitleClose = document.createElement('img');
        formTitleClose.setAttribute('id', 'dialogCloseBtn');
        formTitleClose.addEventListener("click", (() => {
            dialog.close();
            dialog.remove();
        }))
        formTitleClose.src = Close;
        formTitle.appendChild(formTitleText);
        formTitle.appendChild(formTitleClose);
        form.appendChild(formTitle);
        dialog.showModal();
    }
    function createTitleInput() {
        const titleInput = document.createElement('input');
        titleInput.setAttribute('id', 'titleInput')
        titleInput.placeholder = 'Title';
        titleInput.required = true;
        form.appendChild(titleInput);
    }
    function createDescriptionInput() {
        const descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('id', 'descriptionInput');
        descriptionInput.placeholder = "Description";
        form.appendChild(descriptionInput);
    }
    function createDueDateInput() {    
        const dueContainer = document.createElement('div');
        dueContainer.setAttribute('id', 'duecontainer');
        const dueDate = document.createElement('input');
        dueDate.setAttribute('id', 'dueDate');
        dueDate.type = 'date';
        const dueText = document.createElement('p');
        dueText.innerHTML = "Due Date:";
        dueText.setAttribute('id', 'duetext');
        dueContainer.appendChild(dueText);
        dueContainer.appendChild(dueDate);
        form.appendChild(dueContainer);
    }
    //Priority Slider
    function createSlider() {
        const slideContainer = document.createElement('div');
        slideContainer.setAttribute('class', 'slidecontainer');
        const slideInput = document.createElement('input');
        const slideOutput = document.createElement('output');
        slideOutput.setAttribute('id', 'slideoutput');
        slideInput.type = 'range';
        slideInput.min = '1';
        slideInput.max = '3';
        slideInput.value = '2';
        slideInput.setAttribute('class', 'slider');
        slideInput.setAttribute('id', 'myRange');
        slideContainer.appendChild(slideInput);
        slideContainer.appendChild(slideOutput);
        slideOutput.innerHTML = "Moderate";
        //The function below is triggered every time the slider value is changed.
        //The function will then set the output based on where the slider is set.
        slideInput.oninput = function () {
            switch(this.value) {
                case "1":
                    slideOutput.innerHTML = "Low";
                    break;
                case "2":
                    slideOutput.innerHTML = "Moderate";
                    break;
                case "3":
                    slideOutput.innerHTML = "Urgent";
                    break;
            }
        };
        form.appendChild(slideContainer);
    };
    function  createSubmitButton(projects) {
        const submitBtn = document.createElement('button');
        //button must be type button or the page will reload on button click
        submitBtn.type = 'button';
        submitBtn.setAttribute('id', 'dialogSubmitBtn')
        submitBtn.innerText = "Submit";
        submitBtn.addEventListener('click', (() => {
            let selectedProject = findSelectedProject(projects);
            let updatedProject = addToDoData(selectedProject);
            console.log(updatedProject);
            updateMain(updatedProject);
            removeDialog();
            return projects;
        }));
        form.appendChild(submitBtn);
    };

    function removeDialog() {
        const dialog = document.getElementById('dialog');
        dialog.remove();
        return;
    }
    createDialog();
    const form = document.getElementById('todoForm');
    createTitleInput();
    createDescriptionInput();
    createDueDateInput();
    createSlider();
    createSubmitButton(projects);
}

