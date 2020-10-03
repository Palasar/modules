const timer = (deadLine, selectorDays, selectorHuors, selectorMinutes, selectorSeconds) => {
    let total = {},
        idTimeLeft = setInterval(setTimeLeft, 1000);

    function addZero(num){
        if(num < 10){
           return '0' + num;
        }else{
            return num;
        }
    }

    function calculateTimeLeft(endTime) {
        let totalTime = Date.parse(endTime) - Date.parse(new Date());

        if(totalTime <= 0){
            clearInterval(idTimeLeft);
            totalTime = 0;
        }

        total = {
            seconds: totalTime/1000 % 60,
            minutes: Math.floor(totalTime/(1000 * 60) % 60),
            hours: Math.floor(totalTime/(1000 * 60 * 60) % 24),
            days: Math.floor(totalTime/(1000 * 60 * 60 * 24)),
        };
    }

    function setTimeLeft (){

        calculateTimeLeft(deadLine);

        const days = document.querySelector(selectorDays),
              hours  = document.querySelector(selectorHuors),
              minutes = document.querySelector(selectorMinutes),
              seconds = document.querySelector(selectorSeconds);

        days.textContent = addZero(total.days);
        hours.textContent = addZero(total.hours);
        minutes.textContent = addZero(total.minutes);
        seconds.textContent = addZero(total.seconds);
    }  
};