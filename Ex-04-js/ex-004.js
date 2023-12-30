/**
                                        Name of the challenge : Age Comparison                        
                                        Challenge No          : 4                                              
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 12/9/2023     
                                        Ticket No             :               
                                        **/

//Date and Time declaration
function datetime() {
  let currentDay = new Date();
  document.getElementById("current-date").textContent =
    "Date : " + currentDay.toLocaleDateString();
  document.getElementById("current-time").textContent =
    "Time : " + currentDay.toLocaleTimeString("en-in");
}
setInterval(datetime, 1000);

//Dom declaration
let firstPerson = document.getElementById("input-firstage");
let secondPerson = document.getElementById("input-secondage");
let thirdPerson = document.getElementById("input-thirdage");
let Elder = document.getElementById("displayElder");
let descendAge = document.getElementById("displayAgeDescend");
let resetAll = document.querySelectorAll("input");

//Error declaration
const ERROR_MESSAGE = "Please Enter The Input Value";
const AGE_RANGE_ERROR = "Enter the age range 1 to 110";

//const declaration
const minimumAgeLimit = 1;
const maximumAgeLimit = 110;

//Main function
function avoidnegative(event) {
  event.key === "-" || event.key === "e" || event.key === "E"
    ? event.preventDefault()
    : null;
}
function compareage() {
  let firstage = parseInt(firstPerson.value);
  let secondage = parseInt(secondPerson.value);
  let thirdage = parseInt(thirdPerson.value);
  if (firstPerson.value == "" || secondPerson.value == "" || thirdPerson.value == "") {
    alert(ERROR_MESSAGE);
  } else if (firstage < minimumAgeLimit || firstage > maximumAgeLimit) {
    alert(AGE_RANGE_ERROR);
    firstPerson.value = "";
  } else if (secondage < minimumAgeLimit || secondage > maximumAgeLimit) {
    alert(AGE_RANGE_ERROR);
    secondPerson.value = "";
  } else if (thirdage < minimumAgeLimit || thirdage > maximumAgeLimit) {
    alert(AGE_RANGE_ERROR);
    thirdPerson.value = "";
  } 
  else {
    if((firstage == secondage) && (firstage == thirdage)){
            Elder.value = "all are same age persons";
    }else{
        if((firstage >= secondage) && (firstage >= thirdage)){
            if(firstage == secondage){
                Elder.value = "First and second person Elder";
            }else if(firstage == thirdage){
                Elder.value = "First and third person elder";
            }else{
                Elder.value = "First person elder";
            }
        }else if(secondage >= thirdage){
            if(secondage == thirdage){
                Elder.value = "Second and Third persons elders";
            }else{
                Elder.value = "Second person elder";
            }
        }else{
            Elder.value = "Third person elder"
        }
    }
    //sort descending order and display it
    let arrayage = [firstage,secondage,thirdage];
        for(let loop = 0; loop < ((arrayage.length)-loop); loop++){
            if(arrayage[loop] < arrayage[loop+1]){
                let temporary = arrayage[loop];
                arrayage[loop] = arrayage[loop+1];
                arrayage[loop+1] = temporary;
            }
        }
    descendAge.value = arrayage.join('\n');    


  }
}

function reset() {
  resetAll.forEach((input) => (input.value = ""));
  Elder.value = "";
  descendAge.value = "";
}
