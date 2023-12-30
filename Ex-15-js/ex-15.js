/**
                                        Name of the challenge : Number pattern                        
                                        Challenge No          : 15                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 27/9/2023     
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
let enter_Name = document.getElementById("first_Name");
let display_Names = document.getElementById("display_Employees_Name");
let search_Text = document.getElementById("search_Name");
let display_Output = document.getElementById("display_Search");
let resetAll = document.querySelectorAll("input");
  
//Error declaration
const EMPTY_ERROR = "Please Enter Employee Name";
const SEARCH_ERROR = "Please Enter the Search Employee Name";
const RANGE_ERROR = "Add only Four Employees Names"
const SAME_ERROR = "Same Name cannot Add"
  
let employee_Array = [];
//Main function
const add_Name = () => {
    let employee_Names = enter_Name.value;
    employee_Names == '' ? alert(EMPTY_ERROR) 
      :(employee_Array.length < 4) ?
        (employee_Array.every((i) => (i !=employee_Names))) ?
          (employee_Array.push(employee_Names) , enter_Name.value = '' , display_Names.value = employee_Array.join('\n'))
        : alert(SAME_ERROR)  
      :alert(RANGE_ERROR) , enter_Name.value = '';


} 
const searchEmployee = () => {
    let search_Employee = search_Text.value;
    search_Employee == '' ? alert(SEARCH_ERROR) :
      // employee_Array.find((index) => index.replaceAll(' ','').toLowerCase() == search_Text.value.replaceAll(' ','').toLowerCase() ) 
      employee_Array.filter((index) => index.replaceAll(' ','').toLowerCase() == search_Text.value.replaceAll(' ','').toLowerCase() ) 
      ? display_Output.value = search_Employee + ' is available' :
      display_Output.value = search_Employee + ' not available'
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
    display_Names.value = "";
    employee_Array = [];
  }
  