const decrease = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
let counter = document.getElementById("counter");

let count = 0;

decrease.onclick = function(){
    count--;
    counter.textContent = count;
    if(count===42 && count===49){
        counter.textContent = '🍭';
    }
}

resetbtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}

increasebtn.onclick = function(){

    count++;
    counter.textContent = count;
    if(count===42 && count===49){
        counter.textContent = '🍭';
    }
}

