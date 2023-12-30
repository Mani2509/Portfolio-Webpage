/**
                                        Name of the challenge : Find day,weeknumber, weekend or not and until days left in christmas                        
                                        Challenge No          : 7                                            
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 15/9/2023     
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
  let inputDay = document.getElementById("displayDay");
  let inputMonth = document.getElementById("displayMonth");
  let betweenDays = document.getElementById("displayDayFromYear");
  let weekNumber = document.getElementById("displayWeekNo");
  let christmasDay = document.getElementById("displaychristmas");
  let weekend = document.getElementById("displayWeekend");
  let resetAll = document.querySelectorAll("input");
  
  //Error declaration
  const ERROR_MESSAGE = "Please Enter The Date ";
  const RANGE_ERROR = "Please Enter The date range 1900 to 2500";
  
  //const declaration
  const lowYear = "1900-01-01";
  const highYear = "2500-12-31";
  const minimumDate = new Date("1900");
  const daysOfMillisecond = 1000 * 60 * 60 * 24;
  const daysName = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
  const monthName = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

  //Main function
  calculate = () => {
    // get given date,day,year,month
    let selectDate = new Date(firstDate.value);
    let givenYear = selectDate.getFullYear();
    let givenDate = selectDate.getDate();
    let givenDay = selectDate.getDay();
    let givenMonth = selectDate.getMonth();
    let dateRegular = /\d{4}-\d{1,2}-\d{1,2}/;
    const minYear = new Date(lowYear);
    const maxYear = new Date(highYear);
    const minimumDate = minYear.getFullYear();
    const maximumDate = maxYear.getFullYear();
    //display the give day of name and month
    if(dateRegular.test(firstDate.value)){
      if(!(selectDate.getFullYear() >= minimumDate && selectDate.getFullYear() <= maximumDate) ){
        alert(RANGE_ERROR);
      }else{
        inputDay.value = daysName[givenDay];
      inputMonth.value = monthName[givenMonth];
      //calculate number of days from beginning of the year
      let beginDays = new Date(givenYear,0,1);
      let differBeginDays = Math.floor((selectDate - beginDays) / daysOfMillisecond);
      betweenDays.value = (differBeginDays);
      //weeknumber of month
      weekNumber.value = Math.ceil(givenDate / 7); 
      //Days Left until next christmas
      if(givenMonth == 11 && givenDate > 25){
          givenYear += 1;
      }
      const christmasDate = new Date(givenYear,11,25);
      christmasDay.value = Math.ceil((christmasDate.getTime() - selectDate.getTime()) / daysOfMillisecond);
      //display given date weekend or not
      if((givenDay == 0) || (givenDay == 6)){
        weekend.value = "weekend";
      }else{
        weekend.value = "Not weekend";
      }
      }
    }else{
      alert(ERROR_MESSAGE);
 
    }
    
   
  }
  
  function reset() {
    resetAll.forEach((input) => (input.value = ""));
  }
  