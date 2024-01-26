const btn = document.querySelector('#btn');
const inputBox = document.querySelector('#input-box');
const listSection = document.querySelector('.listSection');

showTask();

btn.addEventListener('click', () => {
    if(inputBox.value === ''){
        alert('Input something first!')
    }
    else{
        addTask(inputBox.value);
    }
});

inputBox.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(inputBox.value === ''){
            alert('Input something first!')
        }
        else{
            addTask(inputBox.value);
        }
    }
}, false);

function addTask(taskInput){
    // const html = "<p>My new paragraph.</p>";
    const newTask = document.createElement('li');
    newTask.innerText = taskInput;
    listSection.appendChild(newTask);
    const span = document.createElement('span');
    span.innerText = '⨯';  // or we can just use the code for the cross i.e. '\u00d7'
    newTask.appendChild(span);
    listSection.insertAdjacentElement('afterbegin', newTask);
    inputBox.value = "";
    saveData();
}

listSection.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        if(e.target.classList.contains("checked")){
            listSection.insertAdjacentElement('beforeend', e.target);
        }
        else{
            listSection.insertAdjacentElement('afterbegin', e.target);
        }
        saveData();
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listSection.innerHTML);
}

function showTask() {
    listSection.innerHTML = localStorage.getItem("data");
}

