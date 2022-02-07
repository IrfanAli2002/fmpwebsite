
// Database start

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import {
    getDatabase,
    ref,
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
const db = getDatabase();
const dbRef = ref(db, "appointment");


// Admin code ======================
var ordersList = [];


function renderArray() {
    var ordersList = document.getElementById("ordersList")
    ordersList.innerHTML = "";
    apooinData.forEach(function (e) {
        console.log(e);
        ordersList.innerHTML += `
        <div class="row p-0 m-0">
            <div style="height: 100vh; overflow-y: auto; overflow-x: hidden" class="col-md-10 p-3">
                <div id="ordersList">
                    <div class="p-3 themeLight rounded shadow">
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fw-bold">Client Name</h3>
                            <h5>${e.fullName}</h5>
                        </div>
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fw-bold">contact</h3>
                            <h5> ${e.contact}</h5>
                        </div>
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fw-bold">Address</h3>
                            <h5> ${e.Address}</h5>
                        </div>
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fw-bold">Message</h3>
                            <h5> ${e.Message}</h5>
                        </div>
                        <div class="d-flex justify-content-between py-3">
                            <h3 class="fw-bold"> date</h3>
                            <h5> ${e.date}</h5>
                        </div>
    
    
                    </div> 
                </div>
            </div>
        </div>
    
    `
});
}


