window.addEventListener('load' , () => {
    const firstname = localStorage.getItem('FIRSTNAME');
    // var focusToday = document.getElementById('focusToday');
    var form = document.getElementById('form');

    document.getElementById('focusToday').innerHTML = "What is your main focus Today?"
    document.getElementById('result-firstname').innerHTML = ` ${firstname}. `;
    
    const mainfocus = localStorage.getItem('MAIN');
    document.getElementById('content').innerHTML = ` ${mainfocus} <span class="icon" onclick="deleteTask2()"><i class="fas fa-times-circle"></i></span>`;
    if (mainfocus !== null){ //if mainfocus has value
        form.style.display = "none"
        document.getElementById('focusToday').innerHTML = "Today"
    }
     else{
        document.getElementById('content').innerHTML = "";
          
     }
})

// for deleting the text in main focus of the day
function deleteTask2(){
    // var focusToday = document.getElementById('focusToday');
    var form = document.getElementById('form');
    localStorage.removeItem('MAIN');
    const mainfocus = localStorage.getItem('MAIN');
    document.getElementById('content').innerHTML = mainfocus;
    document.getElementById('focusToday').innerHTML = "What is your main focus Today?"
    form.style.display = "flex"
    form.style.alignItems = "center"
}