const daysEle=document.getElementById("days");
const hoursEle=document.getElementById("hours");
const minutesEle=document.getElementById("minutes");
const secondsEle=document.getElementById("seconds"); 
const newYears='1 Jan 2026';
function countDown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=(Math.floor(totalSeconds/60)%24)%60;
    const seconds=Math.floor(totalSeconds)%60
    console.log(days,hours,minutes,seconds);


    daysEle.innerHTML=formatTime(days);
    hoursEle.innerHTML=formatTime(hours);
    minutesEle.innerHTML=formatTime(minutes);
    secondsEle.innerHTML=formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}
//initial call
countDown();
setInterval(countDown,1000);
