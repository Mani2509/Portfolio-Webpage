/**
                                        Name of the challenge : reverse and leap year                        
                                        Challenge No          : 8                                            
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
  let firstDate = document.getElementById("input-firstDate");
  let secondDate = document.getElementById("input-secondDate");
  let selectLoop = document.getElementById("selectOption");
  let reverseYears = document.getElementById("displayReverseYearsFor");
  let leapYears = document.getElementById("displayLeapYearsFor");
  let totalLeap = document.getElementById("displayTotalLeapFor");
  let reverseYearsWhile = document.getElementById("displayReverseYearsWhile");
  let leapYearswhile = document.getElementById("displayLeapYearsWhile");
  let totalLeapWhile = document.getElementById("displayTotalLeapWhile");
  let reverseYearsDowhile = document.getElementById("displayReverseYearsDowhile");
  let leapYearsDowhile = document.getElementById("displayLeapYearsDowhile");
  let totalLeapDowhile = document.getElementById("displayTotalLeapDowhile");
  let resetAll = document.querySelectorAll("input");
  let allOutput = document.querySelectorAll("textarea");
  
  //Error declaration
  const ERROR_MESSAGE = "Please Enter The Date";
  const RANGE_ERROR = "Please Enter The date range 1900 to 2500";
  const COMPARE_ERROR = "Please Enter The second Date higerthan first date";
  const SAME_YEAR_ERROR = "Two Years are same"  

  //const declaration
  // const lowYear = "1900-01-01";
  // const highYear = "2500-12-31";
  
  //Main function
  calculate = () => {
    let selectFirstDate = new Date(firstDate.value);
    let selectSecondtDate = new Date(secondDate.value);
    const minYear = new Date("1900");
    const maxYear = new Date("2500");
    const minimumDate = minYear.getFullYear();
    const maximumDate = maxYear.getFullYear();
    let dateRegular = /\d{4}-\d{1,2}-\d{1,2}/;
    if(dateRegular.test(firstDate.value) && (dateRegular.test(secondDate.value))){
      if((selectFirstDate.getFullYear() >= minimumDate && selectFirstDate.getFullYear() <= maximumDate) && (selectSecondtDate.getFullYear() >= minimumDate && selectSecondtDate.getFullYear() <= maximumDate)) {
        if(selectFirstDate.getFullYear() === selectSecondtDate.getFullYear()){
          alert(SAME_YEAR_ERROR);
          reset();
        }else if(selectFirstDate.getFullYear() > selectSecondtDate.getFullYear()){
          alert(COMPARE_ERROR);
          secondDate.value='';
          selectLoop.value = 'select';
        }else{
          reverseYearsDowhile.value = leapYearsDowhile.value = totalLeapDowhile.value = '';
          reverseYearsWhile.value = leapYearswhile.value = totalLeapWhile.value = '';
          reverseYears.value = leapYears.value = totalLeap.value = '';
          //for loop 
          if(selectLoop.value == 'forLoop'){
            let betweenYears = [];
            let leapYear = [];
            //display between years in reverse order using for loop
            for(let index=selectSecondtDate.getFullYear(); index >= selectFirstDate.getFullYear(); index--){
              betweenYears.push(index);
              reverseYears.value=betweenYears.join('\n');
            }
            //display leapyears between given years and total count of leap years
            let count = 0;
            for(let leapIndex = betweenYears.length-1; leapIndex >=0; leapIndex--){
              let leapOrder =betweenYears[leapIndex] 
              if((leapOrder % 4 == 0) && !(leapOrder % 100 ==0) || (leapOrder % 400 == 0)){
                count++;
                leapYear.push(leapOrder)
                leapYears.value = leapYear.join('\n');
                totalLeap.value = count;
              }
            }
          }
          // while loop
          else if(selectLoop.value == 'whileLoop'){
            let betweenYears =[];
            let leapYear = [];
            //display between years in reverse order using while loop
            let index =selectSecondtDate.getFullYear();
            while(index >=selectFirstDate.getFullYear()){
              betweenYears.push(index);
              reverseYearsWhile.value=betweenYears.join('\n');
              index--
            }
            //display leapyears between given years and total count of leap years
            let count = 0;
            let leapIndex = betweenYears.length-1;
            while(leapIndex >=0){
              let leapOrder =betweenYears[leapIndex] 
              if((leapOrder % 4 == 0) && !(leapOrder % 100 ==0) || (leapOrder % 400 == 0)){
                count++;
                leapYear.push(leapOrder)
                leapYearswhile.value = leapYear.join('\n');
                totalLeapWhile.value = count;
              }
              leapIndex--
            }
          }
          //do while loop
          else if(selectLoop.value == 'doWhileLoop'){
            let betweenYears =[];
            let leapYear = [];
            //display between years in reverse order using do-while loop
            let index =selectSecondtDate.getFullYear();
            do{
              betweenYears.push(index);
              reverseYearsDowhile.value=betweenYears.join('\n');
              index--
            }while(index >= selectFirstDate.getFullYear())
            //display leapyears between given years and total count of leap years
            let count = 0;
            let leapIndex = betweenYears.length-1;
            do{
              let leapOrder =betweenYears[leapIndex] 
              if((leapOrder % 4 == 0) && !(leapOrder % 100 ==0) || (leapOrder % 400 == 0)){
                count++;
                leapYear.push(leapOrder)
                leapYearsDowhile.value = leapYear.join('\n');
                totalLeapDowhile.value = count;
              }
              leapIndex--
            }while(leapIndex >= 0)
          }
          else{
            allOutput.forEach((textarea) => (textarea.value = ""));
            totalLeap.value = totalLeapWhile.value = totalLeapDowhile.value = '';
          }
        }
      }else if((selectFirstDate.getFullYear() < minimumDate || selectFirstDate.getFullYear() > maximumDate)){
        alert(RANGE_ERROR);
        selectLoop.value = 'select';
        firstDate.value = '';
      }else{
        alert(RANGE_ERROR);
        selectLoop.value = 'select';
        secondDate.value = '';
      }
    }else{
      alert(ERROR_MESSAGE);
      selectLoop.value = 'select';
    }
      
  }
  
  function reset() {
    resetAll.forEach((input) => (input.value = ""));
    allOutput.forEach((textarea) => (textarea.value = ""));
    selectLoop.value = 'default';
  }
  