const hr = document.querySelector('.clock .hour-container .hour');
const mn = document.querySelector('.clock .minute-container .minute');
const sc = document.querySelector('.clock .second-container .second');

const day = new Date();

const s = day.getSeconds();
let ms = s *1000;

setInterval(()=>{    

    const h = day.getHours() >= 12 ? day.getHours() -12 : day.getMinutes();
    const m = day.getMinutes();
    ms += 10 ;

    hr.style.transform = `rotate(${((360 / 12) * h) + (360 / (12 * 60) * m)}deg)`; 
    mn.style.transform = `rotate(${(360 / 60) * m}deg)`; 
    sc.style.transform = `rotate(${360 / (60 * 1000) * ms}deg)`;    
    
}, 10);
