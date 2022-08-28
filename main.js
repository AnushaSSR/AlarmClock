let timeFormat;//to dsiplay current time in the clock face
setInterval(() => {
    const date = new Date();
    const hourVal = date.getHours();
    let hours;
    let am_pm = " ";


    if(hourVal >12)
    {
        hours = hourVal-12;
        am_pm = "PM";
    
    }
    //special case to handle when hourVal is 00, we will consider it as 12A.M
    else if(hourVal ==0)
    {
        hours=12;
        am_pm = "AM";
    
    
    }
    else
    {
        hours=hourVal;
        am_pm = "AM";
    
    }
    // hours = (date.getHours() < 12) ? date.getHours() : date.getHours() - 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();


    //To get the time in the required format
    timeFormat = setDigit(hours) + ":" + setDigit(minutes) + ":" + setDigit(seconds) + " " + am_pm;
    const currentTime = document.getElementById("clock-face");
    currentTime.textContent = timeFormat;
}, 1000);


//To adjust the digits to 2 if single digit is entered for value less than 10 and return as it if two digits entered or value is greater than 10
function setDigit(timeVal) {
    if ((timeVal >= 10) || (timeVal.toString().length == 2)) { return timeVal; }
    else { return "0" + timeVal; }
}


//set the alarm, adds alarm to the list 
let alarmsList = [];
function setAlarm() {
    // console.log("asjfhjfk");

    let hourVal = document.getElementById('hour-val');
    let minVal = document.getElementById('min-val');
    let secVal = document.getElementById('sec-val');
    let ampmVal = document.getElementById('am-pm');
    console.log(`hour.val is, ${hourVal.value}`);
    console.log(hourVal.value != "" && minVal.value != "" && secVal.value != "" && ampmVal.value != "");
    console.log(hourVal.value != "" );
   
    if(hourVal.value != "" && minVal.value != "" && secVal.value != "" && ampmVal.value != ""){
        let alarmSetValue = `${setDigit(hourVal.value)}:${setDigit(minVal.value)}:${setDigit(secVal.value)} ${ampmVal.value}`;
        if (alarmsList.indexOf(alarmSetValue) > -1) {
            alert("Alarm already set for the specified time");
        }
        else {
            alarmsList.push(alarmSetValue);
            sortList(alarmsList);
            populateAlarmList(alarmsList);
        }

    }

}

// to populate the list with the added alarms by the user
function populateAlarmList(alarmsList) {

    let list = document.getElementById('alarms-list');
    list.innerHTML = "";

    for (index = 0; index < alarmsList.length; index++) {
        const element = alarmsList[index];
        const indexVal = index;
        let listElement = document.createElement('li');
        let deleteButton = document.createElement('button');
        let alarmElement = document.createElement('span');
        listElement.classList.add('list-element');
        deleteButton.classList.add('delete-list-element');
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

//to keep track of the set alarm times and alert the user
setInterval(() => {
    const currentTime = timeFormat;
    for (index = 0; index < alarmsList.length; index++) {
        const alarmSetTime = alarmsList[index];
        if (currentTime == alarmSetTime) {
            alert("alarm on ");
        }
    }

}, 10);