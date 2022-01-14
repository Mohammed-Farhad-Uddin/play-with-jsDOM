const hr=document.getElementById("hour");
const min=document.getElementById("minute");
const sec=document.getElementById("second");
const prog=document.getElementById("progress");

function showCurrentTime(){
    let date=new Date();
    let hr1=date.getHours();
    let min1=date.getMinutes();
    let sec1=date.getSeconds();

    hr.innerHTML=hr1;
    min.textContent=min1;
    sec.textContent=sec1;

    prog.style.width=(sec1/60)*100 +"%"

}

setInterval(showCurrentTime, 1000);