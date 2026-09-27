// Use currentTimeHour() and currentTimeMinute()
let hour  = currentTimeHour()
let minutes= currentTimeMinute()
let meridiem = ""
// to get the current time
if (hour >= 12){
  meridiem  = "pm"
}
  
else {
  meridiem  = "am"
}
if (hour > 12){
  hour  = hour - 12
}
else if (hour === 0){
  hour  = 12
}
// Convert to 12-hour format.
// Use displayTime() to update the clock.
displayTime(hour, minutes, meridiem)
