                                        /**
                                        Name of the challenge : String functions                        
                                        Challenge No          : 1                                                
                                        Developed for         : VHITECH Training Program         
                                                    Maintenance History                                                    
                                        Developer             : K.Manikandan                                                      
                                        Creation date         : 8/9/2023     
                                        Ticket No             :               
                                        **/

//Date and Time declaration
function datetime(){
    let currentDay=new Date();
    document.getElementById('current-date').textContent='Date : '+ currentDay.toLocaleDateString();
    document.getElementById('current-time').textContent='Time : '+currentDay.toLocaleTimeString('en-in');
}
setInterval(datetime,1000);

//Dom declaration
let UserInput=document.getElementById('user-string');
let findString=document.getElementById('searchstring');
let displaystring=document.getElementById('displayString');
let stringPalindrome=document.getElementById('palindrome');
let reverseUserInput=document.getElementById('reversestring');
const RESET_ALL = document.querySelectorAll('input');

//Error declaration 
const ERROR_MESSAGE="Please Enter The Input Value";


//Main function
function onlyAlphabet(event){
    const ch=event.charCode;
    if(/[a-zA-Z\s]/.test(String.fromCharCode(ch))){
        return true;
    }else{
        return false;
    }
}

function searchString(){
    if((UserInput.value=='')||(findString.value=='')){
        alert(ERROR_MESSAGE);
    }else{
    //replace all the space 
    let stringNoSpace=UserInput.value.replaceAll(' ','').toLowerCase();
    let searchUserString=findString.value.toLowerCase();
    let realfindstring = findString.value;
    //check user given string and search string
    displaystring.value=stringNoSpace.includes(searchUserString) ? realfindstring+" is Present in "+stringNoSpace : realfindstring+" is Not Present in "+stringNoSpace;
    //reverse input string and display it
    let reversestring='';
    for(let eachword=stringNoSpace.length;eachword>=0;eachword--){
        reversestring += stringNoSpace.charAt(eachword);
    }
    reverseUserInput.value=reversestring;
    //check palindrome and display it
    stringPalindrome.value=reversestring==stringNoSpace ? stringNoSpace+" is Palindrome" : stringNoSpace+" is Not Palindrome";
}
}

function reset(){
    RESET_ALL.forEach(input => input.value = '');
}