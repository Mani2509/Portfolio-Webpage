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
let totol_Employees = document.getElementById("total_Number");
let employee_Number = document.getElementById("enter_Number");
let employee_Name = document.getElementById("enter_Name");
let employee_Department = document.getElementById("enter_Department");
let display_Employees = document.getElementById("employee_Table");
let display_Sort_Employees = document.getElementById("employee_Sort");
let search_Text = document.getElementById("search_Name");
let display_Names = document.getElementById("display_Employees_Name");
let resetAll = document.querySelectorAll("input");

//Error declaration
const EMPTY_TOTALNUMBER_ERROR = "Please Enter Total Number of Employees";
const EMPTY_NUMBER_ERROR = "Please Enter Employee Number";
const EMPTY_NAME_ERROR = "Please Enter Employee Name";
const EMPTY_DEPARTMENT_ERROR = "Please Enter Employee Department";
const SEARCH_ERROR = "Please Enter the Search Employee Name";
const RANGE_ERROR = " employee Names only allowed";
const SAME_ERROR = "Cannot Add Same Employee Number";

//Main function
let employee_Array = [];
let once = 0;
const add_Name = () => {
  let no_of_emp = totol_Employees.value;
    let worker_Number = employee_Number.value;
    let worker_Name = employee_Name.value;
    let worker_Deapartment = employee_Department.value;
    if (no_of_emp == "") {
      alert(EMPTY_TOTALNUMBER_ERROR);
    } else if (worker_Number == "") {
      alert(EMPTY_NUMBER_ERROR);
    } else if (worker_Name == "") {
      alert(EMPTY_NAME_ERROR);
    } else if (worker_Deapartment == "") {
      alert(EMPTY_DEPARTMENT_ERROR);
    } else {
      //give total number emp only allowed
      if (once < no_of_emp) {
        //same emp number not allowed
        if (employee_Array.every((s) => s[0] != worker_Number)) {
          // create new row and cells(each row have three cells)
          create_Row = display_Employees.insertRow(-1);
          create_Cell_One = create_Row.insertCell(0);
          create_Cell_Two = create_Row.insertCell(1);
          create_Cell_Three = create_Row.insertCell(2);
          employee_Array.push([worker_Number, worker_Name, worker_Deapartment]);
          employee_Number.value = employee_Name.value = employee_Department.value =  "";
          create_Cell_One.innerText = worker_Number;
          create_Cell_Two.innerText = worker_Name;
          create_Cell_Three.innerText = worker_Deapartment;
          once++;
        } else {
          alert(SAME_ERROR);
          employee_Number.value = "";
        }
      } else {
        alert( once+RANGE_ERROR);
        employee_Number.value = employee_Name.value = employee_Department.value = "";
        
      }
    }
  
};

//sort given employee names based on emp number
const sortEmployee = () => {
  let sort_array = employee_Array.sort((first, second) => first[0] - second[0]);
  for (let index = 0; index < sort_array.length; index++) {
    create_Row = display_Sort_Employees.insertRow(-1);
    create_Cell_One = create_Row.insertCell(0);
    create_Cell_Two = create_Row.insertCell(1);
    create_Cell_Three = create_Row.insertCell(2);
    create_Cell_One.innerText = sort_array[index][0];
    create_Cell_Two.innerText = sort_array[index][1];
    create_Cell_Three.innerText = sort_array[index][2];
  }
};

//search emp name
const searchEmployee = () => {
  let search_Employee = search_Text.value;
  if (search_Employee == "") {
    alert(SEARCH_ERROR);
  } else {
    let search_Array = employee_Array.filter((index) => {
      for (let sub_index = 0; sub_index < index.length; sub_index++) {
        if (sub_index == 1) {
          if (
            index[sub_index].replaceAll(" ", "").toLowerCase() ==
            search_Employee.replaceAll(" ", "").toLowerCase()
          ) {
            return index;
          }
        }
      }
    });
    if (search_Array.length > 0) {
      display_Names.value = search_Array.join("\n");
    } else {
      display_Names.value = search_Employee + " is not avaiable";
    }
  }
};

function onlyAlphabet(event) {
  const ch = event.charCode;
  if (/[a-zA-Z\s]/.test(String.fromCharCode(ch))) {
    return true;
  } else {
    return false;
  }
}
//restrict albhabets,special characters,minus key and exponent keys
function avoidnegative(event) {
  event.key === "-" || event.key === "e" || event.key === "E"
    ? event.preventDefault()
    : null;
}

//reset all the input and display fields
function reset() {
  let no_of_emp = totol_Employees.value;
  resetAll.forEach((input) => (input.value = ""));
  display_Names.value = "";
  employee_Array = [];
  for (let loop = no_of_emp; loop > 0; loop--) {
    display_Employees.deleteRow(loop);
  }
  for (let loop = no_of_emp; loop > 0; loop--) {
    display_Sort_Employees.deleteRow(loop);
  }
}
