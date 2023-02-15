// select elements
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
    const testDeadline = document.getElementById('deadline')
    const timerContainer = document.querySelector('.timer-container');
    const countdownItems = document.querySelectorAll('.timer-format > .time');

    // this is done in order to update and show that the app is up and running anytime
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    // let futureDate = new Date(2022,9,26,15,30,0);

    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 15, 30, 0);

    const year = futureDate.getFullYear();
    const hour = futureDate.getHours();
    const min = futureDate.getMinutes();
    const sec = futureDate.getSeconds();

    let month = futureDate.getMonth();
    month = months[month]

    const date = futureDate.getDate();
    let weekday = futureDate.getDay();
    weekday = weekdays[weekday];

    testDeadline.innerHTML = 'free test ends on '+ weekday + ", " +date + " " + month + " " + year + ". " + hour + ":" + min + ":" + sec + "pm";


    // future time in milliseconds
    const futureTime = futureDate.getTime();

    function getRemainingTime(){
        const today = new Date().getTime();
        const t  = futureTime - today;

        // 1s = 1000ms
        // 1min = 60s
        // 1hr = 60min
        // 1d = 24hrs

        // values in ms
        const oneDay = 24*60*60*1000;
        const oneHour = 60*60*1000;
        const oneMin= 60*1000;

        // calculate
        let days = t/oneDay;
        days = Math.floor(days);
        // unlike days, you have to calculate the reminder before you divide it the same goes to min & sec
        let hours = (t % oneDay) / oneHour;
        hours = Math.floor(hours);
        let mins = (t % oneHour) / oneMin;
        mins = Math.floor(mins);
        let secs = (t % oneMin) / 1000;
        secs = Math.floor(secs)


        // set array for values
        const values = [days,hours,mins,secs]

        function format(item){
            if(item < 10){
                return (item = '0' + item);
            }
            return item
        }

        countdownItems.forEach(function(item, index){
            item.innerHTML = format(values[index]);
        });

        if(t < 0){
            clearInterval(countdown);

            timerContainer.innerHTML = '<h3 class="timer-format">Sorry, the free test has expired<h3/>';
        }
    }

    
    let countdown = setInterval(getRemainingTime, 1000);
    getRemainingTime()