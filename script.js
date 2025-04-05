const hr = document.querySelector('.clock .hour-container .hour');
const mn = document.querySelector('.clock .minute-container .minute');
const sc = document.querySelector('.clock .second-container .second');
const digitalClock = document.querySelector(".clock .digital");

const day = new Date();
const s = day.getSeconds();
let ms = s *1000;

setInterval(()=>{    
    const day = new Date();
    const h = day.getHours() >= 12 ? day.getHours() -12 : day.getMinutes();
    const m = day.getMinutes();
    ms = ms < 60000 ? ms += 10 : 0;

    hr.style.transform = `rotate(${((360 / 12) * h) + (360 / (12 * 60) * m)}deg)`; 
    mn.style.transform = `rotate(${(360 / 60) * m}deg)`; 
    sc.style.transform = `rotate(${360 / (60 * 1000) * ms}deg)`;   
        
}, 10);

setInterval(()=>{
    const day = new Date();
    const halfDay = day.getHours() >= 12 ? 'PM' : 'AM';
    
    const h = day.getHours() >=  22 ?  day.getHours() - 12
    : day.getHours() < 22 && day.getHours() >=13 ?  "0" + (day.getHours() -12)
    : day.getHours() === 12 ? day.getHours()
    : day.getHours() <= 11 && day.getHours() >= 10 ? day.getHours()
    : day.getHours() <= 9 ? "0" + day.getHours() : day.getMinutes();
    const m = day.getMinutes() <10 ? "0" + day.getMinutes() :day.getMinutes() ;
    const s = day.getSeconds() < 10 ? "0" + day.getSeconds() : day.getSeconds() ;
    digitalClock.innerHTML = h + ":" + m + ":" + s + ' ' + halfDay;

}, 1000)