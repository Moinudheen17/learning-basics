// Add your functions here

function turnAround(){
  turnRight()
  turnRight()
}
function canTurnLeft(){
  let direction = "left"
  if(look(direction)==="empty" || look(direction)==="target"){
    return true
  }
  else {
    return false
  }
}
function canMove(){
  let direction = "ahead"
  if(look(direction)==="empty" || look(direction)==="target"||look(direction)==="start"){
    return true
  }
  else {
    return false
  }
}
function canTurnRight(){
  let direction = "right"
  if(look(direction)==="empty" || look(direction)==="target"){
    return true
  }
  else {
    return false
  }
} 
repeat(){
  if (canTurnLeft()) {
    turnLeft()
    move()
  } 
  else if (canMove()) {
    move()
  } 
  else if (canTurnRight()) {
    turnRight()
    move()
  } 
  else {
    turnAround()
  }
}

