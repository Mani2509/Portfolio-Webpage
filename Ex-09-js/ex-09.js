/**
                                        Name of the challenge : palindrome                        
                                        Challenge No          : 9                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 19/9/2023     
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
  let palindromeFor = document.getElementById("displayPalindromeFor");
  let palindromeWhile = document.getElementById("displayPalindromeWhile");
  let palindromeDowhile = document.getElementById("displayPalindromeDowhile");
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
      palindromeFor.value = '';
      palindromeWhile.value = '';
      palindromeDowhile.value = '';
      // for loop
      if(selectLoop.value == 'forLoop'){
        let palindrome_Array =[];
        for(let index = userFirstInput; index <= userSecondInput; index++){
          if(palindrome(index)){
            palindrome_Array.push((index));
            palindromeFor.value = palindrome_Array.join('\n');
          }
        }
      }
      //while loop
      if(selectLoop.value == 'whileLoop'){
        let palindrome_Array=[];
        let index = userFirstInput;
        while (index <= userSecondInput) {
          if(palindrome(index)){
            palindrome_Array.push((index));
            palindromeWhile.value = palindrome_Array.join('\n');
          }
          index++;
        } 
      }
      //do-while loop
      if(selectLoop.value == 'doWhileLoop'){
        let index = userFirstInput;
        let palindrome_Array=[];
        do{
          if(palindrome(index)){
            palindrome_Array.push((index));
            palindromeDowhile.value = palindrome_Array.join('\n');
          }
          index++;
        }while (index <= userSecondInput)
      }
    }  
  }

  //calculate and find palindrome numbers in given range
  const palindrome = (givenFirstNumber) => {
    let inputNumber = givenFirstNumber;
    let reversedNumber = 0;
    let remainder;
    while(inputNumber > 0){
      remainder = inputNumber % 10;
      reversedNumber = reversedNumber * 10 + remainder;
      inputNumber = Math.floor(inputNumber / 10);
    }
    if(givenFirstNumber == reversedNumber){
      return givenFirstNumber;
    }
    
  }
  function avoidnegative(event){
    event.key ==='-' || event.key ==='e' || event.key ==='E' ? event.preventDefault() : null;
  }
  
  function reset() {
    resetAll.forEach((input) => (input.value = ""));
    allOutput.forEach((textarea) => (textarea.value = ""));
    selectLoop.value = 'select';
  }
  