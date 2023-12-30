/**
                                        Name of the challenge : Number pattern                        
                                        Challenge No          : 12                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 25/9/2023     
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
let enterInput = document.getElementById("inputNumber");
let selectLoop = document.getElementById("loopOption");
let patternFor = document.getElementById("displayPatternFor");
let patternWhile = document.getElementById("displayPatternWhile");
let patternDowhile = document.getElementById("displayPatternDowhile");
let resetAll = document.querySelectorAll("select");
let allOutput = document.querySelectorAll("textarea");
  
//Error declaration
const ERROR_MESSAGE = "Please Enter The Number";
const RANGE_ERROR = "Please Enter The Number range 1 to 10";
const TYPE_ERROR = "select the type";
  
//const declaration
const minNumber = 1;
const maxNumber = 10;
  
//Main function
const loopSelect = () => {
let userInput = enterInput.value;
let loopChoice = selectLoop.selectedIndex;
if(userInput == ""){
    alert(ERROR_MESSAGE);
    selectLoop.value = 'select';
}else if((userInput > maxNumber) || (userInput < minNumber)){
    alert(RANGE_ERROR);
    reset();
}else if(selectLoop.value == "select") {
    alert(TYPE_ERROR);
}else{
    switch(loopChoice){
        case 1:     
                    //---------------for loop------------------------
            //up pyramid
            let forloop = "";  
            for (let index = 1; index <= userInput; index++) {
                let row = "";
                for(let digit = 1; digit <= index; digit++){
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                }
                forloop += "  ".repeat(userInput - index) + row + row.slice(0,index-1).split('').reverse().join('') + "\n";
            }
            //down pyramid
            for (let index = userInput - 1; index >= 1; index--) {
                let row = "";
                for(let digit = 1; digit <= index; digit++){
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                }
                forloop += "  ".repeat(userInput - index) + row + row.slice(0,index-1).split('').reverse().join('') + "\n";
            }
            patternFor.value = forloop;
            break;
        case 2:
            //---------------while loop------------------------
            //up pyramid
            let while_Loop = "";  
            let while_Up_Index = 1;
            while (while_Up_Index <= userInput) {
                let row = "";
                let digit = 1;
                while( digit <= while_Up_Index){
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                    digit++;
                }
                while_Loop += " ".repeat(userInput - while_Up_Index) + row + row.slice(0,while_Up_Index-1).split('').reverse().join('') + "\n";
                while_Up_Index++;
            }
            //down pyramid
            let while_Down_Index = userInput - 1;
            while(while_Down_Index >= 1) {
                let row = "";
                let digit = 1;
                while(digit <= while_Down_Index){
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                    digit++;
                }
                while_Loop += "  ".repeat(userInput - while_Down_Index) + row + row.slice(0,while_Down_Index-1).split('').reverse().join('') + "\n";
                while_Down_Index--;
            }
            patternWhile.value = while_Loop;
            break;
        case 3:    //----------------do-while loop----------------------------
            //up pyramid
            let do_while_Loop = "";  
            let do_While_Up_Index = 1;
            do{
                let row = "";
                let digit = 1;
                do{
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                    digit++;
                }while( digit <= do_While_Up_Index)
                do_while_Loop += "  ".repeat(userInput - do_While_Up_Index) + row + row.slice(0,do_While_Up_Index-1).split('').reverse().join('') + "\n";
                do_While_Up_Index++;
            }while (do_While_Up_Index <= userInput)
            //down pyramid
            let do_While_Down_Index = userInput - 1;
            do {
                let row = "";
                let digit = 1;
                do{
                    if(digit != 10){
                        row += digit;
                    }else{
                        row += 0;
                    }
                    digit++;
                }while(digit <= do_While_Down_Index)
                do_while_Loop += "  ".repeat(userInput - do_While_Down_Index) + row + row.slice(0,do_While_Down_Index-1).split('').reverse().join('') + "\n";
                do_While_Down_Index--;
            }while(do_While_Down_Index >= 1)
            patternDowhile.value = do_while_Loop;
            break;
        }
            
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
    resetAll.forEach((select) => (select.value = "select"));
    allOutput.forEach((textarea) => (textarea.value = ""));
    enterInput.value = "";
  }
  