//to dsiplay current time in the clock face
setInterval(() => {
    const date = new Date();
    const hourVal = date.getHours();
    const hours = (date.getHours() < 12) ? date.getHours() : date.getHours() - 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let am_pm = " ";


    //logic to handle the am,pm based on the time
    if (hourVal > 12) {
        am_pm = "PM";
    }
    else {
        am_pm = "AM";
    }

    //To get the time in the required format
    const timeFormat = setDigit(hours) + ":" + setDigit(minutes) + ":" + setDigit(seconds) + " " + am_pm;
    const currentTime = document.getElementById("clock-face");
    currentTime.textContent = timeFormat;
}, 1000);


//To adjust the digits to 2 if single digit is entered for value less than 10 and return as it if two digits entered or value is greater than 10
function setDigit(timeVal) {
    if ((timeVal >= 10) || (timeVal.toString().length == 2)) { return timeVal; }
    else { return "0" + timeVal; }
}
