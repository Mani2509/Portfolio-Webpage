/**
                                        Name of the challenge : Star pattern                        
                                        Challenge No          : 11                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 22/9/2023     
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
let selectText = document.getElementById("inputPattern");
let selectType = document.getElementById("typeOption");
let selectLoop = document.getElementById("loopOption");
let patternFor = document.getElementById("displayPatternFor");
let patternWhile = document.getElementById("displayPatternWhile");
let patternDowhile = document.getElementById("displayPatternDowhile");
let resetAll = document.querySelectorAll("select");
let allOutput = document.querySelectorAll("textarea");

//Error declaration
const ERROR_MESSAGE = "Please Enter The Number";
const RANGE_ERROR = "Please Enter The Number range 1 to 6";
const TEXT_ERROR = "Enter any the text or character";
const TYPE_ERROR = "select the type";

//const declaration
const minNumber = 1;
const maxNumber = 6;

//Main function
// select the type check
const typeSelect = () => {
  let userFirstInput = enterInput.value;
  let userPatternInput = selectText.value;
  (userFirstInput == "") ? (alert(ERROR_MESSAGE), (selectType.selectedIndex = '0')) :
  (userFirstInput < minNumber || userFirstInput > maxNumber) ? (alert(RANGE_ERROR) , reset()) : 
  (userPatternInput == "") ? (alert(TEXT_ERROR), (selectType.selectedIndex = '0')) : null;
  return userFirstInput;
};

//select loop
const loopSelect = () => {
  let userInput = typeSelect();
  let userPattern = selectText.value;
  let typechoice = selectType.selectedIndex;
  let loopChoice = selectLoop.selectedIndex;
  let emptyFor =  patternWhile.value='';
  let emptyWhile =  patternDowhile.value='';
  let emptyDoWhile =  patternFor.value='';

  if (selectType.value == "select") {
    alert(TYPE_ERROR);
    selectLoop.value = "select";
  }
  switch(typechoice){
    case 1:       // repeat method
      switch(loopChoice){
        case 1:     
          patternFor.value = methodPattern_forLoop(userInput, userPattern) + emptyWhile + emptyDoWhile;
          break;
        case 2:      
          patternWhile.value = methodPattern_whileLoop(userInput, userPattern) + emptyFor + emptyDoWhile; 
          break;
        case 3:         
          patternDowhile.value = methodPattern_doWhileLoop(userInput, userPattern) + emptyFor + emptyWhile;
          break;
      }
      break;
    case 2:       // non-repeat method
      switch(loopChoice){
        case 1:     
          patternFor.value = loopPattern_forLoop(userInput, userPattern) + emptyWhile + emptyDoWhile;
          break;
        case 2:      
          patternWhile.value = loopPattern_whileLoop(userInput, userPattern) + emptyFor + emptyDoWhile; 
          break;
        case 3:         
          patternDowhile.value = loopPattern_doWhileLoop(userInput, userPattern) + emptyFor + emptyWhile;
          break;
      }
      break;
  }

}

                //create diamond star pattern using loop only (without repeat method)
// ---------------------for loop--------------------------
const loopPattern_forLoop = (getInput, getPattern) => {
let loopString = "";
//up pyramid
for (let outer = 1; outer <= getInput; outer++) {
  for (let innerOne = getInput; innerOne > outer; innerOne--) {
    loopString += "  ";
  }
  for (let innerTwo = 1; innerTwo <= (outer * 2) - 1; innerTwo++) {
    loopString =loopString + getPattern;
  }
  loopString =loopString + "\n";
}
//down pyramid
for (let oute = 1; oute <= getInput-1  ; oute++) {
  for (let inneOne = 0; inneOne < oute ; inneOne++) {
    loopString += "  ";
  }
  for (let inneTwo = (getInput - oute) * 2 - 1; inneTwo > 0; inneTwo--) {
    loopString =loopString + getPattern;
  }
  loopString = loopString + "\n";
}
return loopString;
};

//---------------while loop------------------------
const loopPattern_whileLoop =(getInput, getPattern) => {
  let whileString = "";
  let whileOuter = 1;
  while(whileOuter <= getInput) {
    let whileInnerOne = getInput;
    while(whileInnerOne > whileOuter) {
      whileString += "  ";
      whileInnerOne--;
    }
    let whileInnerTwo = 0;
    while(whileInnerTwo < (whileOuter * 2) - 1) {
      whileString += getPattern ;
      whileInnerTwo++;
    }
    whileString += "\n";
    whileOuter++;
  }
  //down pyramid
  let down_WhileOuter = 1;
  while(down_WhileOuter <= getInput - 1) {
    let down_WhileInnerOne = 0;
    while( down_WhileInnerOne < down_WhileOuter) {
      whileString += "  ";
      down_WhileInnerOne++;
    }
    let down_WhileInnerTwo = (getInput - down_WhileOuter) * 2 - 1;
    while( down_WhileInnerTwo > 0) {
      whileString += getPattern;
      down_WhileInnerTwo--;
    }
    whileString += "\n";
    down_WhileOuter++;
  }
  return whileString;
};

// -----------do-while loop---------------  
const loopPattern_doWhileLoop = (getInput, getPattern) => {
//up pyramid
let doWhileString = "";
let doWhileOuter = 1;
do{
  let doWhileInnerOne = getInput;
  while(doWhileInnerOne > doWhileOuter){
    doWhileString += "  ";
    doWhileInnerOne--;
  }
  let doWhileInnerTwo = 0;
  while(doWhileInnerTwo < (doWhileOuter * 2) - 1) {
    doWhileString += getPattern;
    doWhileInnerTwo++;
  }
    doWhileString += "\n";
  
  doWhileOuter++;
}while(doWhileOuter <= getInput)
//down pyramid
let down_doWhileOuter = 1;
do{
  let down_doWhileInnerOne = 0;
  while( down_doWhileInnerOne < down_doWhileOuter) {
    doWhileString += "  ";
    down_doWhileInnerOne++;
  }
  let down_doWhileInnerTwo = (getInput - down_doWhileOuter) * 2 - 1;
  while( down_doWhileInnerTwo > 0){
    doWhileString += getPattern;
    down_doWhileInnerTwo--;
  }
  doWhileString += "\n";
  down_doWhileOuter++;
}while(down_doWhileOuter <= getInput - 1) 
return doWhileString;        
};

                //create diamond star pattern using repeat method
// ----------For loop using repeat method---------------
const methodPattern_forLoop = (getInput, getPattern) => {
  let methodString = "";
  for (let index = 0; index <= getInput; index++) {
    methodString += (" ".repeat(getInput - index)).repeat(2) + (getPattern.repeat((index+1) * 2 - 1)) + "\n";
  }
  for (let index = getInput; index > 0; index--) {
    methodString +=  (" ".repeat(getInput - index+1)).repeat(2) + (getPattern.repeat((index-1) * 2 + 1)) + "\n";
  }
  return methodString;
};

//------------- while loop using repeat method-----------------
const methodPattern_whileLoop = (getInput, getPattern) => {
  let methodString = "";
  let index = 0;
  while( index <= getInput) {
    methodString +=  ((" ").repeat(getInput - (index))).repeat(2) + (getPattern.repeat((index+1) * 2 - 1)) + "\n";
    index++;
  }
  let down_Index = getInput;
  while( down_Index > 0) {
    methodString += (" ".repeat(getInput - down_Index+1)).repeat(2) + (getPattern.repeat((down_Index-1) * 2 + 1)) + "\n";
    down_Index--;
  }
  return methodString;
};

//------------- do-while loop using repeat method-----------------
const methodPattern_doWhileLoop = (getInput, getPattern) => {
  let methodString = "";
  let index = 0;
  do{
    methodString +=  ((" ").repeat(getInput - (index))).repeat(2) + (getPattern.repeat((index+1) * 2 - 1)) + "\n";
    index++;
  }while( index <= getInput) 
  let down_Index = getInput;
  do{
    methodString += (" ".repeat(getInput - down_Index+1)).repeat(2) + (getPattern.repeat((down_Index-1) * 2 + 1)) + "\n";
    down_Index--;
  }while( down_Index > 0)
  return methodString;
};


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
  selectText.value = "";
}
