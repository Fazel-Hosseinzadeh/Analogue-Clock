const hr = document.querySelector('.clock .hour-container .hour');
const mn = document.querySelector('.clock .minute-container .minute');
const sc = document.querySelector('.clock .second-container .second');

setInterval(()=>{

    const day = new Date();

    const h = day.getHours() >= 12 ? day.getHours() -12 : day.getMinutes();
    // const h = 5;
    const m = day.getMinutes();
    const s = day.getSeconds();


    hr.style.transform = `rotate(${((360 / 12) * h) + (360 / (12 * 60) * m)}deg)`; 
    mn.style.transform = `rotate(${(360 / 60) * m}deg)`; 
    sc.style.transform = `rotate(${(360 / 60) * s}deg)`; 
    
    console.log(h, m , s);
}, 1000);
