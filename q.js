let day = document.getElementById("day")
let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let new_date = new Date("Dec 9,2025 00:00:00").getTime();

setInterval(() => {
    let current_date = new Date().getTime();
    let ans_date = (new_date - current_date) / 1000;

    day.innerHTML = Math.floor(ans_date / (24 * 60 * 60))
    hour.innerHTML = Math.floor(ans_date / (60 * 60) % 24)
    min.innerHTML = Math.floor((ans_date / 60) % 60)
    sec.innerHTML = Math.floor(ans_date % 60)
    
    if(ans_date<=0){
        day.innerHTML = "00"
        hour.innerHTML = "00"
        min.innerHTML = "00"
        sec.innerHTML ="00"
    }
}, 1000);
