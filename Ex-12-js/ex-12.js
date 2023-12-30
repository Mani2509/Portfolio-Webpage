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
const RANGE_ERROR = "Please Enter The Number range 1 to 5";
const TYPE_ERROR = "select the type";
  
//const declaration
const minNumber = 1;
const maxNumber = 10;
  
//Main function
const loopSelect = () => {
let userInput = enterInput.value;
let loopChoice = selectLoop.selectedIndex;
let emptyFor =  patternWhile.value='';
let emptyWhile =  patternDowhile.value='';
let emptyDoWhile =  patternFor.value='';
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
            for (let index = userInput; index >= 1; index--) {
                let loopString = "";     
                for(let digit = 1; digit <= index; digit++){
                    loopString += digit;
                }
                console.log(" ".repeat(userInput - index) + loopString + loopString.slice(0,index-1).split('').reverse().join(''));
            
            }




            // ---------------------for loop--------------------------
            // let loopString = "";
            // //up pyramid
            // for (let outer = 1; outer <= userInput; outer++) {
            // for (let innerOne = userInput; innerOne > outer; innerOne--) {
            //     loopString += "  ";
            // }
            // for (let innerTwo = 1; innerTwo <= (outer * 2) - 1; innerTwo++) {
            //     if(outer >= innerTwo){
            //         loopString =loopString + innerTwo;
            //     }else{
            //         loopString =loopString + ((outer * 2) - innerTwo);
            //     }
            // }
            // loopString =loopString + "\n";
            // }
            //down pyramid
            // for (let outer = userInput-1; outer > 0; outer--) {
            //     let count=1;
            // for (let innerOne = 1; innerOne <=userInput- outer ; innerOne++) {
            //     loopString += "  ";
            // }  
            // for (let innerTwo = 1 ; innerTwo <= outer; innerTwo++) {
            //     loopString = loopString + count++; 
            // }
            // count=count-2;
            // for(let inner = 1;inner <= outer - 1; inner++){
            //     loopString = loopString + count--;
            // }
            // loopString = loopString + "\n";
            // }
            // patternFor.value = loopString + emptyWhile + emptyDoWhile;
            break;
        case 2:
            //---------------while loop------------------------
            let whileString = "";
            let whileOuter = 1;
            while(whileOuter <= userInput) {
                let whileInnerOne = userInput;
                while(whileInnerOne > whileOuter) {
                    whileString += "  ";
                    whileInnerOne--;
                }
                let whileInnerTwo = 1;
                while(whileInnerTwo <= (whileOuter * 2) - 1) {
                    if(whileOuter >= whileInnerTwo){
                        whileString =whileString + whileInnerTwo;
                    }else{
                        whileString =whileString + ((whileOuter * 2) - whileInnerTwo);
                    }                
                    whileInnerTwo++;
                }
                whileString += "\n";
                whileOuter++;
            }
            //down pyramid
            let down_WhileOuter =  userInput - 1;
            while(down_WhileOuter > 0) {
                let count = 1;
                let down_WhileInnerOne = 1;
                while( down_WhileInnerOne <= userInput - down_WhileOuter) {
                    whileString += "  ";
                    down_WhileInnerOne++;
                }
                let down_WhileInnerTwo = 1;
                while( down_WhileInnerTwo <= down_WhileOuter) {
                whileString =whileString + count++;
                down_WhileInnerTwo++;
                }
                count=count-2;
                let inner = 1;
                while(inner <= down_WhileOuter - 1){
                    whileString = whileString + count--;
                    inner++;
                }
            whileString += "\n";
            down_WhileOuter--;
            }      
            patternWhile.value = whileString + emptyFor + emptyDoWhile; 
            break;
        case 3:    //----------------do-while loop----------------------------
            let doWhileString = "";
            let doWhileOuter = 1;
            do{
                let doWhileInnerOne = userInput;
                while(doWhileInnerOne > doWhileOuter){
                    doWhileString += "  ";
                    doWhileInnerOne--;
                }
                let doWhileInnerTwo = 1;
                while(doWhileInnerTwo <= (doWhileOuter * 2) - 1) {
                    if(doWhileOuter >= doWhileInnerTwo){
                        doWhileString =doWhileString + doWhileInnerTwo;
                    }else{
                        doWhileString =doWhileString + ((doWhileOuter * 2) - doWhileInnerTwo);
                    }                    
                    doWhileInnerTwo++;
                }
                doWhileString += "\n";
                doWhileOuter++;
            }while(doWhileOuter <= userInput)
            //down pyramid
            let down_doWhileOuter =  userInput - 1;
            do{
                let count = 1;
                let down_doWhileInnerOne = 1;
                while( down_doWhileInnerOne <= userInput - down_doWhileOuter) {
                    doWhileString += "  ";
                    down_doWhileInnerOne++;
                }
                let down_doWhileInnerTwo = 1;
                while( down_doWhileInnerTwo <= down_doWhileOuter) {
                doWhileString =doWhileString + count++;
                down_doWhileInnerTwo++;
                }
                count=count-2;
                let inner = 1;
                while(inner <= down_doWhileOuter - 1){
                    doWhileString = doWhileString + count--;
                    inner++;
                }
                doWhileString += "\n";
                down_doWhileOuter--;
            }while(down_doWhileOuter > 0) 
            patternDowhile.value = doWhileString + emptyFor + emptyWhile; 
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
  