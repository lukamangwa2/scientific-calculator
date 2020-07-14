//function to display time
function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

  //A statement to display either  “AM or PM”
    var mode;
    if(h <= 11){
        mode = "AM";
    }else{
        mode = "PM";
    }
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " " + mode;
    var t = setTimeout(startTime, 500);
}
  //function to add zero in front of numbers < 10
    function checkTime(i){
        if(i < 10){i = "0" + i}
         return i;
    }


//A function to display a number when button is pressed
function v(val){
document.getElementById("screen").value += val;
}

//A function to clear the screen or display 
function c(val){
document.getElementById("screen").value = val;
}

//A function to evaluate or solve for result when = sign is pressed
function solve(){
try{
    c(eval(document.getElementById("screen").value))
}
catch(solve){
    c('Syntax Error')
}
}

//Function to calculate the sine, cosine and tan of an angle in DEG
function sine(){
sci_cal.screen.value = Math.sin(sci_cal.screen.value * Math.PI / 180);
}

function cosine(){
sci_cal.screen.value = Math.cos(sci_cal.screen.value * Math.PI / 180)
}

function tan(){
sci_cal.screen.value = Math.tan(sci_cal.screen.value * Math.PI / 180)
}

//Function to calculate asin, acos and atan in DEG(degrees)
function invsine(){
sci_cal.screen.value = Math.asin(sci_cal.screen.value) * (180 / Math.PI)
}
function invcosine(){
sci_cal.screen.value = Math.acos(sci_cal.screen.value) * (180 / Math.PI)
}

function invtan(){
sci_cal.screen.value = Math.atan(sci_cal.screen.value) * (180 / Math.PI)
}

//Function to calculate the natural logarithm LN of a number and log10
function ln(){
sci_cal.screen.value = Math.log(sci_cal.screen.value)
}

function log(){
sci_cal.screen.value = Math.log10(sci_cal.screen.value)
}

//Function for percentage
function percent(){
sci_cal.screen.value = sci_cal.screen.value / 100
}

//Function for sqaure, cube and square root
function sqaure(){
sci_cal.screen.value = Math.pow(sci_cal.screen.value, 2)
}
function cube(){
 sci_cal.screen.value = Math.pow(sci_cal.screen.value, 3)
}

function sqrt(){
 sci_cal.screen.value = Math.sqrt(sci_cal.screen.value)
}

//Function for the Del key
function backspace(){
 const space = document.getElementById("screen");
 space.value = space.value.substring(0, space.value.length -1);
}

//function for +/-(plusMinus)
function plusminus(){
 var x = document.getElementById("screen");
 var y = x.value;
 y = y * -1;
 x.value = y;
}

//function for exp
function Exp(){
 sci_cal.screen.value = Math.pow(10, sci_cal.screen.value)
}