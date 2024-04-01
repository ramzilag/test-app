


// let butt = document.getElementById("addTaskBtn");

// let clear = document.getElementById("clearTaskBtn");

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// butt.addEventListener("click",()=>{
//     const inputs = input.ariaValueMax;
//     if(inputs!==''){
//        ullist.push(inputs);
//        localStorage.setItem('tasks',JSON.stringify(tasks))
//        displayTasks();
//        input.value='';
//     }
// });

// let inputbox = document.getElementById("taskInput");
// let listbox = document.getElementById("taskList");

// function AddTask(){
// if(inputbox.value === ''){
//     alert("you must write something")
// }
// else{
//     let liss = document.createElement("li")
//     liss.innerHTML=inputbox.value;
//     listbox.appendChild(liss)
//     inputbox.value = '';
// }
// };
// function AddTask(){
//     if(inputbox.value === ''){
//         alert("You must write something");
//     }
//     else{
//         let listItem = document.createElement("li");
//         listItem.innerHTML = inputbox.value;
//         listItem.addEventListener('click', function() {
//             this.remove(); // Remove the task when clicked
//         });
//         listbox.appendChild(listItem);
//         inputbox.value = ''; // Clear the input box
//     }};




// //clear all tasks
// let inputbox = document.getElementById("taskInput");
// let listbox = document.getElementById("taskList");

// function AddTask() {
//     if (inputbox.value === '') {
//         alert("You must write something");
//     } else {
//         let listItem = document.createElement("li");
//         listItem.textContent = inputbox.value;
//         listItem.addEventListener('click', function() {
//             this.classList.toggle('selected'); // Toggle selected state
//         });
//         listbox.appendChild(listItem);
//         inputbox.value = ''; // Clear the input box
//     }
// }

// function clearSelectedTasks() {
//     let selectedTasks = document.querySelectorAll('.selected');
//     if (selectedTasks.length === 0) {
//         alert("No tasks selected");
//     } else {
//         selectedTasks.forEach(task => {
//             task.remove(); // Remove selected tasks
//         });
//     }
// }
let inputbox = document.getElementById("taskInput");
let listbox = document.getElementById("taskList");

// Load tasks from local storage when the page loads
window.onload = function() {
    loadTasks();
};

function loadTasks() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        listbox.innerHTML = savedTasks;
        addTaskEventListeners(); // Add event listeners to newly loaded tasks
    }
}

function saveTasks() {
    localStorage.setItem('tasks', listbox.innerHTML);
}

function AddTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let listItem = document.createElement("li");
        listItem.textContent = inputbox.value;
        listItem.addEventListener('click', function() {
            this.classList.toggle('selected'); // Toggle selected state
        });
        listbox.appendChild(listItem);
        inputbox.value = ''; // Clear the input box
        saveTasks(); // Save tasks to local storage
    }
}

function clearSelectedTasks() {
    let tasks = document.querySelectorAll('.selected');
    tasks.forEach(task => {
        task.remove(); // Remove selected tasks
    });
    saveTasks(); // Save tasks to local storage
}

function addTaskEventListeners() {
    let tasks = document.querySelectorAll('li');
    tasks.forEach(task => {
        task.addEventListener('click', function() {
            this.classList.toggle('selected'); // Toggle selected state
        });
    });
}
function cleartasks(){
    if(listbox.childNodes.length === 0){
        alert("its already cleared")
    }
    else{
        while(listbox.firstChild){
            listbox.removeChild(listbox.firstChild);
        }
        saveTasks();
        

    }


}