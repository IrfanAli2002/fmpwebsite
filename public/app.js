// Database start

 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
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




// Database end






// card section start


var cart1 =document.getElementById("cart1");
var cart2 =document.getElementById("cart2");
var cart3 =document.getElementById("cart3");
var cart4 =document.getElementById("cart4");
var cart5 =document.getElementById("cart5");
var cart6 =document.getElementById("cart6");

// order section start
var descrip =document.getElementById("descrip");
var style = document.getElementById("style");
var item = document.getElementById("item");

// order section end




// var cartArr = [
//     {
//         name : "White hoody",
//         description : "Pure hand painting eco friendly ",
//         design : "Grafti style",
//     },
    
//     {
//         name : "Dupatta",
//         description : "Pure hand painting eco friendly ",
//         design : "old style",
//     },
    
//     {
//         name : "Black hoody",
//         description : "Pure hand painting eco friendly ",
//         design : "Gra style",
//     },
    
//     {
//         name : "red hoody",
//         description : "Pure hand painting eco friendly ",
//         design : "Grafti style",
//     },
    
//     {
//         name : "blue hoody",
//         description : "Pure hand painting eco friendly ",
//         design : "Grafti style",
//     },
    
//     {
//         name : "cyan hoody",
//         description : "Pure hand painting eco friendly ",
//         design : "Grafti style",
//     }
    
// ]


// console.log(cartArr[1].name)

// function cartfirst() {
//     window.location.assign("./cart./order.html"); 
//     item.innerHTML = cartArr[1].name;    
//     console.log(item)
// }

// item.innerHTML = cartArr[1].name;    
// console.log(item)

// card section end