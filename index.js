function currentTime() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const date = new Date();
    const day = date.getDay();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();

    const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;


    document.getElementById("currentUTCtime").innerHTML = milliseconds + " " +"milliseconds";
    document.getElementById("dayoftheweek").innerHTML = daysOfTheWeek[day];
}

setInterval(currentTime, 1000);