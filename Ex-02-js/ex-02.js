                             /**        Name of the challenge : Time                        
                                        Challenge No          : 2                                              
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 9/9/2023     
                                        Ticket No             :                        **/

//Date and Time declaration
function datetime(){
    let currentDay=new Date();
    document.getElementById('current-date').textContent='Date : '+ currentDay.toLocaleDateString();
    document.getElementById('current-time').textContent='Time : '+currentDay.toLocaleTimeString('en-in');
}
setInterval(datetime,1000);

//Dom declaration
let UserHourInput=document.getElementById('input-hour');
let UserMinuteInput=document.getElementById('input-minute');
let UserSecondInput=document.getElementById('input-second');
let secondOutput=document.getElementById('displaySecond');
let hourMinuteOutput=document.getElementById('displayHourMinute');
const RESET_ALL=document.querySelectorAll('input');

//Error declaration 
const ERROR_MESSAGE="Please Enter The Input Value or Not 0 value";

//CONST declaration
const PER_MINUTE= 60;
const PER_HOUR = 3600;

//Main function
function avoidnegative(event){
    event.key ==='-' || event.key ==='e' || event.key ==='E' ? event.preventDefault() : null;
}
function convertsecond(){
    if((UserHourInput.value=='')||(UserMinuteInput.value=='')||((UserHourInput.value==0)&&(UserMinuteInput.value==0))){
        alert(ERROR_MESSAGE);
    }else{
        //input values are change to integer type and calculate then display
        let inthour=parseInt(UserHourInput.value)
        let intminute=parseInt(UserMinuteInput.value)
        let second_formula=((inthour*PER_MINUTE)*PER_MINUTE)+(intminute*PER_MINUTE);
        secondOutput.value=second_formula;
    }
}
function converthourminute(){
    if(UserSecondInput.value==''){
        alert(ERROR_MESSAGE);
    }else{
        let intsecond=parseInt(UserSecondInput.value);
        if(intsecond<PER_MINUTE){
            alert("Enter above 60 seconds");
        }else{
            //input value are change to integer type and calculate then display
            let hour_formula=Math.floor(intsecond / PER_HOUR);
            let remain_seconds=intsecond % PER_HOUR;
            let minute_formula= Math.floor(remain_seconds / PER_MINUTE);
            hourMinuteOutput.value=hour_formula+' hour '+minute_formula+' minutes';
        }
        
    }
}
function reset(){
   RESET_ALL.forEach(input => input.value = '');
}