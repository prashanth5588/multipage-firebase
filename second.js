

const firebaseConfig = {
    apiKey: "AIzaSyB5LoFZffpe_hAb9mJR0LYH5e_YcW65LaE",
    authDomain: "multipageapplication.firebaseapp.com",
    databaseURL: "https://multipageapplication-default-rtdb.firebaseio.com",
    projectId: "multipageapplication",
    storageBucket: "multipageapplication.appspot.com",
    messagingSenderId: "544324576644",
    appId: "1:544324576644:web:506b3832e76f39f62ba9d1",
    measurementId: "G-SMW26R3MXK"
  };
  
  // Initialize Firebase


 firebase.initializeApp(firebaseConfig); 


 userName = localStorage.getItem("userName");
 mobileNumber = localStorage.getItem("mobile");
 password = localStorage.getItem("password");
 gender = localStorage.getItem("gender");
 documents = localStorage.getItem("documents");
 account = localStorage.getItem("account");

 console.log(userName);

 

 let valuesArray = [userName,mobileNumber, password, gender, documents, account];
 let keyArray = ["Name", "Mobilenumber", "Password", "Gender", "Documents","Account"];

 
 //const mainEle = document.getElementById("ele_main");
 //const head1 = document.getElementById("headEle1");


 let nameEle = document.getElementById("personName");
 const detailsContainer = document.getElementById("detailsContainer");


 // console.log(nameEle);

 nameEle.innerHTML = "Welcome  " + userName + "   Please check Your Details";
 nameEle.style.color = "White";

 function detailsEntered(keyEle,value) {
    let newEle = document.createElement("p");
    newEle.textContent = keyEle + "  :   " +  value;
    newEle.style.textAlign = "start";
    newEle.classList.add("detaEle");


    detailsContainer.appendChild(newEle)
 }

 for (let i in valuesArray) {
    let keyEle = keyArray[i];
    let value = valuesArray[i] ;
    detailsEntered(keyEle,value);

 }

 

 function addProduct() {
     productName = document.getElementById("product-name").value;

    firebase.database().ref("/").child(productName).update({
        purpose: "adding Product name" 
    });

    localStorage.setItem("productName",productName);
 }

 function getData() { firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
 { childkey = childSnapshot,key;
    productNames = childkey;
    console.log("Room Name  -  " + productNames);
    row = "<div class = productName id = " + productNames + "  onclick='redirectToproductName(this.id)' >#" + productNames + "</div><hr>" ;
    document.getElementById("output").innerHTML += row ;

 });

 });

 }

 getData();

 function redirectToproductName(name) {

    console.log(name);
    localStorage.setItem("productName", name);
    window.location = "third.html";

 }

 function logout() {

    localStorage.removeItem("userName");
    localStorage.removeItem("mobile");
    localStorage.removeItem("password");
    localStorage.removeItem("gender");
    localStorage.removeItem("documents");
    localStorage.removeItem("account");
    localStorage.removeItem("productName");
    window.location = "index.html";
 }
  
