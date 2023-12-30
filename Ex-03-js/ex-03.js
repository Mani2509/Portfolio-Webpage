/**
                                                    Name of the challenge : Time                        
                                                    Challenge No          : 3                                              
                                                    Developed for         : VHITECH Training Program         
                                                                Maintenance History                                                    
                                                    Developer             : K.Manikandan                                                      
                                                    Creation date         : 11/9/2023     
                                                    Ticket No             :               
                                                    **/

//Date and Time declaration
function datetime() {
  let currentDay = new Date();
  document.getElementById("current-date").innerText ="Date : " +currentDay.toLocaleDateString();
  document.getElementById("current-time").innerText ="Time : " + currentDay.toLocaleTimeString("en-us");
}
setInterval(datetime, 1000);

//Dom declaration
let userAge = document.getElementById("input-age");
let GiveGender=document.querySelectorAll('input[type="radio"]');
let Eligible = document.getElementById("displayoutput");
let DisplayOutput= document.getElementById("displayoutput");
const GiveAge=document.querySelectorAll("input");
const SelectMale=document.getElementById('gen-male');
const SelectFemale=document.getElementById('gen-female');

//Error declaration
const ERROR_MESSAGE = "Please Enter The Input Value";
const GENDER_ERROR = "Selete  Gender";
const AGE_RANGE_ERROR = "Enter the age range 1 to 110"

//const declration
const maleMarriageAge=21;
const femaleMarriageAge=18;

//Main function
function avoidnegative(event){
  event.key ==='-' || event.key ==='e' || event.key ==='E' ? event.preventDefault() : null;
}
function validateage(){
  let inputage=parseInt(userAge.value);
  if((userAge.value=='')){
    alert(ERROR_MESSAGE);
  }
  else if((!SelectMale.checked && !SelectFemale.checked)){
      alert(GENDER_ERROR);
  }
  else if( (inputage<1) || (inputage>110) ){
      alert(AGE_RANGE_ERROR);
      userAge.value = "";
      DisplayOutput.value="";
  }
  else{
      ((SelectMale.checked)) 
        ? ((inputage>=maleMarriageAge))
          ? DisplayOutput.value="He is eligible for marriage"
          : DisplayOutput.value="He is not eligible for marriage" 
        :(inputage>=femaleMarriageAge)
          ? DisplayOutput.value="She is eligible for marriage"
          : DisplayOutput.value="She is not eligible for marriage";
      }
}
function reset() {
  userAge.value = "";
  DisplayOutput.value="";
  GiveGender.forEach(radio => radio.checked = false);
}
