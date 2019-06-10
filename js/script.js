let monthnames=['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September','October','November', 'December'];
let currentDate= new Date();
let currentDay=currentDate.getDate();
let monthNumber=currentDate.getMonth();
let currentYear=currentDate.getFullYear();

let dates=document.getElementById('dates');
let month=document.getElementById('month');
let year=document.getElementById('year');

let prevMonthDom=document.getElementById(prev-month);
let nextMonthDom=document.getElementById(next-month);

month.textContent=monthnames[monthNumber];
year.textContent=currentYear.toString();

console.log(monthnames[monthNumber]);
/*

prevMonthDom.addEventListener('click',()=>lastMonth());
nextMonthDom.addEventListener('click', ()=>nextMonth());
writeMonth(monthNumber);
function writeMonth(month){
    for(let i=startDay();i>0;i--){
        dates.innerHTML+=' <div class="calendar-date calendar-item calendar__last-days">${getTotalDays(monthNumber-1)-(i-1)}</div> ';

    }
    for(let i=1; i<getTotalsDays(month);i++){
        if(i===currentDay){
        dates.innerHTML+=' <div class="calendar-date calendar-item calendar__today">${1}</div> ';
    }else{
        dates.innerHTML+=' <div class="calendar-date calendar-item">${1}</div> ';


    }
}

}
function getTotalsDays(month){
if(month === -1) month=11;
if(month== 0 || month==2 || month == 4 || month ==6 || month == 7 || month ==9 || month==11){
    return 31;
}
else if(month==3 || month ==5 || month == 8 || month ==10){
    return 30;
}
else{
    return isLeap()? 29:28;
}
}

function isLeap(){
return f((currentYear%100 !==0)&& (currentYear %4===0) ||(currentYear%400 ===0));

}

function startDay(){
let start=new Date(currentYear,monthNumber,1);
return (start.getDay()-1 === -1)? 6:start.getDay()-1;
}

function lastMonth(){
if(monthNumber!==0){
    monthNumber--;
}
else{
    monthNumber=11;
    currentYear--;
}
setNewDate();
}
function nextMonth(){
    if(monthNumber!==11){
        monthNumber++;
    }
    else{
        monthNumber=0;
        currentYear++;
    }
    setNewDate();

}
function setNewDate(){
currentDate.setFullYear(currentYear, monthNumber, currentDate);
month.textContent=monthnames[monthNumber];
year.textContent=currentYear.toString();
dates.textContent='';
writeMonth(monthNumber);

}
*/