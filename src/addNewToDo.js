import  Close  from './pics/close.svg';

export function renderDialog() {
    const main = document.getElementById('main')
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'dialog');
    const form = document.createElement('form');
    form.setAttribute('id', 'todoForm');
    dialog.appendChild(form);
    main.appendChild(dialog);
    const formTitle = document.createElement('div');
    const formTitleText = document.createElement('p');
    formTitleText.innerText = "Add new To Do Item";
    const formTitleClose = document.createElement('img');
    formTitleClose.setAttribute('id', 'dialogCloseBtn');
    formTitleClose.addEventListener("click", (() => {
        dialog.close();
        dialog.remove();
    }))
    formTitleClose.src = Close;
    formTitle.appendChild(formTitleText);
    formTitle.appendChild(formTitleClose);
    const titleInput = document.createElement('input');
    titleInput.placeholder = 'Title';
    const descriptionInput = document.createElement('input');
    descriptionInput.placeholder = "Description";
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    //Priority Slider
    const slideContainer = document.createElement('div');
    slideContainer.setAttribute('class', 'slidecontainer');
    const slideInput = document.createElement('input');
    slideInput.type = 'range';
    slideInput.min = '1';
    slideInput.max = '3';
    slideInput.value = '2';
    slideInput.setAttribute('class', 'slider');
    slideInput.setAttribute('id', 'myRange');
    slideContainer.appendChild(slideInput);
    const submitBtn = document.createElement('button');
    submitBtn.innerText = "Submit";
    form.appendChild(formTitle);
    form.appendChild(titleInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDate);
    form.appendChild(slideContainer);
    form.appendChild(submitBtn);
    dialog.showModal();
}

