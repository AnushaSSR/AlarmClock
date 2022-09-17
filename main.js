let timeFormat;

//to display current time in the clock face
setInterval(() => {
    const date = new Date();
    const hourVal = date.getHours();
    let hours;
    let am_pm = "";
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const currentTime = document.getElementById("clock-face");

    if (hourVal > 12) {
        hours = hourVal - 12;
        am_pm = "PM";
    } else if (hourVal == 0) {//special case to handle when hourVal is 00, we will consider it as 12A.M
        hours = 12;
        am_pm = "AM";
    } else {
        hours = hourVal;
        am_pm = "AM";
    }

    //To get the time in the required format
    timeFormat = setDigit(hours) + " : " + setDigit(minutes) + " : " + setDigit(seconds) + " " + am_pm;
    currentTime.textContent = timeFormat;
}, 1000);


//Adjust the digits to 2 if single digit is entered for value less than 10 and return as it is two digits are entered or value is greater than 10
function setDigit(timeVal) {
    if (timeVal >= 10 || timeVal.toString().length == 2) { return timeVal; }
    else { return "0" + timeVal; }
}

//Check the input values of hours,mins and seconds and set them to value if value enteredis greater than the max value
//set to two digits if single is entered 
const hourIpCheck = document.getElementById('hour-val');
const minIpCheck = document.getElementById('min-val');
const secIpCheck = document.getElementById('sec-val');

hourIpCheck.addEventListener('blur', () => {
    if (hourIpCheck.value != "") {
        hourIpCheck.value = setDigit(hourIpCheck.value);
    } if (Number(hourIpCheck.value > 12) || ((hourIpCheck.value != "") && Number(hourIpCheck.value == 0))) {
        hourIpCheck.value = 12;
    } 
});

minIpCheck.addEventListener('blur', () => {
    if (minIpCheck.value != "") {
        minIpCheck.value = setDigit(minIpCheck.value);
    } setMinSec(minIpCheck);
});

secIpCheck.addEventListener('blur', () => {
    if (secIpCheck.value != "") {
        secIpCheck.value = setDigit(secIpCheck.value);
    } setMinSec(secIpCheck);
});

function setMinSec(valCheck) {
    if (Number(valCheck.value) > 59) {
        valCheck.value = "00";
    }
}


//set the alarm, adds alarm to the list 

let alarmsList = [];
function setAlarm() {

    let hourVal = document.getElementById('hour-val');
    let minVal = document.getElementById('min-val');
    let secVal = document.getElementById('sec-val');
    let ampmVal = document.getElementById('am-pm');

    // console.log(`hour.val is, ${hourVal.value}`);
    // console.log(hourVal.value != "" && minVal.value != "" && secVal.value != "" && ampmVal.value != "");
    // console.log(hourVal.value != "");

    if (hourVal.value != "" && minVal.value != "" && secVal.value != "" && ampmVal.value != "") {
        let alarmSetValue = `${hourVal.value} : ${minVal.value} : ${secVal.value} ${ampmVal.value}`;
        // `${setDigit(Number(hourVal.value))}:${setDigit(Number(minVal.value))}:${setDigit(Number(secVal.value))} ${ampmVal.value}`;
        if (alarmsList.indexOf(alarmSetValue) > -1) {
            alert("Alarm already set for the specified time");
        } else {
            alarmsList.push(alarmSetValue);
            sortList(alarmsList);
            populateAlarmList(alarmsList);
        }
    } else {
        alert("Please select/enter valid values for hh : mm : ss am/pm to set the alarm");
    }
}

// Populate the list with the added alarms by the user
function populateAlarmList(alarmsList) {
    let list = document.getElementById('alarms-list');
    list.innerHTML = "";

    for(index = 0; index < alarmsList.length; index++) {
        const element = alarmsList[index];
        const indexVal = index;
        let listElement = document.createElement('li');
        let deleteButton = document.createElement('button');
        let alarmElement = document.createElement('span');
        listElement.classList.add('list-element');
        deleteButton.classList.add('delete-list-element');
        deleteButton.classList.add('btn-danger');
        deleteButton.classList.add('btn');
        alarmElement.innerHTML = element;
        deleteButton.innerText = "Delete";

        deleteButton.addEventListener('click', () => {
            deleteListElement(indexVal);
        });

        listElement.appendChild(alarmElement);
        listElement.appendChild(deleteButton);
        list.appendChild(listElement);
    }
}

//sort the list of alarms
function sortList(alarmsList) {
    alarmsList.sort();
}

// delete the alarm selected by the user
function deleteListElement(indexVal) {
    alarmsList.splice(indexVal, 1);
    populateAlarmList(alarmsList);
};

//to keep track of the alarms set set by the user and alert the user
setInterval(() => {
    const currentTime = timeFormat;
    if (alarmsList.indexOf(currentTime) > -1) {

        alert("alarm on ");
    }

}, 1000);


