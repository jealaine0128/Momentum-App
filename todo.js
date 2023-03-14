// Get the add task button and the todo list element from the DOM
const addtaskbtns = document.getElementById('addtaskbtns')
const todoList = document.getElementsByClassName('todoList')[0]

// Define an empty object to store the tasks in
let tasks = {}

// Add an event listener to the add task button that creates a new task
addtaskbtns.addEventListener('submit',(e)=>{
    e.preventDefault()

    // Get the value of the input field and the current timestamp
    const todoitemsss = document.getElementById('todoitemsss')
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    // Add the new task to the tasks object and save it to local storage
    tasks[`${timestamp}`] =  {data: todoitemsss.value, status : "ONGOING"} 
    localStorage.setItem('TASK', JSON.stringify(tasks));

    // Generate HTML for the new task and add it to the todo list
    let newadd = `
        <li>
            <div class="taskitself">
                
                <div class="textinside">
                        ${todoitemsss.value}    
                </div>
                <form action="" class="textinputform2 ${timestamp}" onsubmit="taskinput2(event, this)">
                    <input type="text" name="" value="${todoitemsss.value}" class="inputreader2">
                </form>
            </div>
            <div class="btnscontainer" id="${timestamp}">
                <i class="fa-solid fa-strikethrough"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-square-minus"></i>
            </div>
        </li>
        
        `
    todoList.innerHTML += newadd
    todoitemsss.value = ""
})

// A function to populate the todo list with tasks from local storage
function run(){
    if ("TASK" in localStorage){
        let listdata = ``
        tasks = JSON.parse(localStorage.getItem('TASK'))
        const task1 = Object.entries(tasks)

        for (let i = 0; i < task1.length; i++) {

            // If the task is completed, add a line-through style
            let styly = `text-decoration: line-through;`

            if (task1[i][1].status == "ONGOING"){
                styly = ``
            }

            // Generate HTML for each task and add it to the todo list
            listdata += `
            <li>
                <div class="taskitself" style = "${styly}">

                    <div class="textinside">
                        ${task1[i][1].data}
                    </div>
                    <form action="" class="textinputform2 ${task1[i][0]}" onsubmit="taskinput2(event, this)">
                        <input type="text" name="" value="${task1[i][1].data}" class="inputreader2">
                    </form>

                </div>
                <div class="btnscontainer" id="${task1[i][0]}">
                    <i class="fa-solid fa-strikethrough"></i>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-square-minus"></i>
                </div>
            </li>
            
            `
        }
        todoList.innerHTML = listdata
    }
}

// Call the run function to populate the todo list with tasks from local storage
run()

// Add an event listener to the clear all button that deletes all tasks and clears local storage
const clearall = document.getElementsByClassName('clearall')[0]
clearall.addEventListener('click',(e)=>{
    e.preventDefault()
    tasks = {}
    localStorage.setItem('TASK', JSON.stringify(tasks));
    todoList.innerHTML = ""
})

const btnscontainer = document.getElementsByClassName('todoList')[0]
btnscontainer.addEventListener('click',(e)=>{
    let idval, spec

    //checks if the clicked element contains a class of "fa-strikethrough". If it does, it adds a strikethrough style to the specific task
    if (e.target.classList.contains('fa-strikethrough')){
         idval = e.target.parentElement.id
         spec = e.target.parentElement.parentElement
        console.log(spec.children[0])

        spec.children[0].style.textDecoration= "line-through"
        tasks[idval].status = "STRIKE"
        localStorage.setItem('TASK', JSON.stringify(tasks));

    }
    //checks if the clicked element contains a class of "fa-pen-to-square". If it does, the editting form will showed up
    else if (e.target.classList.contains('fa-pen-to-square')){
         idval = e.target.parentElement.id
         spec = e.target.parentElement.parentElement
        console.log(spec.children[0])
        spec.children[0].children[0].style.display= "none"
        spec.children[0].children[1].style.display= "block"

    }
    //checks if the clicked element contains a class of "fa-square-minus". If it does, it deletes the corresponding task
    else if (e.target.classList.contains('fa-square-minus')){
         idval = e.target.parentElement.id
        delete tasks[idval]; 

        localStorage.setItem('TASK', JSON.stringify(tasks));
        run()
    }
})

// Onsubmit function of the forms in the editing section
function taskinput2(e, doc){
    e.preventDefault() 
    
    let iddic = doc.classList[1]
    //Change the value of the specific task
    tasks[iddic].data = doc.children[0].value
    localStorage.setItem('TASK', JSON.stringify(tasks));
    run()
}