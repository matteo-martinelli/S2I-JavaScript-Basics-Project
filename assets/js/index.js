// Functions
//Get the desired cookie field
function getCookie(fieldName) {
    let name = fieldName + "=";
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
}


// Script body
//Connection to the frontend element target div
const targetDiv = document.querySelector('#project')

// Creating the decrement button in JS
const decrementButton = document.createElement('button')
decrementButton.textContent = '-'
targetDiv.append(decrementButton)

// Creating the displayed number and styling it in JS
const counter = document.createElement('p')
counter.textContent = '0'
counter.style.padding = '20px';
counter.style.fontSize = '40px';
targetDiv.append(counter)

// Creating the increment button in JS
const incrementButton = document.createElement('button')
incrementButton.textContent = '+'
targetDiv.append(incrementButton)

//Setting of the value to be displayed starting from the cookie setting
let valueToManipulate;
if(getCookie("lastCounter") == null){
  //If no cookie, start from 0
  valueToManipulate = 0;
}
else {
  //If cookie, start from last value
  valueToManipulate = parseInt(getCookie("lastCounter"));
}

// Assigning the value got from the cookie in JS
counter.textContent = valueToManipulate;

// Logging
console.log(valueToManipulate);
console.log(typeof(valueToManipulate));

// Setting the cookie expiration time (about one day)
const dateTime = new Date();
const nowTimeStamp = dateTime.getTime(); 
const expireDateTimeStamp = nowTimeStamp + 3600*24*1000;
const expireDate = new Date(expireDateTimeStamp).toUTCString();  

// Event listener for value increase in JS 
incrementButton.addEventListener('click', function(event){
  // Decrementing the value and displaying it in the frontend
  valueToManipulate++;
  counter.textContent = valueToManipulate;
  
  // Setting the cookie
  let cookieContent = "lastCounter=" + valueToManipulate;
  document.cookie = cookieContent;
  cookieContent = "expires=" + expireDate;
  document.cookie = cookieContent;
  
  // Logging
  console.log(document.cookie);   
});

// Event listener for value decrease in JS
decrementButton.addEventListener('click', function(event){
  // Decrementing the value and displaying it in the frontend
  valueToManipulate--;
  counter.textContent = valueToManipulate;
  
  // Setting the cookie
  let cookieContent = "lastCounter=" + valueToManipulate;
  document.cookie = cookieContent;
  cookieContent = "expires=" + expireDate;
  document.cookie = cookieContent;
  
  // Logging
  console.log(document.cookie);
});
