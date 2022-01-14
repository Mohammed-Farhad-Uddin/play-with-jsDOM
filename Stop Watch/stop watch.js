const stopWatchCounterStart = document.querySelector("#start");
const stopWatchCounterReset= document.getElementById("reset");
const stopWatchCounterPause =document.querySelector("#pause");
const minutes=document.getElementById("minutes");
const seconds=document.querySelector("#seconds");

let min;
let sec=0;
let timer=null;
let watchIsRunning=false;

function start(){
 if(!watchIsRunning){
     watchIsRunning=true
    timer=setInterval(() => {
        sec++ 
        let {min,second}=getTime(sec)
        minutes.textContent=min<10?('0'+min):min;
        seconds.innerHTML=second<10?('0'+second):second;
     }, 1000);
 }


}
function reset(){
    watchIsRunning=false
    clearInterval(timer);
    min=0;
    sec=0;
    minutes.textContent="00";
    seconds.innerHTML="00";
}
function stop(){
    watchIsRunning=false
    clearInterval(timer);
}

function getTime(sec){
    min=parseInt(sec/60); // 123/60=2
    let second=parseInt(sec%60); // 123%60=3
    return {
        min,
        second
    }
}

stopWatchCounterStart.addEventListener("click",start);
stopWatchCounterReset.addEventListener("click",reset);
stopWatchCounterPause.addEventListener("click",stop);