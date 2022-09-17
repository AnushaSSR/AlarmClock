# AlarmClock
An alarm app which alerts upon the time set by user
Clock face will display the current time.
To see the alarm in action specify by typing or by arrow keys the hours, minutes, seconds and am/pm in the form elements.
This app wont allow the user to set the alarm with the invalid values. This app follows 12 hours format where the max value and min values of hours, minutes and seconds are validated.Null and negative values are invalid.

# Functionality
Clicking on set alarm without any values an alert appears and it wont be added to the list.
Hours max value : 12, min value 1.
Minutes max value: 59, min value 0.
Seconds max value: 59, min value 0.
Empty values in AM/PM are not valid.
Upon typing the value above the max values ,below the min value the values will be auto adjusted.
After selecting/ specifying the valid values, click on the set alarm button after selecting the specified time at you wish to set the alarm.
User will be alerted upon trying to set alarm at exiting alarm time. Duplicates not allowed.
Upon clicking the set alarm, that values will be added to the list along with a delete button for the specified time.
When the current time is equal to the time set by the sure an alert will appear specifying " Alarm on @ time".
Upon clicking on delete, user will be able to delete the alarm from the list and user wont be alerted at those deleted times.
