/**
                                        Name of the challenge : Number pattern                        
                                        Challenge No          : 16                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 28/9/2023     
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
let enter_Number = document.getElementById("first_Number");
let display_Number = document.getElementById("display_Employees_Number");
let search_Number = document.getElementById("search_Number");
let display_Output = document.getElementById("display_Search");
let resetAll = document.querySelectorAll("input");

//Error declaration
const EMPTY_ERROR = "Please Enter Employee Number";
const SEARCH_ERROR = "Please Enter the Search Employee Number";
const RANGE_ERROR = "Add only Eight Employees Numbers";
const SAME_ERROR = "Cannot add same number of employee";

//Main function
let employee_Array = [];
const add_Name = () => {
  let employee_Numbers = enter_Number.value;
  employee_Numbers == ""
    ? alert(EMPTY_ERROR)
    : employee_Array.length < 8
    ? employee_Array.every((index) => index != employee_Numbers)
      ? (employee_Array.push(employee_Numbers),
        (enter_Number.value = ""),
        (display_Number.value = employee_Array.join("\n")))
      : alert(SAME_ERROR)
    : alert(RANGE_ERROR),
    (enter_Number.value = "");
};
const searchEmployee = () => {
  let search_Numbers = parseInt(search_Number.value);

  if (search_Numbers == "") {
    alert(SEARCH_ERROR);
  } else {
    for(let i of employee_Array){
      if(i==search_Numbers){
        display_Output.value = search_Numbers + " is available";
        break;
      }else{
        display_Output.value = search_Numbers + " not available";
      }
    }

    



    // const ans=employee_Array.some((i) =>
    //   (i==search_Numbers)
    // );
    // if(ans){
    //   display_Output.value = search_Numbers + " is available";
    // } else {
    //   display_Output.value = search_Numbers + " not available";
    // }

    }
  }

// : employee_Array.find((index) => index == search_Numbers)
// ? :

//restrict albhabets,special characters,minus key and exponent keys
function avoidnegative(event) {
  event.key === "-" || event.key === "e" || event.key === "E"
    ? event.preventDefault()
    : null;
}

//reset all the input and display fields
function reset() {
  resetAll.forEach((input) => (input.value = ""));
  display_Number.value = "";
  employee_Array = [];
}
