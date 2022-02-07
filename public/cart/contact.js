
// Database start

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
    set,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBp9X57_znJNRBD8x2jeh-Fv0FYCaQfzUw",
    authDomain: "noventa-fabric.firebaseapp.com",
    databaseURL: "https://noventa-fabric-default-rtdb.firebaseio.com",
    projectId: "noventa-fabric",
    storageBucket: "noventa-fabric.appspot.com",
    messagingSenderId: "883562344570",
    appId: "1:883562344570:web:b352fbc5eceb7c022fcbc3",
    measurementId: "G-RQQRMNESR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const database = getDatabase();

// console.log(database)

// Database end





// contact section start

var name = document.getElementById("fullName");
var contact = document.getElementById("contact");
var Address = document.getElementById("Address");
var Message = document.getElementById("Message");
var date = document.getElementById("date");
var bookBtn = document.getElementById("bookBtn");
var formvalidation = document.getElementById("formvalidation");


// data functions ==========================


function addData(e) {
    e.preventDefault();
    if (name.value == "" || name.value == " " || name.value.length < 3) {
        alert("Enter Name");
        return;
    }
    if (contact.value == "" || contact.value == " ") {
        alert("Enter contact");
        return;
    }
    if (Address.value == "") {
        alert("Enter Address");
        return;
    }
    if (date.value == "") {
        alert("Enter date");
        return;
    }
    set(ref(database, 'appointment/' + name.value), {
        appoinName: name.value,
        appoincontact: contact.value,
        appoinaddress: Address.value,
        appoinmsg: Message.value,
        appoindate: date.value,
    })
    .then(() => {
        alert("success")
    })
    .catch((error) => {
        alert("nooooooo")
        
    })
    




}
// bookBtn.addEventListener('click', addData);






// formvalidation==============================

bookBtn.addEventListener('click', addData)
// formvalidation.addEventListener('submit',(e) =>{
//     var meassage = []
//     if(name.value == '' || name.value == null){
//         meassage.push('Name  is required')
//     }
// })