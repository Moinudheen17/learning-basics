// Check the dress code
let outfit  =  getOutfit()
let age = getAge()
let list = onGuestList()
if ( age >= 18 && outfit === "ballgown"){
  letIn()
  offerCanapes()
  offerChampagne()
}
else if ( age >= 18 && outfit === "tuxedo"){
  letIn()
  offerCanapes()
  offerChampagne()
}
else if (age < 18 && outfit === "ballgown"){
  letIn()
  offerCanapes()
}
else if (age < 18 && list === true){
  letIn()
}
else if ( outfit === "suit" && list === false){
  letIn()
  offerCanapes()
}
else if ( age < 18 && outfit === "tracksuit"){
  turnAway()
}
else if (age > 18 && outfit === "denim"){
  turnAway()
}
else{
  letIn()
  offerCanapes()
}
  
