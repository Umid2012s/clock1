let sec = document.querySelector(".s"),
    min = document.querySelector(".m"),
    hour = document.querySelector(".h"),
    hoursNumber = document.querySelector(".hours"),
    minutesNumber = document.querySelector(".minutes"); 

function clock() {
    let time = new Date();
    let seconds = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style.transform = `rotate(${seconds}deg)`;
    min.style.transform = `rotate(${minutes}deg)`;
    hour.style.transform = `rotate(${hours}deg)`;

    setTimeout(() => clock(), 1000)

    hoursNumber.innerHTML = time.getHours() < 9 ? "0" + time.getHours() : time.getHours();
    minutesNumber.innerHTML = time.getMinutes() < 9 ? "0" + time.getMinutes() : time.getMinutes();


    
}
clock()

let links = document.querySelectorAll(".tabsItem");
let tabs = document.querySelectorAll(".tabsContentItem");

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        event.preventDefault();
        for(let x = 0; x < tabs.length; x++) {
            links[x].classList.remove("active")
            tabs[x].classList.remove("active")
        }
        this.classList.add("active")
        tabs[i].classList.add("active")
    })
}

// let watchBtn = document.querySelector(".stopwatch__btn")
let $ = el => document.querySelector(el);


let watchBtn = $(".stopwatch__btn"),
    watchSpan = $(".tabsLink__span"),
    watchSeconds = $(".stopwatch__seconds"),
    watchMinutes = $(".stopwatch__minutes"),
    watchHours = $(".stopwatch__hours");

    watchBtn.addEventListener("click", function() {
        if(this.innerHTML == "start") {
            this.innerHTML = "stop"
            watchSpan.classList.add("active")
            let i = 0
            setTimeout(() => stopWatch(this, i), 1000)
        }else if(this.innerHTML == "stop") {
            this.innerHTML = "clear"
            watchSpan.classList.add("active_clear")
            watchSpan.classList.remove("active")
        }else {
            this.innerHTML = "start"
            watchSpan.classList.remove("active_clear")
            watchSeconds.innerHTML = 0;
            watchMinutes.innerHTML = 0;
            watchHours.innerHTML = 0;
        }
    })
    function stopWatch(btn, i) {
        if(btn.innerHTML == "stop") {
            if(i == 59) {
                i = 0
                watchSeconds.innerHTML = i
                if(watchMinutes.innerHTML == 59) {
                    watchMinutes.innerHTML = 0
                    watchHours.innerHTML++
                }else {
                    watchMinutes.innerHTML++
                }
            }else {
                i++
                watchSeconds.innerHTML = i
                
            }
            setTimeout(() => stopWatch(btn, i), 1000)
        }
    }
