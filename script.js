// Get the input element for the user's first name
const first_name = document.getElementById('first-name');

// Store the user's first name in local storage
function setName(){
    const firstname = first_name.value;
    localStorage.setItem("FIRSTNAME", firstname);
}

// Store the user's main focus for the day in local storage
function setToday(){
    const mainfocus1 = document.getElementById('focus-today').value;
    localStorage.setItem("MAIN", mainfocus1);
}
function setToday1(){
    const mainfocus = document.getElementById('main-focus').value;
    localStorage.setItem("MAIN", mainfocus);
}

// Update the real-time clock display
function realtimeClock(){

    var rtClock = new Date();
    
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //Add Am and Pm system
    var amPm =( hours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format
    hours = (hours % 12) || 12;
    
    //Pad the hours, minutes, and seconds with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display the clock
    document.getElementById('clock').innerHTML =
        hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

    // Display a greeting based on the time of day
    const greet = document.getElementById('greet')
    if (greet !== null) {
        if (amPm == "AM"){
            greet.innerHTML = "Goodmorning"
        }else{
            if(hours < 6 || hours == 12){
                greet.innerHTML = "Good Afternoon"
            }else{
                greet.innerHTML = "Good Evening"
            }
        }   
    } else {
        console.log('The element does NOT exist in the DOM');
    }
}

// Add event listener for enter keypress on the name input field
const form1check = document.querySelector('#form1')
if (form1check !== null) {
    document.querySelector('#form1').addEventListener('keypress',  (e)=>{
        if (e.key === 'Enter') {
            setName()
        }
    });
}

// Add event listener for enter keypress on the main focus input field
const main_focus = document.getElementById('main-focus')
document.querySelector('#form').addEventListener('keypress',  (e)=>{
    if (e.key === 'Enter') {
        setToday1()
    }
});

// Show and hide the to-do list modal
var modal = document.getElementById("wrapper");
var btn = document.getElementById("todo");
var close = document.getElementById("close");
btn.onclick = ()=> {
  wrapper.style.right = "0";
  wrapper.style.transition = "right 1s ease";
}
close.onclick =()=> {
  wrapper.style.right = "-250px";
  wrapper.style.transition = "all 1s ease";
}

// Update the user's name in local storage
const name1 = document.getElementById('result-firstname');
const firstname = localStorage.getItem('FIRSTNAME');
const inputFirstname = document.getElementById('first-name'); 
const pen = document.getElementById("pen");
const form = document.getElementById("form1")
const close1 = document.getElementById("close1")
pen.onclick = ()=> {
    form.style.display = "block";
    inputFirstname.value = firstname;
}
close1.onclick = ()=> {
    form.style.display = "none";
}

// change the background image every 1 minute
let currentval = 0

function bgchris() {
    const picture = [
        "pexels-photo-443446.jpeg",
        "pexels-photo-534164.jpeg",
        "pexels-photo-1766838.jpeg",
        "pexels-photo-2113566.jpeg",
        "pexels-photo-2749481.jpeg",
        "pexels-photo-3601425.jpeg",
        "pexels-photo-4277430.jpeg",
        ];
    let rannum = Math.floor(Math.random() * picture.length);

    // Ensure the new background image is different from the previous one
    if (rannum === currentval) {
        return bgchris();
    }
    
    const imgbg = document.getElementById('imgbg');
    let newvalue = {curnum : rannum, imgval :picture[rannum]}

    if (imgbg) {
        localStorage.setItem('IMGBG',JSON.stringify(newvalue) );
        imgbg.src = `./images/${picture[rannum]}`;
        currentval = rannum
    }  
}

// Load the saved background image or set a new one
function bgetdata(){
    const imgbg = document.getElementById('imgbg');
    if ("IMGBG" in localStorage){
        let imgbg2 = JSON.parse(localStorage.getItem('IMGBG'))
        imgbg.src = `./images/${imgbg2.imgval}`;
        currentval = imgbg2.curnum
    }else{
        bgchris()
    }
}

setTimeout(bgetdata, 0)
setInterval(bgchris, 60000)


