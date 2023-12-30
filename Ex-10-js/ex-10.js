/**
                                        Name of the challenge : perfect                        
                                        Challenge No          : 10                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 20/9/2023     
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
  let firstNumber = document.getElementById("input-firstNumber");
  let secondNumber = document.getElementById("input-secondNumber");
  let selectLoop = document.getElementById("selectOption");
  let perfectFor = document.getElementById("displayPerfectFor");
  let perfectWhile = document.getElementById("displayPerfectWhile");
  let perfectDowhile = document.getElementById("displayPerfectDowhile");
  let resetAll = document.querySelectorAll("input");
  let allOutput = document.querySelectorAll("textarea");
  
  //Error declaration
  const ERROR_MESSAGE = "Please Enter The Number";
  const RANGE_ERROR = "Please Enter The Number range 1 to 1000";
  const COMPARE_ERROR = "Please Enter The second number higerthan first number";
  const SAME_ERROR = "Two numbers are same"  

  //const declaration
  const minNumber = 1;
  const maxNumber = 1000;
  
  //Main function
  const calculate = () => {
    let userFirstInput = (firstNumber.value);
    let userSecondInput = (secondNumber.value);
    if(((userFirstInput == '') || (userSecondInput == ''))){ 
      alert(ERROR_MESSAGE);
      selectLoop.value = 'select'; 
    }else{
      (userFirstInput < minNumber || userFirstInput > maxNumber) ?
      (alert(RANGE_ERROR) , firstNumber.value = '' , selectLoop.value = 'select') :
      (userSecondInput < minNumber || userSecondInput > maxNumber) ?
      (alert(RANGE_ERROR) , secondNumber.value = '' , selectLoop.value = 'select') :
      (userFirstInput == userSecondInput) ?
      (alert(SAME_ERROR) , selectLoop.value = 'select') : 
      ((userFirstInput=parseInt(firstNumber.value)) > (userSecondInput=parseInt(secondNumber.value))) ?
      (alert(COMPARE_ERROR) , secondNumber.value = '' , selectLoop.value = 'select') :
      perfectFor.value = '';
      perfectWhile.value = '';
      perfectDowhile.value = '';
      // for loop
      if(selectLoop.value == 'forLoop'){
        let answer = [];
        for(let index = userFirstInput; index <= userSecondInput; index++){
          if(index == perfect(index)){
            answer.push(perfect(index));
            perfectFor.value = answer.join('\n');
          }
        }
      }
      //while loop
      if(selectLoop.value == 'whileLoop'){
        let answer = [];
        for(let index = userFirstInput; index <= userSecondInput; index++){
          if(index == perfect(index)){
            answer.push(perfect(index));
            perfectWhile.value = answer.join('\n');
          }
        }
      }
      //do-while loop
      if(selectLoop.value == 'doWhileLoop'){
        let answer = [];
        for(let index = userFirstInput; index <= userSecondInput; index++){
          if(index == perfect(index)){
            answer.push(perfect(index));
            perfectDowhile.value = answer.join('\n');
          }
        }
      }
    }   
  }
// calculate and find perfect numbers in given range
  const perfect = (givenFirstNumber) => {
    let perfect_Array =[];
    let inputNumber = givenFirstNumber;
    for(let loop = 1; loop < inputNumber; loop++){
      if(inputNumber % loop == 0){
        perfect_Array.push(loop);
      }
    }
    let perfectNumber=perfect_Array.reduce((total,current)=>(total + current),0);
    return perfectNumber;  
  }

  //restrict albhabets,special characters,minus key and exponent keys
  function avoidnegative(event){
    event.key ==='-' || event.key ==='e' || event.key ==='E' ? event.preventDefault() : null;
  }
  
  //reset all the input and display fields
  function reset() {
    resetAll.forEach((input) => (input.value = ""));
    allOutput.forEach((textarea) => (textarea.value = ""));
    selectLoop.value = 'select';
  }
  