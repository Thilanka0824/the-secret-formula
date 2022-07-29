let inputText = document.querySelector("#userInput");

let submitButton = document.querySelector("#submitButton");
let submitButton2 = document.querySelector("#submitButton2");


let form = document.querySelector("form");
let form2 = document.querySelector("#form2");



////==========================================================================
//grabbing innerText for the input fields uses .value

//The Alerter
form.addEventListener("submit", function (event) {
  //this prevents the browser from efreshing when using a 'submit' event
  event.preventDefault();

  alert(`${inputText.value}`);
});


////=============================================================================

//Sandwich Builder
////====================================================================
//sandwich variables

//reference to radio buttons
let wheatBread = document.querySelector("#wheat-bread");
let whiteBread = document.querySelector("#white-bread");

//references to checkboxes
let lettuce = document.querySelector("#lettuce");
let tomatos = document.querySelector("#tomatos");
let pickles = document.querySelector("#pickles");
let olives = document.querySelector("#olives");
let cranberry = document.querySelector("#cranberry");
let bacon = document.querySelector("#bacon");

//reference to sauces
let mustard = document.querySelector("#mustard");
let mayo = document.querySelector("#mayo");
let spicyMayo = document.querySelector("#spicy-mayo");



form2.addEventListener("submit", function (event) {
  //this prevents the browser from refreshing when using a 'submit' event
    event.preventDefault();

  //console.log(alert('hi'))

  //for checkboxes, use the .checked property
  //set this equal to empty string
    let ingredients = [];
    let breadType = "";
    let sauceType = "";

  //for radio buttons, ALSO use the .checked property
    if (wheatBread.checked === true) {
        breadType = "Wheat";
    
    } else if (whiteBread.checked === true) {
        breadType = "White";
    }

    console.log(`Bread Type: ${breadType}`);

    if (mustard.checked === true) {
        sauceType = "Mustard";
    
    } else if (mayo.checked === true) {
        sauceType = "Mayo";
    
    } else if (spicyMayo.checked === true) {
        sauceType = "Spicy Mayo";
    
    }

    console.log(`Sauce Type: ${sauceType}`);

    if (lettuce.checked === true) {
        ingredients.push("Lettuce")
    
    } 
    if (tomatos.checked === true) {
        ingredients.push("Tomatos")
    
    } 
    if (pickles.checked === true) {
        ingredients.push("Pickles")
    
    } 
    if (olives.checked === true) {
        ingredients.push("Olives")
    
    } 
    if (cranberry.checked === true) {
        ingredients.push("Cranberry")
    
    } 
    if (bacon.checked === true) {
        ingredients.push("Bacon")
    }

    alert(
        `Your sandwich contains: ${breadType} bread, with ${sauceType} and ${ingredients} `
    );

    //toppings
    console.log("Wheat Bread: " + wheatBread.checked);
    console.log("White Bread: " + whiteBread.checked);
    
    console.log("Mustard: " + mustard.checked);
    console.log("Mayo: " + mayo.checked);
    console.log("Spicy Mayo: " + spicyMayo.checked);

    console.log("Lettuce: " + lettuce.checked);
    console.log("Tomatos: " + tomatos.checked);
    console.log("Pickles: " + pickles.checked);
    console.log("Olives: " + olives.checked);
    console.log("Cranberry: " + cranberry.checked);
    console.log("Bacon: " + bacon.checked);
    
});


////===========================================================================

//The Appointment Scheduler

let form3 = document.querySelector("#form3");
let submitButton3 = document.querySelector("#submitButton3");

let calendarInput = document.querySelector('#calendar')
let stylistInput = document.querySelector('#stylist')

let longHair = document.querySelector('#long-hair')
let shortHair = document.querySelector('#short-hair')

form3.addEventListener('submit', function(event){
    event.preventDefault()

    let hairLength = ''

    if(longHair.checked === true){
        hairLength += "Long";
    } else if(shortHair.checked === true){
        hairLength += "Short";
    } else {
        alert('Please select a hair length')
    }

    alert(`Your haircut is scheduled for ${calendarInput.value} with ${stylistInput.value} for ${hairLength} hair`)

    calendarInput.value = '';
    stylistInput.value = '';
    longHair.checked = false;
    shortHair.checked = false;


});

////===========================================================================

//Create Account

let form4 = document.querySelector('#form4')
let submitButton4 = document.querySelector('#submitButton4');

let userName = document.querySelector('#username');
let email = document.querySelector('#email-input');
let passwordInput = document.querySelector('#passwordInput');
let confirmPassword = document.querySelector('#confirmPassInput')

form4.addEventListener('submit', function(event){
    //stopping the refresh
    event.preventDefault()
    console.log('hi')
    

    if(passwordInput.value !== '' && confirmPassword.value !== ''){
        alert(`user: ${userName.value} email: ${email.value}`)
    } else {
        alert(`please enter a password and confirm it`)
    }




})








