/**
                                        Name of the challenge : Number pattern                        
                                        Challenge No          : 13                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 26/9/2023     
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
let enter_FirstName = document.getElementById("first_Name");
let enter_SecondName = document.getElementById("second_Name");
let enter_ThirdName = document.getElementById("third_Name");
let enter_FourthName = document.getElementById("fourth_Name");
let search_Text = document.getElementById("search_Name");
let display_Output = document.getElementById("display_Search");
let resetAll = document.querySelectorAll("input");
  
//Error declaration
const FIRST_ERROR = "Please Enter First Employee Name";
const SECOND_ERROR = "Please Enter Second Employee Name";
const THIRD_ERROR = "Please Enter Third Employee Name";
const FOURTH_ERROR = "Please Enter Fourth Employee Name";
const SEARCH_ERROR = "Please Enter the Search Employee Name";
  
  
//Main function
const searchEmployee = () => {
    let first_Employee = enter_FirstName.value.replaceAll(' ','').toLowerCase() ;
    let second_Employee = enter_SecondName.value.replaceAll(' ','').toLowerCase();
    let third_Employee = enter_ThirdName.value.replaceAll(' ','').toLowerCase();
    let fourth_Employee = enter_FourthName.value.replaceAll(' ','').toLowerCase();
    let search_Employee = search_Text.value.replaceAll(' ','').toLowerCase();
    first_Employee == '' ? alert(FIRST_ERROR) : 
    second_Employee == '' ? alert(SECOND_ERROR) : 
    third_Employee == '' ? alert(THIRD_ERROR) : 
    fourth_Employee == '' ? alert(FOURTH_ERROR) :
    search_Employee == '' ? alert(SEARCH_ERROR) :
    (first_Employee == search_Employee) || (second_Employee == search_Employee) || (third_Employee == search_Employee) || (fourth_Employee == search_Employee)
     ? display_Output.value = search_Employee + "  is available" : display_Output.value = search_Employee +' not available';

} 

function onlyAlphabet(event){
    const ch=event.charCode;
    if(/[a-zA-Z\s]/.test(String.fromCharCode(ch))){
        return true;
    }else{
        return false;
    }
}
  
  //reset all the input and display fields
  function reset() {
    resetAll.forEach((input) => (input.value = ""));
  }
  