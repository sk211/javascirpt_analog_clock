const hourEl =  document.querySelector('.hour');
const minutsEl =  document.querySelector('.minits');
const secondEl =  document.querySelector('.second');

function updateClock(){
    const currentDate = new Date()
    setTimeout(updateClock, 1000)
    const hour = currentDate.getHours();
    const minuts = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    const hourDeg = (hour/ 12) *360;
    // hour function 
    hourEl.style.transform= `rotate(${hourDeg}deg)`
    console.log(currentDate)
    // second function 
    const minutsDeg = (minuts/ 60) *360;
    minutsEl.style.transform= `rotate(${minutsDeg}deg)`
    console.log(currentDate)
    // second function 
    const secondDeg = (second/ 60) *360;
    secondEl.style.transform= `rotate(${secondDeg}deg)`
    console.log(currentDate)
}
updateClock()