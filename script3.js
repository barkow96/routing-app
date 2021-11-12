//GET ACCESS TO HTML ELEMENTS
const endDateDiv = document.getElementById("endDate");
const timerDiv = document.getElementById("timer");
const dateInput = document.getElementById("dateInput");
const timeInput = document.getElementById("timeInput");

//DEFINE END DATE
const endDate = new Date("January 01, 2022 00:00:00");

//------------
//MAIN PROGRAM
//------------
window.onload = () => {
    setInterval(() => {
        endDateDiv.innerHTML = "Countdown to: " + endDate.toLocaleString();

        const nowDate = new Date().getTime();
        const difference = endDate - nowDate;
    
        let days = Math.floor(difference / (1000*60*60*24));
        let hours = Math.floor((difference % (1000*60*60*24)) / (1000*60*60));
        let minutes = Math.floor((difference % (1000*60*60)) / (1000*60)) + 1;
    
        if (days <= 0 && hours <= 0 && minutes <= 0) timerDiv.innerHTML = "TIME EXPIRED";
        else {
            if (days < 10) days = "0" + days;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
    
            timerDiv.innerHTML = `${days} - ${hours} - ${minutes}`;
        }
    }, 1000);
};

dateInput.addEventListener("change", () => {
    const inputYear = dateInput.value.substring(0,4);
    const inputMonth = dateInput.value.substring(5,7)-1;
    const inputDay = dateInput.value.substring(8,10);

    endDate.setFullYear(inputYear);
    endDate.setMonth(inputMonth);
    endDate.setDate(inputDay);
});

timeInput.addEventListener("change", () => {
    const inputHour = timeInput.value.substring(0,2);
    const inputMinutes = timeInput.value.substring(3,5);
    
    endDate.setHours(inputHour);
    endDate.setMinutes(inputMinutes);
});